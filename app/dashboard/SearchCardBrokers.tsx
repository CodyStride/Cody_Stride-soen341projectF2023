'use client';

import { Badge, Button, Card, Divider, Flex, Group, Image, Space, Text } from "@mantine/core";
import { PiGarageFill, PiHourglassSimpleLowBold } from "react-icons/pi"

export interface SearchCardProps {
  id: number
  Name: string
  Nbr_of_Listings: number
  Email?: string
  Age?: number
  Picture?: string
}

const defaultPage = "https://media.istockphoto.com/id/1369746033/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=2048x2048&w=is&k=20&c=Zv_d4Mry2Sice0-J22nHx-06dIJeVZPU65-GcfyJBOE=0"

export function SearchCardBrokers({ Name, Email, Picture, Nbr_of_Listings, Age }: SearchCardProps) {
  
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={Picture ? Picture : defaultPage}
          height={140}
          alt="House"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{Name}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {Email}
      </Text>

      <Divider />

      <div style={{ display: 'flex' }}>
        <Text size="sm" c="dimmed">
          <PiGarageFill />
          {Nbr_of_Listings}
        </Text>

        <Space w="md" />

        <Text size="sm" c="dimmed">
          <PiHourglassSimpleLowBold />
          {Age}
        </Text>
      </div>

      <Group>
        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Request Meeting
        </Button>
        <Button variant="light" fullWidth mt="md" radius="md">
          Chat
        </Button>
      </Group>
    </Card>
  )
} 