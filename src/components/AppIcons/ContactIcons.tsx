import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun } from '@tabler/icons-react';
import classes from './ContactIcons.module.css';

export interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

export function ContactIconsList({ data }: { data: ContactIconProps[] }) {
  const items = data.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}