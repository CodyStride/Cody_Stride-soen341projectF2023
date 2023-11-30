import { ThemeIcon, Text, Title, Container, SimpleGrid, rem } from '@mantine/core';
import { IconBrandSpeedtest, IconMoodSmile, IconAspectRatioFilled, IconMessage2, IconLock } from '@tabler/icons-react';
import classes from './featureGrid.module.css';

export const MOCKDATA = [
  {
    icon: IconBrandSpeedtest,
    title: 'Amazing performance',
    description:
      'One of the benefiits of picking our site to buy and sell your properties is because of its quick performance. The tools we used ensure a proper user experience ',
  },
  {
    icon: IconAspectRatioFilled,
    title: 'Responsive',
    description:
      ' Try using this site on a smaller window to see how it fluidly and properly changed the format of the elements to beautifully fit any aspcect ratio',
  },
  {
    icon: IconMoodSmile,
    title: 'Simple, yet efficient',
    description:
      'Our team strived to maintain an appealing design all the while keeping the user interface and functionality simple and quick. This provides a good balance between a well built, fully functional site and a great user experience',
  },
  {
    icon: IconLock,
    title: 'Secure by default',
    description:
      'Don’t worry about your personal information or interactions you make on the site being unsafe, this info stays between yourself and whoever you’re working with.',
  },
  {
    icon: IconMessage2,
    title: 'Easy communication',
    description:
      'You get to easily interact with other users on the site that you have business with. Brokers can and will fulfill the need of buyers and renters, and vice-versa',
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export default function FeaturesGrid() {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Here's what you need to know about our site</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          Let's take a deeper look into the aspects that make our platform so great. We are certain that you'll be impressed by this.
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}