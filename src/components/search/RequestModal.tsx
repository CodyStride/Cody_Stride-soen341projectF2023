"use client";

import { UserAuthModel } from "@/types/property";
import { Button, Flex, LoadingOverlay, Textarea } from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import classes from './RequestModal.module.css'

export interface RequestModalProps {
  owner: string;
  propertyId: string;
}

interface IFormLogin {
  date: Date | null;
  message: string;
  owner: string;
  propertyId: string;
  time: string;
}

export function RequestModal({ owner, propertyId }: RequestModalProps) {
  // Handles loading state
  const [visible, { open: load, close: ready }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      owner: owner,
      propertyId,
      message: "",
      date: null,
      time: "",
    } as IFormLogin,

    validate: {
      date: (value) => (value ? null : "Select a valid date"),
      time: (value) => (value.length > 0 ? null : "Select a valid time"),
    },
  });

  const onSubmit = async ({ date, message, owner, propertyId }: IFormLogin) => {
    console.log("Send request visit");
    load();
    try {
      if (!date) throw "Invalid date";

      const formData = { date: date.toISOString(), message, owner, propertyId };
      const response = await fetch("/api/visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw "Failed to authenticate user";
      }

      const data = await response.json();

      ready();
      if (!data?.token) {
      } else {
        throw "Failed to authenticate user";
      }

      notifications.show({
        title: "Request Visit Sucessfully Sent",
        message: "The owner will be informed shortly",
        color: "green",
      });
    } catch (err) {
      console.log(err);
      notifications.show({
        color: "red",
        title: "Authentication Error",
        message: "Unable to authenticate user.",
      });
    }

    modals.closeAll();
  };

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Flex
        data-cy="request-visit-modal"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        <DatePicker {...form.getInputProps("date")} />
        <div className={classes.fields}>
          <TimeInput label="Select time" {...form.getInputProps("time")} />
          <Textarea
            placeholder="optional"
            label="Message"
            autosize
            minRows={2}
            {...form.getInputProps("message")}
          />
          <Button fullWidth mt="xl" size="md" type="submit">
            Submit
          </Button>
        </div>
      </Flex>
    </form>
  );
}
