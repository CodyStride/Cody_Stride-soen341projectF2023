'use client';

import { Card, Text } from '@mantine/core';

export interface RequestCardProps {
  broker_name: string;
  license_number: number;
  agency_title: string;
  buyer_name: string;
  buyer_email: string;
  buyer_address: string;
  house_address: string;
  house_price: number;
  house_sale_date: string;
  house_occupancy_date: string;
}

export interface VisitAppointmentProps {
  visitor_name: string;
  visit_date: string;
  visit_address: string;
  property_id: number;
}

export function RequestCard({
  broker_name,
  license_number,
  agency_title,
  buyer_name,
  buyer_email,
  buyer_address,
  house_address,
  house_price,
  house_sale_date,
  house_occupancy_date,
}: RequestCardProps) {
  const itemStyle = { marginBottom: '4px' }; // Adjust the margin as needed

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: 340, margin: 'auto' }}>
      <div style={itemStyle}><Text>Broker: {broker_name}</Text></div>
      <div style={itemStyle}><Text>License Number: {license_number}</Text></div>
      <div style={itemStyle}><Text>Agency: {agency_title}</Text></div>
      <div style={itemStyle}><Text>Buyer: {buyer_name}</Text></div>
      <div style={itemStyle}><Text>Email: {buyer_email}</Text></div>
      <div style={itemStyle}><Text>Address: {buyer_address}</Text></div>
      <div style={itemStyle}><Text>House Address: {house_address}</Text></div>
      <div style={itemStyle}><Text>House Price: ${house_price.toLocaleString()}</Text></div>
      <div style={itemStyle}><Text>Sale Date: {house_sale_date}</Text></div>
      <div style={itemStyle}><Text>Occupancy Date: {house_occupancy_date}</Text></div>
    </Card>
  );
}

export function VisitAppointmentCard({
  visitor_name,
  visit_date,
  visit_address,
  property_id,
}: VisitAppointmentProps) {
  const itemStyle = { marginBottom: '4px' };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: 340, margin: 'auto' }}>
      <div style={itemStyle}><Text>Visitor: {visitor_name}</Text></div>
      <div style={itemStyle}><Text>Date: {visit_date}</Text></div>
      <div style={itemStyle}><Text>Address: {visit_address}</Text></div>
      <div style={itemStyle}><Text>Property id: {property_id}</Text></div>
    </Card>
  );
}
