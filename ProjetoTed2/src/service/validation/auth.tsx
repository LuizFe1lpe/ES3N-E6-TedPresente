import { createContext, useState, useContext } from "react";
import { api } from "../api";

interface IAuthContext {
  logged: boolean;

  singIn(loginEmail: string, senha: string): void;

  singOut(): void;
}

type SignInCredentials = {
  username: string;
  password: string;
};

const AuthContext = createContext<IAuthContext>({} as IAuthContext);
const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<SignInCredentials>({} as SignInCredentials);
  const [logged, setLogged] = useState(false);
  console.log(user)
  const handleState = () => {
    return setLogged(true);
  };

  const singIn = async (username, password) => {
    await api
      .post("/login", { username: username, password: password })
      .then(() => {
        setUser({
          username,
          password,
        });
        handleState();
      });
  };

  const singOut = () => {
    setLogged(false);
    localStorage.removeItem("@smch-dashboard:logged");
    localStorage.removeItem("@InfoUser:type");
  };
  return (
    <AuthContext.Provider value={{ logged, singIn, singOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
