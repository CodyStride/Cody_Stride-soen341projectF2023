'use client';

import { Button, LoadingOverlay, Textarea } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';

export interface RequestModalProps {
  owner: string;
  propertyId: string;
}

interface IFormLogin {
  date: Date | null;
  message: string;
  owner: string;
  propertyId: string;
}

export function RequestModal({ owner, propertyId }: RequestModalProps) {
  // Handles loading state
  const [visible, { open: load, close: ready }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      owner,
      propertyId,
      message: '',
      date: null,
    } as IFormLogin,

    validate: {
      date: (value) => value ? null : 'Select a valid date',
    }
  });

  const onSubmit = async ({ date, message, owner, propertyId }: IFormLogin) => {
    console.log('Send request visit')
    load()
    try {
      if (!date)
        throw 'Invalid date'
      const formData = { date: date.toISOString(), message, owner, propertyId };
      const response = await fetch('/api/visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw 'Failed to authenticate user';
      };
      const data = await response.json();
      ready()
      notifications.show({
        title: 'Request Visit Sucessfully Sent',
        message: 'The owner will be informed shortly',
        color: 'green',
      })
      modals.closeAll();
      if (!data?.token) {
      } else {
        throw 'Failed to authenticate user';
      }
    } catch (err) {
      console.log(err);
      notifications.show({
        color: 'red',
        title: 'Authentication Error',
        message: 'Unable to authenticate user.'
      })
    }
  };

  return (<form onSubmit={form.onSubmit(onSubmit)}>
    <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
    <DatePicker {...form.getInputProps('date')} />
    <Textarea
      placeholder="optional"
      label="Message"
      autosize
      minRows={2}
      {...form.getInputProps('message')}
    />
    <Button fullWidth mt="xl" size="md" type="submit">
      Submit
    </Button>
  </form>)
}