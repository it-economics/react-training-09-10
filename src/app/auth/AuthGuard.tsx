import { FC, PropsWithChildren, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from './AuthContext';

export const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated()) {
  }

  return isAuthenticated() ? children : <Navigate to={'/login'} />;
};

export const withAuthGuard = (children: ReactNode) => (
  <AuthGuard>{children}</AuthGuard>
);
