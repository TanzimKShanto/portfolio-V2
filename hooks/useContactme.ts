import { toast } from "sonner";
import { useApiMutation } from "./useApiMutation";

export const useContactme = () =>
  useApiMutation({
    path: "https://api.web3forms.com/submit",
    method: "POST",
    onSuccess: () => {
      toast.success("Message sent successfully");
    },
    onError: () => {
      toast.error("Message failed to send");
    },
  })
  ;
