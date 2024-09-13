import { object, string } from 'yup';

export const LoginSchema = object().shape({
  email: string().email('Invalid email').required('Email is required'),
  password: string().min(8, 'Too short!').required('Password is required'),
});
