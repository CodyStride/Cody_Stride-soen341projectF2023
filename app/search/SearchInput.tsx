'use client';

import React, { useCallback, useState } from 'react';
import { ActionIcon, Autocomplete, Button, Group, NumberInput, TextInput } from "@mantine/core";
import { AiOutlineSearch } from "react-icons/ai"
import { usePathname, useRouter } from "next/navigation"

const propertyOptions = ["Any", "House", "Apartment", "Condo"];

export function SearchInput() {
  // Define state variables for each input
  const [propertyType, setPropertyType] = useState("Any");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(250_000);
  const [numBedrooms, setNumBedrooms] = useState(1);
  const [numBathrooms, setNumBathrooms] = useState(1);

  const router = useRouter();
  const pathname = usePathname();

  const startSearch = useCallback(() => {
    const params = new URLSearchParams(window.location.search)
    
    if (propertyType !== "Any") {
      params.set("type", propertyType);
    }

    params.set("min_price", minPrice.toString());
    params.set("max_price", maxPrice.toString());
    params.set("bedrooms", numBedrooms.toString());
    params.set("bathrooms", numBathrooms.toString());

    router.replace(`${pathname}?${params.toString()}`);
  }, [propertyType, minPrice, maxPrice, numBedrooms, numBathrooms, router, pathname]);

  return (
    <Group>
      <Autocomplete
        label="Property Type"
        data={propertyOptions}
        placeholder="Type"
        value={propertyType}
        onChange={(value) => setPropertyType(value)}
      />
      <NumberInput
        hideControls
        label="Minimum Listing Price"
        placeholder="Price"
        thousandSeparator=","
        prefix="$ "
        value={minPrice}
        allowNegative={false}
        onChange={(value) => setMinPrice(value as number)}
      />
      <NumberInput
        hideControls
        label="Maximum Listing Price"
        placeholder="Price"
        thousandSeparator=","
        prefix="$ "
        value={maxPrice}
        allowNegative={false}
        onChange={(value) => setMaxPrice(value as number)}
      />
      <NumberInput
        label="Number of Bedrooms"
        placeholder="Count"
        value={numBedrooms}
        allowNegative={false}
        onChange={(value) => setNumBedrooms(value as number)}
      />
      <NumberInput
        label="Number of Bathrooms"
        placeholder="Count"
        value={numBathrooms}
        allowNegative={false}
        onChange={(value) => setNumBathrooms(value as number)}
      />
      <Button onClick={startSearch}>
        <AiOutlineSearch />
      </Button>
    </Group>
  );
}
