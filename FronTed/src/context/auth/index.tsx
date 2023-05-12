import Cookies from "js-cookie";
import { createContext, useContext, useState } from "react";

export interface SignInProps {
  token: string;
  username: string;
  profilePicture: string;
}

interface IAuthContext {
  logged: boolean;

  signIn(params: SignInProps): void;

  signOut(): void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
const AuthProvider = ({ children }: any) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = Cookies.get("@logged");
    return !!isLogged;
  });

  //Chamar se a request de login for sucesso
  const signIn = (params: SignInProps) => {
    setLogged(true);
    const { profilePicture, token, username } = params;
    Cookies.set("@logged", "true");
    Cookies.set("@userName", username);
    Cookies.set("@profilePicture", profilePicture);
    Cookies.set("@FTP-token", token);
  };

  const signOut = () => {
    setLogged(false);

    Cookies.remove("@logged");
    Cookies.remove("@userName");
    Cookies.remove("@profilePicture");
    Cookies.remove("@FTP-token");
  };

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
