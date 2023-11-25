"use client";

import React, { useCallback, useState } from "react";
import { Autocomplete, Button, Group, NumberInput } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import { ISearchPropertyParams } from "@/types/property";
import { IconSearch } from "@tabler/icons-react";

const propertyOptions = ["Any", "House", "Apartment", "Condo"];

// Example usage in a React component
export function SearchInput({
  searchParams,
}: {
  searchParams: ISearchPropertyParams;
}) {
  // Define state variables for each input
  const [filter, setPropertyFilter] = useState(searchParams);
  const { bathrooms, bedrooms, max_price, min_price, type } = filter;

  const router = useRouter();
  const pathname = usePathname();

  const handleInputChange = <K extends keyof ISearchPropertyParams>(
    key: K,
    value: ISearchPropertyParams[K]
  ) => {
    setPropertyFilter({ ...filter, [key]: value });
  };

  const startSearch = useCallback(() => {
    const params = new URLSearchParams();

    if (type) params.set("type", type);
    if (min_price) params.set("min_price", min_price.toString());
    if (max_price) params.set("max_price", max_price.toString());
    if (bedrooms) params.set("bedrooms", bedrooms.toString());
    if (bathrooms) params.set("bathrooms", bathrooms.toString());

    router.push(`?${params.toString()}`);
  }, [bathrooms, bedrooms, max_price, min_price, type, router, pathname]);

  const resetSearch = () => {
    setPropertyFilter({
      bathrooms: "",
      bedrooms: "",
      max_price: "",
      min_price: "",
      type: "",
    });

    router.replace(`${pathname}`);
  };

  return (
    <Group>
      <Autocomplete
        label="Property Type"
        data={propertyOptions}
        placeholder="Type"
        value={type}
        onChange={(value) => handleInputChange("type", value)}
        data-cy="property-type"
      />
      <NumberInput
        hideControls
        label="Minimum Listing Price"
        placeholder="Price"
        thousandSeparator=","
        prefix="$ "
        value={min_price}
        allowNegative={false}
        onChange={(value) => handleInputChange("min_price", value)}
        data-cy="min-price"
      />
      <NumberInput
        hideControls
        label="Maximum Listing Price"
        placeholder="Price"
        thousandSeparator=","
        prefix="$ "
        value={max_price}
        allowNegative={false}
        onChange={(value) => handleInputChange("max_price", value)}
        data-cy="max-price"
      />
      <NumberInput
        label="Number of Bedrooms"
        placeholder="Count"
        value={bedrooms}
        allowNegative={false}
        onChange={(value) => handleInputChange("bedrooms", value)}
        data-cy="num-bedrooms"
      />
      <NumberInput
        label="Number of Bathrooms"
        placeholder="Count"
        value={bathrooms}
        allowNegative={false}
        onChange={(value) => handleInputChange("bathrooms", value)}
        data-cy="num-bathrooms"
      />
      <Button onClick={startSearch} data-cy="search-button">
        <IconSearch />
      </Button>
      <Button onClick={resetSearch} data-cy="reset-button">
        Reset
      </Button>
    </Group>
  );
}
