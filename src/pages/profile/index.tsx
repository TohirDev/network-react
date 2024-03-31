import { Button } from "@/components/ui/button";
import { getTokenFromCookie, removeTokenCookie } from "@/global";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();
  const token = getTokenFromCookie();
  useEffect(() => {
    if (token) return;
    else navigate("/login");
  }, [token, navigate]);
  return (
    <div>
      <Button
        variant={"destructive"}
        onClick={() => {
          removeTokenCookie();
          navigate("/login");
        }}
      >
        Log out
      </Button>
    </div>
  );
};
