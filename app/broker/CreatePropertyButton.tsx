'use client';

import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, NumberInput, LoadingOverlay } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useRouter } from 'next/navigation';

export function CreatePropertyModal() {
  const [opened, { open: openModal, close: closeModal }] = useDisclosure(false);
  const [visible, { open: load, close: ready }] = useDisclosure(false);

  // State variables for form fields
  const [propertyData, setPropertyData] = useState({
    id: 0, // You can generate a unique ID
    type: '',
    price: 0,
    description: '',
    location: '',
    bedrooms: 1,
    bathrooms: 1,
    image: '',
  });

  // Handle form input changes
  const handleInputChange = (key: any, value: any) => {
    setPropertyData({ ...propertyData, [key]: value });
  };

  // Refresh page
  const router = useRouter();

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    console.log('submitting')
    load() // Loading screen

    try {
      const res = await fetch(`http://localhost:3000/broker/api`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(propertyData),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      ready() // Stop loading screen
      closeModal()
      router.refresh();

      notifications.show({
        title: 'Property Sucessfully Added',
        message: 'Hey there, your code is awesome! 🤥',
        color: 'green',
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal opened={opened} onClose={closeModal} title="Add Property">
        <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        {/* Form content */}
        <TextInput
          label="Property Type"
          value={propertyData.type}
          onChange={(event) => handleInputChange('type', event.currentTarget.value)}
        />
        <NumberInput
          hideControls
          thousandSeparator=","
          label="Price"
          prefix="$ "
          allowNegative={false}
          value={propertyData.price}
          onChange={(value) => handleInputChange('price', value)}
        />
        <TextInput
          label="Description"
          value={propertyData.description}
          onChange={(event) => handleInputChange('description', event.currentTarget.value)}
        />
        <TextInput
          label="Location"
          value={propertyData.location}
          onChange={(event) => handleInputChange('location', event.currentTarget.value)}
        />
        <NumberInput
          label="Bedrooms"
          value={propertyData.bedrooms}
          allowNegative={false}
          onChange={(value) => handleInputChange('bedrooms', value)}
        />
        <NumberInput
          label="Bathrooms"
          value={propertyData.bathrooms}
          allowNegative={false}
          onChange={(value) => handleInputChange('bathrooms', value)}
        />
        <TextInput
          label="Image URL"
          value={propertyData.image}
          onChange={(event) => handleInputChange('image', event.currentTarget.value)}
        />
        <Button onClick={handleFormSubmit}>Submit</Button>
      </Modal>

      <Button onClick={openModal}>Add Property</Button>
    </>
  );
}
