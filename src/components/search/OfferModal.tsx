"use client";

import {
  IPropertyDataExp,
  IPropertyOfferPayload,
  UserAuthModel,
} from "@/types/property";
import {
  Button,
  LoadingOverlay,
  NumberInput,
  Paper,
  Text,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import classes from "./OfferModal.module.css";
import { ContactIconsList } from "@/components/AppIcons";
import { IconAt, IconMapPin } from "@tabler/icons-react";

export interface SubmitOfferProps {
  data: IPropertyDataExp;
  user: UserAuthModel;
}

interface IFormOffer {
  amount: number;
  message: string;
}

export function SubmitOfferModal({ data }: SubmitOfferProps) {
  // Handles loading state
  const [visible, { open: load, close: ready }] = useDisclosure(false);
  const { price, id, location, expand } = data;
  const { owner } = expand;

  console.log(owner);
  const contactInfo = [
    { title: "Email", description: owner.email, icon: IconAt },
    { title: "Address", description: location, icon: IconMapPin },
  ];

  const form = useForm({
    initialValues: {
      message: "",
      amount: price,
    } as IFormOffer,

    validate: {
      amount: (amount) =>
        amount > price * 0.75
          ? null
          : "Offer should at least be 75% of orignal price",
    },
  });

  const onSubmit = async ({ amount, message }: IFormOffer) => {
    console.log("Send offer");
    load();
    try {
      const formData: IPropertyOfferPayload = {
        amount,
        message,
        property: id,
        offeree: owner.id,
      };
      const response = await fetch("/api/offer", {
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
        title: "Offer Sucessfully Sent",
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
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
        <div className={classes.contacts}>
          <Text fz="lg" fw={700} className={classes.title}>
            Contact Information
          </Text>
          <ContactIconsList data={contactInfo} />
        </div>
        <form className={classes.form} onSubmit={form.onSubmit(onSubmit)}>
          <Text fz="lg" fw={700} className={classes.title}>
            Offer Form
          </Text>
          <div className={classes.fields}>
            <LoadingOverlay
              visible={visible}
              zIndex={1000}
              overlayProps={{ radius: "sm", blur: 2 }}
            />
            <NumberInput
              hideControls
              thousandSeparator=","
              label="Price"
              prefix="$ "
              allowNegative={false}
              {...form.getInputProps("amount")}
            />
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
        </form>
      </div>
    </Paper>
  );
}
