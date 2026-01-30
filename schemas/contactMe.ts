import * as z from "zod";

export const contactMeSchema = z.object({
  email: z.email("Invalid email").max(255).optional().or(z.literal("")),
  message: z.string().min(1, "Message is required").max(1000),
});

export type ContactMe = z.infer<typeof contactMeSchema>;
