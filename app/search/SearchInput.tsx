'use client';

import React, { useState } from 'react';
import { Autocomplete, Group, NumberInput, TextInput } from "@mantine/core";

const propertyOptions = ["House"];

export function SearchInput() {
  // Define state variables for each input
  const [propertyType, setPropertyType] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(250_000);
  const [numBedrooms, setNumBedrooms] = useState(1);
  const [numBathrooms, setNumBathrooms] = useState(1);

  return (
    <Group>
      <Autocomplete
        label="Property Type"
        data={propertyOptions}
        placeholder="Type"
        value={propertyType}
        onChange={setPropertyType}
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
        hideControls
        label="Number of Bedrooms"
        placeholder="Count"
        value={numBedrooms}
        allowNegative={false}
        onChange={(value) => setNumBedrooms(value as number)}
      />
      <NumberInput
        hideControls
        label="Number of Bathrooms"
        placeholder="Count"
        value={numBathrooms}
        allowNegative={false}
        onChange={(value) => setNumBathrooms(value as number)}
      />
    </Group>
  );
}
