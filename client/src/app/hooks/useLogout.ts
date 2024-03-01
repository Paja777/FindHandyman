import { useAuthContext } from "../context/AuthContext";
import { adUserStatus } from "../features/ads/adSlice";
import { useAppDispatch } from "../store/configureStore";

export const useLogout = () => {
  const dispatch = useAppDispatch()
  const logout = () => {
    //remove user from localStorage
    localStorage.removeItem("user");

    //dispatch logout funtion
    dispatch(adUserStatus(''));
  };
  return {
    logout,
  };
};
