import { useCallback, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { TLoginResult } from "@/types";
import { setTokenCookie } from "@/global";
import { useNavigate } from "react-router-dom";

export const useSubmitLogin = (): [
  (
    url: string,
    data: {
      username: string;
      password: string;
    }
  ) => Promise<void>,
  { loading: boolean }
] => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const onSubmit = useCallback(
    async (url: string, data: unknown) => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result: TLoginResult = await response.json();
        if (result.token) {
          setTokenCookie(result.token, 30);
          toast({
            variant: "default",
            title: "Welcome",
            description: result.message,
          });
          navigate("/profile");
        } else {
          setLoading(false);
          toast({
            variant: "destructive",
            title: "Error",
            description: result?.message,
          });
        }
      } catch (err) {
        toast({
          variant: "destructive",
          title: "Error",
          description: (err as Error).message,
        });
      } finally {
        setLoading(false);
      }
    },
    [navigate, toast]
  );
  return [onSubmit, { loading }];
};
