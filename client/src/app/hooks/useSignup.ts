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
  const {dispatch} = useAuthContext()

  const signup = async ({ email, password }: SignupProps) => {
    setIsLoading(true);
    setError(null);

    const response = agent.requests.post(
      "/user/signup",
      JSON.stringify({ email, password })
    );

    const json = await response.json();

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
    }
  };
};
