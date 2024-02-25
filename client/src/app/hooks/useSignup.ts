import { useState } from "react";
import agent from "../api/agent";
import { useAuthContext } from "../context/AuthContext";

interface SignupProps {
  email: string;
  password: string;
}

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async ({ email, password }: SignupProps) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await agent.requests.post(
        "/user/signup",
        JSON.stringify({ email, password })
      );
      localStorage.setItem("user", JSON.stringify(response));
      dispatch({ type: "LOGIN", payload: response });
    } catch (erorr: any) {
      console.log(error)
    }
  };
};
