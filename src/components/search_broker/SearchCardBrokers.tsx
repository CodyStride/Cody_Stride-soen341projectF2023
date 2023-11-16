'use client';

import { Badge, Button, Card, Divider, Flex, Group, Image, Space, Text } from "@mantine/core";
import { PiGarageFill, PiHourglassSimpleLowBold } from "react-icons/pi"

export interface SearchCardProps {
  id: number
  name: string
  agency: string
  license?: string
  user?: string
}

const defaultPage = "https://media.istockphoto.com/id/1369746033/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=2048x2048&w=is&k=20&c=Zv_d4Mry2Sice0-J22nHx-06dIJeVZPU65-GcfyJBOE=0"

export function SearchCardBrokers({ name, license, agency, user }: SearchCardProps) {
  
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
 

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{name}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {agency}
      </Text>

      <Divider />

      <div style={{ display: 'flex' }}>
        <Text size="sm" c="dimmed">
          <PiGarageFill />
          {user}
        </Text>

        <Space w="md" />

        <Text size="sm" c="dimmed">
          <PiHourglassSimpleLowBold />
          {license}
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