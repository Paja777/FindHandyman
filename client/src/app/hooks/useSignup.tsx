import { useState } from "react";
import agent from "../api/agent";

interface SignupProps {
  email: string;
  password: string;
}

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signup = async({ email, password }: SignupProps) => {
    setIsLoading(true);
    setError(null);

    const response = agent.requests.post(
      "/user/signup",
      JSON.stringify({ email, password })
    );

    const json = await response.json()
  };
};
