import { createContext, useReducer, useContext, PropsWithChildren } from "react";


interface AuthContextValue {
  user: string | null;
  dispatch: React.Dispatch<ActionType>;
}

interface LoginAction {
  type: "LOGIN";
  payload: string; 
}

interface LogoutAction {
  type: "LOGOUT";
}

type ActionType = LoginAction | LogoutAction;

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw Error("Oops - we do not seem to be inside the provider");
  }

  return context;
}

export const AuthReducer = (state: AuthContextValue, action : ActionType) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children } : PropsWithChildren<any>) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    user: null,
  });
  console.log("AuthContex state :", state);

  return (
    <AuthContextProvider value={{ ...state, dispatch }}>
      {children}
    </AuthContextProvider>
  );
};
