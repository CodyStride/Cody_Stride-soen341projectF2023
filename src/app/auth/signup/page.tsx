'use client';
import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor,
  Combobox,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react'
import classes from '../AuthenticationImage.module.css'
import { useRouter } from 'next/navigation';

interface IFormLogin {
  email: string;
  password: string;
}

function SignUpPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null)
    },
  });

  const onSubmit = async ({ email, password }: IFormLogin) => {
    console.log('Submitting');
    try {
      const form = { email, password };
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!response.ok) {
        setError('Failed to register user');
        return;
      };
      await response.json();

      router.push('/auth/login');
    } catch (err) {
      setError('Failed to register user');
    }
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome to REWA!
        </Title>

        <form onSubmit={form.onSubmit(onSubmit)}>
          <TextInput label="Email address" placeholder="hello@gmail.com" size="md" {...form.getInputProps('email')} />
          <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" {...form.getInputProps('password')} />
          <Button fullWidth mt="xl" size="md" type="submit">
            Register
          </Button>
          <Combobox />
        </form>

        <Text ta="center" mt="md">
          Already have an account?{' '}
          <Anchor<'a'> href="/auth/login" fw={700}>
            Login
          </Anchor>
        </Text>
      </Paper>
    </div>
  )
}

export default SignUpPage