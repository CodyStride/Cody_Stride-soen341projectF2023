"use client";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Alert, Group, LoadingOverlay } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { IconAlertCircle } from "@tabler/icons-react";

export interface DeletePropertyModal {
  propertyId: string;
  opened: boolean;
  closeModal: () => void;
}

export function DeletePropertyModal({
  propertyId,
  opened,
  closeModal,
}: DeletePropertyModal) {
  // Manage load screen
  const [visible, { open: load, close: ready }] = useDisclosure(false);

  // Refresh page
  const router = useRouter();

  // Submitting form
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    console.log("deleting", propertyId);
    load();

    try {
      const res = await fetch(`/api/broker?id=${propertyId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete topic");
      }

      ready();
      closeModal();
      router.refresh();

      notifications.show({
        title: "Property Sucessfully Deleted",
        message: "Hey there, your code is awesome! 🤥",
        color: "green",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal opened={opened} onClose={closeModal} withCloseButton={false}>
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />

        <Alert
          variant="light"
          color="blue"
          title="Delete Property"
          icon={<IconAlertCircle />}
        >
          <Group>
            <Button color="red" onClick={handleFormSubmit}>
              Delete
            </Button>
            <Button color="blue" onClick={closeModal}>
              Cancel
            </Button>
          </Group>
        </Alert>
      </Modal>
    </>
  );
}
