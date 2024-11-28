import { AuthUser } from './../types/index';
import { v1 as uuid} from 'uuid';

const LOCAL_STORAGE_KEY = 'AuthUserAuth';

export function getSavedAuthUser(): { AuthUser: AuthUser | null, authToken: string | null } {
  const savedAuth = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedAuth) {
    return JSON.parse(savedAuth);
  }
  return { AuthUser: null, authToken: null };
}

export async function getAuthUser() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { AuthUser, authToken } = getSavedAuthUser();
  
  if (AuthUser && authToken) {
    return [200, { authToken, AuthUser }] as const;
  }
  
  return [401, null] as const;
}

export async function login(email) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const authToken = generateAuthToken();
  const AuthUser: AuthUser = {
    id: uuid(),
    email: email,
    role: 'viewer',
  };
  
  if(email === 'admin@peppespizza.com') { //ADMIN EMAIL 
    AuthUser.role = 'admin'
  }
  // Save to localStorage
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ AuthUser, authToken }));
  if(email.length === 0) throw new Error('Email not provided');
  return [200, { authToken, AuthUser }] as const;
}

export function logout() {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

function generateAuthToken() {
  return Math.random().toString(36).substring(2);
}