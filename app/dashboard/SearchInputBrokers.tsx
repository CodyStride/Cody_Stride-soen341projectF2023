'use client';

import React, { useCallback, useState } from 'react';
import { ActionIcon, Autocomplete, Button, Group, NumberInput, TextInput } from "@mantine/core";
import { AiOutlineSearch } from "react-icons/ai"
import { usePathname, useRouter } from "next/navigation"

const brokerOptions = ["Name", "Email", "Nbr_of_Listings", "Age"];

export function SearchInputBrokers() {
  // Define state variables for each input
  const [name, setName] = useState("Any");
  const [email, setEmail] = useState("Any");
  const [nbr_of_listings, setNumListings] = useState(1);
  const [age, setAge] = useState(30);

  const router = useRouter();
  const pathname = usePathname();

  const startSearch = useCallback(() => {
    const params = new URLSearchParams(window.location.search)
    
    if (name !== "Any") {
      params.set("Name", name);
    }
    if (email !== "Any") {
        params.set("Email", email);
    }

    params.set("Nbr_of_Listings", nbr_of_listings.toString());
    params.set("Age", age.toString());

    router.replace(`${pathname}?${params.toString()}`);
  }, [name, email, nbr_of_listings, age, router, pathname]);

  return (
    <Group>
      <Autocomplete
        label="Broker Name"
        placeholder="Name"
        value={name}
        onChange={(value) => setName(value)}
      />

      <Autocomplete
        label="Broker Email"
        placeholder="Email"
        value={email}
        onChange={(value) => setEmail(value)}
      />

      <NumberInput
        hideControls
        label="Number_of_Listings"
        placeholder="Number of Listings"
        value={nbr_of_listings}
        allowNegative={false}
        onChange={(value) => setNumListings(value as number)}
      />
      <NumberInput
        label="Age"
        placeholder="Count"
        value={age}
        allowNegative={false}
        onChange={(value) => setAge(value as number)}
      />
      <Button onClick={startSearch}>
        <AiOutlineSearch />
      </Button>
    </Group>
  );
}
