"use client";

import { ActionIcon, LoadingOverlay } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FavoriteButtonProps {
  propertyId: string;
  isFavorite?: boolean;
}

export function FavoriteButton({
  propertyId,
  isFavorite,
}: FavoriteButtonProps) {
  const [fav, setFavorite] = useState(isFavorite);
  const [isLoading, { close: ready, open: load }] = useDisclosure();

  const router = useRouter();

  const handleFavorite = async () => {
    load();
    try {
      const formData = { propertyId };
      const response = await fetch("/api/user/favorite", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (e: any) {
      notifications.show({
        color: "red",
        title: "Favorite Error",
        message: "Unable to favorite property.",
      });
    }
    ready();
    setFavorite(!fav);

    router.refresh();
  };

  return (
    <>
      <ActionIcon onClick={handleFavorite} loading={isLoading} variant="subtle">
        <LoadingOverlay visible={isLoading} />
        {fav ? <IconHeartFilled /> : <IconHeart />}
      </ActionIcon>
    </>
  );
}
