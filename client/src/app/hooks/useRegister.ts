import { useState } from "react";
import axios from "axios";
import { useAppDispatch } from "../store/configureStore";
import { adUserStatus } from "../features/roleHandyman/adSlice";

interface RegisterProps {
  email: string;
  password: string;
  category: string;
  role: string;
  username: string
}

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const registration = async ({ email, password, category, role, username }: RegisterProps) => {
    setIsLoading(true);
    setError(null);

    const response = await axios.post(
      "/user/signup",
      { email, password, category, role, username },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    localStorage.setItem("user", JSON.stringify({...response.data }));
    dispatch(adUserStatus(response.data));
    setIsLoading(false);
  };
  return {
    registration,
    isLoading,
    error,
  };
};
