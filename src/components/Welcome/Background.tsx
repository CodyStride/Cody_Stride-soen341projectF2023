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
              Welcome to {" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}
              >
               Cody Stride's 
              </Text>{" "}
              Real Estate Website
            </Title>

            <Text className={classes.description} mt={30}>
            Find your dream home with us. Browse through a wide range of properties,
        from cozy apartments to spacious villas.
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
