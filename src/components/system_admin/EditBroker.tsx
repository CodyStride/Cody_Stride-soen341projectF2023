'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, LoadingOverlay } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IBrokerData } from '@/types/property';
import { useRouter } from 'next/navigation';

export interface EditBrokerModalProps {
  opened: boolean;
  closeModal: () => void;
  data: IBrokerData;
  setBroker: Dispatch<SetStateAction<IBrokerData | undefined>>;
}

export function EditBroker({ data, opened, closeModal, setBroker }: EditBrokerModalProps) {
  // Manage load screen
  const [visible, { open: load, close: ready }] = useDisclosure(false);

  // Handle form input changes
  const handleInputChange = (key: any, value: any) => {
    setBroker({ ...data, [key]: value });
  };

  // Refresh page
  const router = useRouter();

  // Submitting form
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    console.log('editing')
    load()

    try {
      console.log(data)
      const res = await fetch(`/api/admin`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      ready()
      closeModal()
      router.refresh();

      notifications.show({
        title: 'Broker Sucessfully Edited',
        message: 'Hey there, your code is awesome! 🤥',
        color: 'green',
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal opened={opened} onClose={closeModal} title="Edit Broker Info">
        <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        {/* Form content */}
        <TextInput
          label="License"
          value={data.license}
          onChange={(event) => handleInputChange('license', event.currentTarget.value)}
        />
        <TextInput
          label="Agency"
          value={data.agency}
          onChange={(event) => handleInputChange('agency', event.currentTarget.value)}
        />
        <Button onClick={handleFormSubmit}>Submit</Button>
      </Modal>
    </>
  );
}