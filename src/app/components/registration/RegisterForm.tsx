import { Box, Button, Paper, Stack, TextField } from '@mui/material';
import { Field, FieldProps, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../auth/AuthContext';
import { getErrors } from '../../utils/formik';
import { RegistrationSchema } from './validation-schema';

interface RegisterFormState {
  email: string;
  password: string;
  repeatPassword: string;
}

const initialValues: RegisterFormState = {
  email: '',
  password: '',
  repeatPassword: '',
};

export const RegisterForm = () => {
  const {register} = useAuthContext()

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
          validationSchema={RegistrationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log({ values });
            register(values.email, values.password)
              .finally(() => setSubmitting(false));
          }}
        >
          {({isValid, isSubmitting, dirty}) => (
            <Form>
              <Stack spacing={3}>
                <h1>Registration</h1>
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
                <Field name="repeatPassword">
                  {({ field, form }: FieldProps<string>) => (
                    <TextField
                      {...field}
                      label={'Repeat Password'}
                      type={'password'}
                      error={!!getErrors(field.name, form)}
                      helperText={getErrors(field.name, form)}
                    />
                  )}
                </Field>
                <Button variant={'contained'} type={'submit'} disabled={isSubmitting || !isValid || !dirty}>
                  Register
                </Button>
                <Stack direction="row-reverse">
                  <Link to={'/login'}>Login</Link>
                </Stack>
              </Stack>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};
