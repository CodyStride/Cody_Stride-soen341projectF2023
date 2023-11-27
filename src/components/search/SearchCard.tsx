"use client";

import {
  Badge,
  Button,
  Card,
  Divider,
  Group,
  Image,
  Space,
  Text,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import { RequestModal } from "./RequestModal";
import { IPropertyData, UserAuthModel } from "@/types/property";
import { FavoriteButton } from "./FavoriteButton";
import { IconBath, IconBed } from "@tabler/icons-react";

import classes from "./SeachCard.module.css";
import { SubmitOfferModal } from "./OfferModal";

export interface SearchCardProps {
  data: IPropertyData;
  user?: UserAuthModel;
}

const defaultPage =
  "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80";

export function SearchCard({ data, user }: SearchCardProps) {
  console.log(user)
  const {
    id,
    owner,
    price,
    image,
    bedrooms,
    bathrooms,
    location,
  } = data;

  const formattedPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  });

  const requestVisit = () => {
    modals.open({
      title: "Request Visit Form",
      children: <RequestModal propertyId={id} owner={owner} />,
    });
  };

  const submitOffer = () => {
    if (user) {
      modals.open({
        size: "55rem",
        children: <SubmitOfferModal user={user} data={data} />,
        withCloseButton: false,
        radius: "lg",
      })
    }
  }

  return (
    <Card
      data-cy="search-card"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="search-card"
    >
      <Card.Section>
        <Image src={image ? image : defaultPage} height={160} alt="House" />
        <Badge className={classes.rating} color="pink">
          On Sale
        </Badge>
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text size="lg" fw={700}>
          {formattedPrice}
        </Text>
        {user && (
          <FavoriteButton propertyId={id} isFavorite={data.isFavorite} />
        )}
      </Group>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{location || "??"}</Text>
      </Group>

      <Space h="xs" />

      <Divider />

      <Space h="xs" />

      <Group>
        <div style={{ display: "flex" }}>
          <IconBed />
          <Space w="xs" />
          <Text size="sm" c="dimmed">
            {bedrooms} bedroom{bedrooms > 1 && "s"}
          </Text>
        </div>

        <Space w="xs" />

        <div style={{ display: "flex" }}>
          <IconBath />
          <Space w="xs" />
          <Text size="sm" c="dimmed">
            {bathrooms} bathroom{bathrooms > 1 && "s"}
          </Text>
        </div>
      </Group>

      <Group gap={8} mr={0}>
        <Button
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          onClick={(user && requestVisit) || undefined}
          component={(!user && "a") || "button"}
          href={(!user && "/auth/login") || ""}
        >
          Request Visit
        </Button>
        <Button
          variant="light"
          fullWidth
          mt="md"
          radius="md"
          onClick={(user && submitOffer) || undefined}
          component={(!user && "a") || "button"}
          href={(!user && "/auth/login") || ""}
        >
          Send Offer
        </Button>
      </Group>
    </Card>
  );
}
