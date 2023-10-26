import { Title, Text, Anchor, Button } from "@mantine/core";
import * as classes from "./Welcome.css";

// export function Welcome() {
//   return (
//     <>
//       <Title className={classes.title} ta="center" mt={100}>
//         Welcome to{" "}
//         <Text
//           inherit
//           variant="gradient"
//           component="span"
//           gradient={{ from: "pink", to: "yellow" }}
//         >
//           Real Estate
//         </Text>
//       </Title>
//       <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
//         This starter Next.js project includes a minimal setup for server side
//         rendering, if you want to learn more on Mantine + Next.js integration
//         follow{" "}
//         <Anchor href="https://mantine.dev/guides/next/" size="lg">
//           this guide
//         </Anchor>
//         . To get started edit index.tsx file.
//       </Text>
//     </>
//   );
// }

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
