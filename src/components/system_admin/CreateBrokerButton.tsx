'use client';

import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, NumberInput, LoadingOverlay } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useRouter } from 'next/navigation';

export function CreateBrokerModal() {
  const [opened, { open: openModal, close: closeModal }] = useDisclosure(false);
  const [visible, { open: load, close: ready }] = useDisclosure(false);

  // State variables for form fields
  const [brokerData, setBrokerData] = useState({
    id: 0, // You can generate a unique ID
    name: '',
    license: '',
    agency: '',
    user: '',
  });

  // Handle form input changes
  const handleInputChange = (key: any, value: any) => {
    setBrokerData({ ...brokerData, [key]: value });
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
        body: JSON.stringify(brokerData),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      ready() // Stop loading screen
      closeModal()
      router.refresh();

      notifications.show({
        title: 'Broker Sucessfully Added',
        message: 'Hey there, your code is awesome! 🤥',
        color: 'green',
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal opened={opened} onClose={closeModal} title="Add Broker">
        <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        {/* Form content */}
        <TextInput
          label="Broker Name"
          value={brokerData.name}
          onChange={(event) => handleInputChange('name', event.currentTarget.value)}
        />
        <TextInput
          label="License"
          value={brokerData.license}
          onChange={(event) => handleInputChange('license', event.currentTarget.value)}
        />
        <TextInput
          label="Agency"
          value={brokerData.agency}
          onChange={(event) => handleInputChange('agency', event.currentTarget.value)}
        />
        <TextInput
          label="User"
          value={brokerData.user}
          onChange={(event) => handleInputChange('user', event.currentTarget.value)}
        />
        <Button onClick={handleFormSubmit}>Submit</Button>
      </Modal>
    </>
  );
}