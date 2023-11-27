'use client';

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Alert, Group } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useRouter } from 'next/navigation';
import { IconAlertHexagon } from '@tabler/icons-react';

export interface DeleteBroker {
  brokerId: string;
  opened: boolean;
  closeModal: () => void;
}

export function DeleteBroker({ brokerId, opened, closeModal }: DeleteBroker) {
  // Manage load screen
  const [, { open: load, close: ready }] = useDisclosure(false);

  // Refresh page
  const router = useRouter();

  // Submitting form
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    console.log('deleting', brokerId)
    load()

    try {
      const res = await fetch(`/api/admin?id=${brokerId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete topic");
      }

      ready()
      closeModal()
      router.refresh();

      notifications.show({
        title: 'Broker Sucessfully Deleted',
        message: 'Hey there, your code is awesome! 🤥',
        color: 'green',
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal opened={opened} onClose={closeModal} withCloseButton={false}>
        <Alert variant="light" color="blue" title="Delete Broker" icon={<IconAlertHexagon />}>
          <Group>
            <Button color="red" onClick={handleFormSubmit}>Delete</Button>
            <Button color="blue" onClick={closeModal}>Cancel</Button>
          </Group>
        </Alert>
      </Modal>
    </>
  );
}