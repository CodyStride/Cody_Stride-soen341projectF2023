"use client";

import { Container, Title, Text, Button } from "@mantine/core";
import classes from "./Background.module.css";

export function MainBackground() {
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}
              >
                fully featured
              </Text>{" "}
              React components library
            </Title>

            <Text className={classes.description} mt={30}>
              A site containing all the tools you need!
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
