'use client';

import { Badge, Button, Card, Divider, Group, Image, Space, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { PiBed, PiToilet, PiGlobe } from "react-icons/pi"
import { RequestModal } from "./RequestModal";

export interface SearchCardProps {
  owner: string
  id: string
  type: string
  price: number
  description?: string
  location?: string
  bedrooms: number
  bathrooms: number
  image?: string
}

const defaultPage = "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"

export function SearchCard({ id, owner, price, description, image, bedrooms, bathrooms, location }: SearchCardProps) {
  const formattedPrice = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'CAD',
    maximumFractionDigits: 0,
  });

  const requestVisit = () => {
    modals.open({
      title: 'Request Visit Form',
      children: (
        <RequestModal propertyId={id} owner={owner} />
      ),
    })
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={image ? image : defaultPage}
          height={160}
          alt="House"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{formattedPrice}</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {description}
      </Text>

      <Divider />

      <div style={{ display: 'flex' }}>
        <Text size="sm" c="dimmed">
          <PiBed />
          {bedrooms}
        </Text>

        <Space w="md" />

        <Text size="sm" c="dimmed">
          <PiToilet />
          {bathrooms}
        </Text>
      </div>

      <Text size="sm" c="dimmed">
        <PiGlobe />
        {location || '??'}
      </Text>

      <Group>
        <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={requestVisit}>
          Request Visit
        </Button>
        <Button variant="light" fullWidth mt="md" radius="md" >
          Send Offer
        </Button>
      </Group>
    </Card>
  )
}
