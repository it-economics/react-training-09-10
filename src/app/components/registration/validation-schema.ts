import { object, ref, string } from 'yup';

export const RegistrationSchema = object().shape({
  email: string().email('Invalid email').required('Email is required'),
  password: string().min(8, 'Too short!').required('Password is required'),
  repeatPassword: string()
    .oneOf(['', ref('password')], 'Passwords must match')
    .required('Password is required'),
});
