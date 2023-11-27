'use client';

import React, { useCallback, useState } from 'react';
import { ActionIcon, Autocomplete, Button, Group, NumberInput, TextInput } from "@mantine/core";
import { AiOutlineSearch } from "react-icons/ai"
import { usePathname, useRouter } from "next/navigation"

const brokerOptions = ["Name", "License", "Agency", "User"];

export function SearchInputBrokers() {
  // Define state variables for each input
  const [name, setName] = useState("Any");
  const [license, setLicense] = useState("Any");
  const [agency, setAgency] = useState("Any");
  const [user, setUser] = useState("Any");

  const router = useRouter();
  const pathname = usePathname();

  const startSearch = useCallback(() => {
    const params = new URLSearchParams(window.location.search)
    
    if (name !== "Any") {
      params.set("Name", name);
    }
    if (license !== "Any") {
        params.set("License", license);
    }
    if (agency !== "Any") {
      params.set("Agency", agency);
    }
    if (user !== "Any") {
        params.set("User", user);
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, [name, license, agency, user, router, pathname]);

  return (
    <Group>
      <Autocomplete
        label="Broker Name"
        placeholder="Name"
        value={name}
        onChange={(value) => setName(value)}
      />

      <Autocomplete
        label="Broker License"
        placeholder="License"
        value={license}
        onChange={(value) => setLicense(value)}
      />

      <Autocomplete
        label="Broker Agency"
        placeholder="Agency"
        value={agency}
        onChange={(value) => setAgency(value)}
      />

      <Autocomplete
        label="User Broker"
        placeholder="User"
        value={user}
        onChange={(value) => setLicense(value)}
      />
      <Button onClick={startSearch}>
        <AiOutlineSearch />
      </Button>
    </Group>
  );
}
