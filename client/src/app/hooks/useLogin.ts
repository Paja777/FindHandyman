import { useState } from "react";
import axios from "axios";
import { useAppDispatch } from "../store/configureStore";
import { adUserStatus } from "../features/ads/adSlice";

interface SignupProps {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const login = async ({ email, password }: SignupProps) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "/user/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify({...response.data}));
      dispatch(adUserStatus(response.data));
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
      setError(error);
    }
  };
  return {
    login,
    isLoading,
    error,
  };
};
