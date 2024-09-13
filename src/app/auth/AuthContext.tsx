import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { invalidateToken, register, useLogin, useRegister } from './auth-utils';

interface IAuthContext {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  isAuthenticated: () => boolean;
  logout: VoidFunction;
}

const AuthContext = createContext<IAuthContext>({
  login: () => Promise.reject(),
  register: () => Promise.reject(),
  isAuthenticated: () => false,
  logout: () => {},
});

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const register = useRegister();
  const login = useLogin(() => setIsLoggedIn(true));

  console.log('isLoggedIn', isLoggedIn);

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        isAuthenticated: () => isLoggedIn,
        logout: () => {
          invalidateToken();
          setIsLoggedIn(false);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
