import { Box, Button, Paper, Stack, TextField } from '@mui/material';
import { Field, FieldProps, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { login } from '../../auth/auth-utils';
import { getErrors } from '../../utils/formik';
import { LoginSchema } from './validation-schema';

interface LoginFormState {
  email: string;
  password: string;
}

const initialValues: LoginFormState = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.primary.main,
      })}
    >
      <Paper
        sx={{
          width: '80%',
          maxWidth: '500px',
          margin: 'auto',
          padding: '2rem',
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log({ values });
            login(values.email, values.password).finally(() =>
              setSubmitting(false)
            );
          }}
        >
          {({ isValid, isSubmitting, dirty }) => (
            <Form>
              <Stack spacing={3}>
                <h1>Login</h1>
                <Field name="email">
                  {({ field, form }: FieldProps<string>) => (
                    <TextField
                      {...field}
                      label={'E-Mail'}
                      type={'email'}
                      error={!!getErrors(field.name, form)}
                      helperText={getErrors(field.name, form)}
                    />
                  )}
                </Field>
                <Field name="password">
                  {({ field, form }: FieldProps<string>) => (
                    <TextField
                      {...field}
                      label={'Password'}
                      type={'password'}
                      error={!!getErrors(field.name, form)}
                      helperText={getErrors(field.name, form)}
                    />
                  )}
                </Field>
                <Button
                  variant={'contained'}
                  type={'submit'}
                  disabled={isSubmitting || !isValid || !dirty}
                >
                  Login
                </Button>
                <Stack direction="row-reverse">
                  <Link to={'/register'}>Register</Link>
                </Stack>
              </Stack>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};
