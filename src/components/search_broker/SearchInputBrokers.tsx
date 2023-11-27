'use client';

import React, { useCallback, useState } from 'react';
import { ActionIcon, Autocomplete, Button, Group, NumberInput, TextInput } from "@mantine/core";
import { AiOutlineSearch } from "react-icons/ai"
import { usePathname, useRouter } from "next/navigation"

const brokerOptions = ["Name", "License", "Agency"];

export function SearchInputBrokers() {
  // Define state variables for each input
  const [name, setName] = useState("Any");
  const [license, setLicense] = useState("Any");
  const [agency, setAgency] = useState("Any");

  const router = useRouter();
  const pathname = usePathname();

  const startSearch = useCallback(() => {
    const params = new URLSearchParams(window.location.search)
    
    if (name !== "Any") {
      params.set("name", name);
    }
    if (license !== "Any") {
        params.set("license", license);
    }
    if (agency !== "Any") {
      params.set("agency", agency);
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, [name, license, agency, router, pathname]);

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
      
      <Button onClick={startSearch}>
        <AiOutlineSearch />
      </Button>
    </Group>
  );
}
