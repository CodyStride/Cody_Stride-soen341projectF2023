"use client";

import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Button,
} from "@mantine/core";
import classes from "./AuthenticationTitle.module.css";
import { useRouter } from "next/navigation";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

interface IFormLogin {
  email: string;
  password: string;
}

export default function AuthenticationTitle() {
  const route = useRouter();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8 ? "Password must have at least 8 characters" : null,
    },
  });

  const onSubmit = async ({ email, password }: IFormLogin) => {
    try {
      const form = { email, password };
      const response = await fetch("/api/auth/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      console.log(response)
      if (!response.ok) {
        throw "Failed to authenticate user";
      }
      const data = await response.json();
      console.log(data)
      if (data?.isValid) {
        route.push("/admin");
        route.refresh();
      } else {
        throw "Failed to authenticate user";
      }
    } catch (err) {
      console.log(err);
      notifications.show({
        color: "red",
        title: "Authentication Error",
        message: "Unable to authenticate admin.",
      });
    }
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Admin Page
      </Title>

      <form onSubmit={form.onSubmit(onSubmit)}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            required
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            {...form.getInputProps("password")}
          />
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </Paper>
      </form>
    </Container>
  );
}
