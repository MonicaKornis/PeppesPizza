import { getAuthUser, login, logout } from '../api/auth'
import { AuthUser } from '../types/index';

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

type AuthContext = {
  authToken?: string | null;
  currentUser?: AuthUser | null;
  handleLogin: (email: string) => Promise<void>;
  handleLogout: () => Promise<void>;
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

type AuthProviderProps = PropsWithChildren;

export default function AuthProvider({ children }: AuthProviderProps) {
  const [authToken, setAuthToken] = useState<string | null>();
  const [currentUser, setCurrentUser] = useState<AuthUser | null>();

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await getAuthUser();

        // @ts-ignore
        const { authToken, AuthUser } = response && response[1];

        setAuthToken(authToken);
        setCurrentUser(AuthUser);
      } catch {
        setAuthToken(null);
        setCurrentUser(null);
      }
    }

    fetchUser();
  }, []);

  async function handleLogin(email: string) {
    try {
      const response = await login(email);

      const { authToken, AuthUser } = response[1];

      setAuthToken(authToken);
      setCurrentUser(AuthUser);
    } catch {
      setAuthToken(null);
      setCurrentUser(null);
    }
  }

  async function handleLogout() {
    setAuthToken(null);
    setCurrentUser(null);
    logout();
  }

  return (
    <AuthContext.Provider
      value={{
        authToken,
        currentUser,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContext | undefined {
    const context = useContext(AuthContext);
    return context;
  }