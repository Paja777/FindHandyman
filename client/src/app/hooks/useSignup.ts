import { useState } from "react";
import axios from "axios";
import { useAppDispatch } from "../store/configureStore";
import { adUserStatus } from "../features/roleHandyman/adSlice";

interface SignupProps {
  email: string;
  password: string;
}

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const signup = async ({ email, password }: SignupProps) => {
    setIsLoading(true);
    setError(null);

    const response = await axios.post(
      "/user/signup",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    localStorage.setItem("user", JSON.stringify(response));
    dispatch(adUserStatus(response.data));
    setIsLoading(false);
  };
  return {
    signup,
    isLoading,
    error,
  };
};
