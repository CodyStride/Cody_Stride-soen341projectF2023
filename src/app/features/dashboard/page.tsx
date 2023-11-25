"use client";

import React, { useState } from "react";
import { NumberInput } from "@mantine/core";
import { Flex, Title, Button, Box, Collapse, Group } from "@mantine/core";
import {
  RequestCard,
  RequestCardProps,
  VisitAppointmentCard,
  VisitAppointmentProps,
} from "@/components/dashboard";

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
  },
];

export default function DashboardPage() {
  const [isPurchaseFormsOpen, setPurchaseFormsOpen] = useState(false);
  const [isAppointmentsOpen, setAppointmentsOpen] = useState(false);
  const [isMortgageCalculatorOpen, setMortgageCalculatorOpen] = useState(false);

  const togglePurchaseForms = () => setPurchaseFormsOpen((o) => !o);
  const toggleAppointments = () => setAppointmentsOpen((o) => !o);
  const toggleMortgageCalculator = () => setMortgageCalculatorOpen((o) => !o);

  const [monthlyPayment, setMonthlyPayment] = useState("");

  const [housePrice, setHousePrice] = useState<number | undefined>(400000);
  const [downPayment, setDownPayment] = useState<number | undefined>();
  const [annualInterestRate, setAnnualInterestRate] = useState<
    number | undefined
  >();
  const [numberOfPayments, setNumberOfPayments] = useState<
    number | undefined
  >();

  const calculateMortgage = (P: number, r: number, n: number): number => {
    r = r / 1200; // Convert annual rate to monthly and percentage to decimal
    n = n * 12; // Convert years to number of monthly payments
    return (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
  };

  const handleCalculate = () => {
    if (
      housePrice !== undefined &&
      annualInterestRate !== undefined &&
      numberOfPayments !== undefined
    ) {
      // Convert downPayment to a number, defaulting to 0 if undefined
      const downPaymentNumber = downPayment || 0;

      const P = housePrice - downPaymentNumber;
      const r = annualInterestRate;
      const n = numberOfPayments;

      if (P > 0 && r >= 0 && r <= 10 && n >= 1) {
        const M = calculateMortgage(P, r, n);
        setMonthlyPayment(M.toFixed(2));
      } else {
        console.error("Invalid input values.");
      }
    } else {
      console.error("All fields are required.");
    }
  };

  return (
    <Box style={{ maxWidth: "1200px", margin: "auto", textAlign: "center" }}>
      <Group style={{ justifyContent: "center", marginBottom: "20px" }}>
        <Button onClick={togglePurchaseForms}>
          See Promise of Purchase Forms
        </Button>
      </Group>

      <Collapse in={isPurchaseFormsOpen}>
        <Title order={1} style={{ marginBottom: "20px" }}>
          Promise to Purchase Form
        </Title>
        <Flex
          style={{
            minHeight: "50px",
            backgroundColor: "rgba(0, 0, 0, .3)",
            gap: "md",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {RequestCardPropsArray.map((props, index) => (
            <RequestCard key={index} {...props} />
          ))}
        </Flex>
      </Collapse>

      <Group style={{ justifyContent: "center", marginBottom: "20px" }}>
        <Button onClick={toggleMortgageCalculator}>Mortgage Calculator</Button>{" "}
        {/* New Button */}
      </Group>

      <Collapse in={isMortgageCalculatorOpen}>
        <Title order={3} style={{ marginBottom: "20px" }}>
          Mortgage Calculator
        </Title>
        <div style={{ marginBottom: "20px" }}>
          <NumberInput
            placeholder="House price (P)"
            label="House price"
            value={housePrice}
            thousandSeparator=","
            prefix="$ "
            onChange={(value) => setHousePrice(Number(value))}
            min={1} // Minimum value allowed for house price
            style={{ margin: "10px" }}
          />

          <NumberInput
            placeholder="Down payment"
            label="Down payment"
            value={downPayment}
            thousandSeparator=","
            prefix="$ "
            onChange={(value) => setDownPayment(Number(value))}
            min={0} // Down payment can be 0
            style={{ margin: "10px" }}
          />

          <NumberInput
            placeholder="Annual interest rate (r) %"
            label="Interest rate"
            value={annualInterestRate}
            suffix=" %"
            onChange={(value) => setAnnualInterestRate(Number(value))}
            min={0} // Minimum value allowed for interest rate
            max={10} // Maximum value allowed for interest rate
            step={0.01} // Step for the input
            style={{ margin: "10px" }}
          />

          <NumberInput
            placeholder="Number of years (n)"
            label="Number of years"
            value={numberOfPayments}
            suffix=" years"
            onChange={(value) => setNumberOfPayments(Number(value))}
            min={1} // There should be at least one payment
            step={1} // Increment by years
            style={{ margin: "10px" }}
          />

          <Button onClick={handleCalculate}>Calculate</Button>
          {monthlyPayment && <p>Monthly Payment: ${monthlyPayment}</p>}
        </div>
      </Collapse>

      <Group style={{ justifyContent: "center", marginBottom: "20px" }}>
        <Button onClick={toggleAppointments}>See Appointments</Button>
      </Group>

      <Collapse in={isAppointmentsOpen}>
        <Title order={2} style={{ marginBottom: "20px" }}>
          Visit Appointments
        </Title>
        <Flex
          style={{
            minHeight: "50px",
            backgroundColor: "rgba(0, 0, 0, .1)",
            gap: "md",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "row",
            flexWrap: "wrap",
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
