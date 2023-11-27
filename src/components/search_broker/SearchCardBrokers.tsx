'use client';

import { Button, Card, Divider, Group, Image, Space, Text } from "@mantine/core";
import { PiGarageFill, PiHourglassSimpleLowBold } from "react-icons/pi"

export interface SearchCardProps {
  id: number
  name: string
  agency: string
  license?: string
  user?: string
}

const defaultPage = "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"

export function SearchCardBrokers({ name, license, agency, user }: SearchCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={defaultPage}
          height={160}
        />
      </Card.Section>

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