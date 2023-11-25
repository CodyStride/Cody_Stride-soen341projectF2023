"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  TextInput,
  NumberInput,
  LoadingOverlay,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IPropertyData } from "@/types/property";
import { useRouter } from "next/navigation";

export interface EditPropertyModalProps {
  opened: boolean;
  closeModal: () => void;
  data: IPropertyData;
  setProperty: Dispatch<SetStateAction<IPropertyData | undefined>>;
}

export function EditPropertyModal({
  data,
  setProperty,
  opened,
  closeModal,
}: EditPropertyModalProps) {
  // Manage load screen
  const [visible, { open: load, close: ready }] = useDisclosure(false);

  // Handle form input changes
  const handleInputChange = (key: any, value: any) => {
    setProperty({ ...data, [key]: value });
  };

  // Refresh page
  const router = useRouter();

  // Submitting form
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    console.log("editing");
    load();

    try {
      const res = await fetch(`/api/broker`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      ready();
      closeModal();
      router.refresh();

      notifications.show({
        title: "Property Sucessfully Edited",
        message: "Hey there, your code is awesome! 🤥",
        color: "green",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal opened={opened} onClose={closeModal} title="Edit Property">
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        {/* Form content */}
        <TextInput
          label="Property Type"
          value={data.type}
          onChange={(event) =>
            handleInputChange("type", event.currentTarget.value)
          }
        />
        <NumberInput
          hideControls
          thousandSeparator=","
          label="Price"
          prefix="$ "
          allowNegative={false}
          value={data.price}
          onChange={(value) => handleInputChange("price", value)}
        />
        <TextInput
          label="Description"
          value={data.description}
          onChange={(event) =>
            handleInputChange("description", event.currentTarget.value)
          }
        />
        <TextInput
          label="Location"
          value={data.location}
          onChange={(event) =>
            handleInputChange("location", event.currentTarget.value)
          }
        />
        <NumberInput
          label="Bedrooms"
          value={data.bedrooms}
          allowNegative={false}
          onChange={(value) => handleInputChange("bedrooms", value)}
        />
        <NumberInput
          label="Bathrooms"
          value={data.bathrooms}
          allowNegative={false}
          onChange={(value) => handleInputChange("bathrooms", value)}
        />
        <TextInput
          label="Image URL"
          value={data.image}
          onChange={(event) =>
            handleInputChange("image", event.currentTarget.value)
          }
        />
        <Button onClick={handleFormSubmit}>Submit</Button>
      </Modal>
    </>
  );
}
