import { useAuthContext } from "../context/AuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    //remove user from localStorage
    localStorage.removeItem("user");

    //dispatch logout funtion
    dispatch({ type: "LOGOUT" });
  };
  return {
    logout,
  };
};
