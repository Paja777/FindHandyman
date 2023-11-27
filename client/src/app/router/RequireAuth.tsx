import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";

export default function RequireAuth() {
    const {role} = useAppSelector(state => state.account);
    const location = useLocation();

    if(role === '') {
        return <Navigate to='/login' state={{from: location}}/>
    }

    return <Outlet />
}