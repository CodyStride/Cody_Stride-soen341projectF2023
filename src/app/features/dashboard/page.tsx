'use client';
import React, { useState } from 'react';
import { Flex, Title, Button, Box, Collapse, Group } from '@mantine/core';
import { RequestCard, RequestCardProps, VisitAppointmentCard, VisitAppointmentProps } from '@/components/dashboard';

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

const VisitAppointmentPropsArray: VisitAppointmentProps[] = [
  {
    visitor_name: "Mickel",
    visit_date: "Today",
    visit_address: "69 seseme streeet",
    property_id: 123456,
  },
  {
    visitor_name: "Mickel",
    visit_date: "Today",
    visit_address: "69 seseme streeet",
    property_id: 123456,
  },
  {
    visitor_name: "Mickel",
    visit_date: "Today",
    visit_address: "69 seseme streeet",
    property_id: 123456,
  }
];

export default function DashboardPage() {
  const [isPurchaseFormsOpen, setPurchaseFormsOpen] = useState(false);
  const [isAppointmentsOpen, setAppointmentsOpen] = useState(false);

  const togglePurchaseForms = () => setPurchaseFormsOpen((o) => !o);
  const toggleAppointments = () => setAppointmentsOpen((o) => !o);

  return (
    <Box style={{ maxWidth: '1200px', margin: 'auto', textAlign: 'center' }}>
      <Group style={{ justifyContent: 'center', marginBottom: '20px' }}>
        <Button onClick={togglePurchaseForms}>See Promise of Purchase Forms</Button>
      </Group>

      <Collapse in={isPurchaseFormsOpen}>
        <Title order={1} style={{ marginBottom: '20px' }}>
          Promise to Purchase Form
        </Title>
        <Flex
          style={{
            minHeight: '50px',
            backgroundColor: 'rgba(0, 0, 0, .3)',
            gap: 'md',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {RequestCardPropsArray.map((props, index) => (
            <RequestCard key={index} {...props} />
          ))}
        </Flex>
      </Collapse>

      <Group style={{ justifyContent: 'center', marginBottom: '20px' }}>
        <Button onClick={toggleAppointments}>See Appointments</Button>
      </Group>

      <Collapse in={isAppointmentsOpen}>
        <Title order={2} style={{ marginBottom: '20px' }}>
          Visit Appointments
        </Title>
        <Flex
          style={{
            minHeight: '50px',
            backgroundColor: 'rgba(0, 0, 0, .1)',
            gap: 'md',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {VisitAppointmentPropsArray.map((props, index) => (
            <VisitAppointmentCard key={index} {...props} />
          ))}
        </Flex>
      </Collapse>
    </Box>
  );
}