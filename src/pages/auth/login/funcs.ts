import { useCallback } from "react";
import { useToast } from "@/components/ui/use-toast";
import { TLoginResult } from "@/types";

export const useSubmitLogin = () => {
  const { toast } = useToast();

  const onSubmit = useCallback(
    async (url: string, data: { username: string; password: string }) => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result: TLoginResult = await response.json();
        if (result.token) {
          toast({
            variant: "default",
            title: "Welcome",
            description: result.message,
          });
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: result?.message,
          });
        }
      } catch (err) {
        throw new Error((err as Error).message);
      }
    },
    [toast]
  );
  return onSubmit;
};
