import { FC, PropsWithChildren, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { storeDeepLink } from './auth-utils';
import { useAuthContext } from './AuthContext';

export const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  const { pathname } = useLocation();

  if (!isAuthenticated()) {
    storeDeepLink(pathname);
  }

  return isAuthenticated() ? children : <Navigate to={'/login'} />;
};

export const withAuthGuard = (children: ReactNode) => (
  <AuthGuard>{children}</AuthGuard>
);
