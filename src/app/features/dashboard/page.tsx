import { RequestCard, RequestCardProps } from "./RequestCard"
import { Flex, Title } from '@mantine/core';

const RequestCardPropsArray: RequestCardProps[] = [
    {
      broker_name: "John Doe",
      license_number: 123456,
      agency_title: "Doe Estates",
      buyer_name: "Jane Smith",
      buyer_email: "jane.smith@example.com",
      buyer_address: "123 Maple Street",
      house_address: "456 Oak Avenue",
      house_price: 350000,
      house_sale_date: "2023-01-15",
      house_occupancy_date: "2023-02-01",
    },
    {
        broker_name: "John Doe",
        license_number: 123456,
        agency_title: "Doe Estates",
        buyer_name: "Jane Smith",
        buyer_email: "jane.smith@example.com",
        buyer_address: "123 Maple Street",
        house_address: "456 Oak Avenue",
        house_price: 350000,
        house_sale_date: "2023-01-15",
        house_occupancy_date: "2023-02-01",
      },
      {
        broker_name: "John Doe",
        license_number: 123456,
        agency_title: "Doe Estates",
        buyer_name: "Jane Smith",
        buyer_email: "jane.smith@example.com",
        buyer_address: "123 Maple Street",
        house_address: "456 Oak Avenue",
        house_price: 350000,
        house_sale_date: "2023-01-15",
        house_occupancy_date: "2023-02-01",
      },
];

export default function DashboardPage() {
    return (
      <>
        <Title order={1} style={{ marginBottom: 20, textAlign: 'center' }}>
          Promise to Purchase Form
        </Title>
        <Flex
          style={{ minHeight: 50, backgroundColor: 'rgba(0, 0, 0, .3)', gap: 'md', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row', flexWrap: 'wrap' }}
        >
          {RequestCardPropsArray.map((props, index) => (
            <RequestCard
              key={index}
              {...props}
            />
          ))}
        </Flex>
      </>
    );
  }