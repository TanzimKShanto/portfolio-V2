"use client";
import { ContactMe, contactMeSchema } from "@/schemas/contactMe";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogClose, DialogDescription } from "./ui/dialog";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldGroup, Field, FieldLabel, FieldError, FieldContent } from "./ui/field";
import { Input } from "./ui/input";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "./ui/input-group";
import { useContactme } from "@/hooks/useContactme";
import { useState } from "react";
import { IconLoader } from "@tabler/icons-react";

export default function ContactMeFormDialog() {

  const sendMessage = useContactme();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const defaultValues: ContactMe = {
    email: "",
    message: "",
  }
  const form = useForm<ContactMe>({
    resolver: zodResolver(contactMeSchema),
    defaultValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const handleOnSubmit = (data: ContactMe) => {
    setLoading(true);
    sendMessage.mutate({
      ...data,
      access_key: "73d370cd-df3c-40fb-8372-0c2ea8973a4a"
    },
      {
        onSuccess: () => {
          setLoading(false);
          handleOpenChange(false);
        }
      },
    )
    console.log(data);
  };

  const handleOpenChange = (open: boolean) => {
    form.reset();
    setOpen(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild >
        <Button className="">
          Contact me
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Send me a message</DialogTitle>
          <DialogDescription>
            Hey, thanks for visiting my website! If you have any questions or just want to say hi, feel free to send me a message.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(handleOnSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <FieldContent>
                    <Input aria-invalid={fieldState.invalid} placeholder="yourEmail@email.com (if you'd like a response)" {...field} />
                  </FieldContent>
                  <FieldError>{form.formState.errors.email?.message}</FieldError>
                </Field>
              )}
            />
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor={field.name}>Message</FieldLabel>
                  <FieldContent>
                    <InputGroup>
                      <InputGroupTextarea
                        aria-invalid={fieldState.invalid}
                        placeholder="Type your message here"
                        rows={4}
                        {...field}
                      />
                      <InputGroupAddon align={"block-end"}>
                        <InputGroupText>
                          {field.value.length} / 1000
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FieldContent>
                  <FieldError>{form.formState.errors.message?.message}</FieldError>
                </Field>
              )}
            />
          </FieldGroup>
          <DialogFooter className="mt-4">
            <Button
              type="submit"
            >
              {loading && <IconLoader className="animate-spin" />}
              Send</Button>
            <DialogClose asChild>
              <Button variant={"outline"}>Close</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
