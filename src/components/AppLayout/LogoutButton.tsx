'use client';

import { Button } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();
  const onLogout = async () => {
    try {
      deleteCookie('pb_auth');
      localStorage.clear();
      router.push('/auth/login');
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <Button
      variant="outline"
      size="lg"
      component="a"
      onClick={onLogout}
    >
      <IconLogout />
    </Button>
  )
}