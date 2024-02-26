import { useState } from "react";
import agent from "../api/agent";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";

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
    

    
      const response = await axios.post(
        "/user/signup",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response));
      dispatch({ type: "LOGIN", payload: response.data });
      setIsLoading(false);
    
  };
  return {
    signup,
    isLoading,
    error,
  };
};
