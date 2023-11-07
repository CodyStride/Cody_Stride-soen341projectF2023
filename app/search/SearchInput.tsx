'use client';

import React, { useCallback, useState } from 'react';
import { Autocomplete, Button, Group, NumberInput } from "@mantine/core";
import { AiOutlineSearch } from "react-icons/ai"
import { usePathname, useRouter } from "next/navigation"
import { ISearchParams } from './page';

const propertyOptions = ["Any", "House", "Apartment", "Condo"];

export function SearchInput({ searchParams }: { searchParams: ISearchParams }) {
  // Define state variables for each input
  const { bathrooms, bedrooms, max_price, min_price, type } = searchParams;
  const [propertyType, setPropertyType] = useState(type);
  const [minPrice, setMinPrice] = useState(min_price);
  const [maxPrice, setMaxPrice] = useState(max_price);
  const [numBedrooms, setNumBedrooms] = useState(bedrooms);
  const [numBathrooms, setNumBathrooms] = useState(bathrooms);

  const router = useRouter();
  const pathname = usePathname();

  const startSearch = useCallback(() => {
    const params = new URLSearchParams(window.location.search)

    if (propertyType) params.set("type", propertyType);
    if (minPrice) params.set("min_price", minPrice.toString());
    if (maxPrice) params.set("max_price", maxPrice.toString());
    if (numBedrooms) params.set("bedrooms", numBedrooms.toString());
    if (numBathrooms) params.set("bathrooms", numBathrooms.toString());

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
