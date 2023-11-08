import { Title, Text } from "@mantine/core";
import * as classes from "./Welcome.css";

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          Real Estate
        </Text>
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Find your dream home with us. Browse through a wide range of properties,
        from cozy apartments to spacious villas.
      </Text>
    </>
  );
}
