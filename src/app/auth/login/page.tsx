'use client';

import { useRouter } from 'next/navigation';
import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor,
} from '@mantine/core';
import classes from '../AuthenticationImage.module.css';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

interface IFormLogin {
  email: string;
  password: string;
}

function LoginPage() {
  const route = useRouter();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 8 ? 'Password must have at least 8 characters' : null)
    },
  });

  const onSubmit = async ({ email, password }: IFormLogin) => {
    try {
      const form = { email, password };
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!response.ok) {
        throw 'Failed to authenticate user';
      };
      const data = await response.json();
      if (data?.token) {
        route.push('/features');
      } else {
        throw 'Failed to authenticate user';
      }
    } catch (err) {
      notifications.show({
        color: 'red',
        title: 'Authentication Error',
        message: 'Unable to authenticate user.'
      })
    }
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to REWA!
        </Title>

        <form onSubmit={form.onSubmit(onSubmit)}>
          <TextInput label="Email address" placeholder="hello@gmail.com" size="md" {...form.getInputProps('email')} />
          <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" {...form.getInputProps('password')} />
          <Button fullWidth mt="xl" size="md" type="submit">
            Login
          </Button>
        </form>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor<'a'> href="/auth/signup" fw={700}>
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  )
}

export default LoginPage