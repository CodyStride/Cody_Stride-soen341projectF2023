"use client";

import { IPropertyData } from "@/types/property";
import { ActionIcon, Box, Group, NumberFormatter } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DataTable } from "mantine-datatable";
import { EditPropertyModal } from "./EditPropertyModal";
import { useState } from "react";
import { DeletePropertyModal } from "./DeletePropertyModal";
import { IconEdit, IconTrash } from "@tabler/icons-react";

export function PropertyTable({ data }: { data: IPropertyData[] }) {
  const [openedEdit, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);
  const [openedDelete, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);
  const [propertyData, setPropertyData] = useState<IPropertyData>();

  const handleEdit = (data: IPropertyData) => {
    console.log(data);
    setPropertyData(data);
    openEdit();
  };

  const handleDelete = (data: IPropertyData) => {
    console.log(data);
    setPropertyData(data);
    openDelete();
  };

  console.log(data)
  return (
    <>
      {propertyData && (
        <EditPropertyModal
          setProperty={setPropertyData}
          data={propertyData}
          closeModal={closeEdit}
          opened={openedEdit}
        />
      )}
      {propertyData && (
        <DeletePropertyModal
          propertyId={propertyData.id}
          closeModal={closeDelete}
          opened={openedDelete}
        />
      )}
      <DataTable
        striped
        highlightOnHover
        withTableBorder
        withColumnBorders
        columns={[
          { accessor: "type", title: "Type" },
          {
            accessor: "price",
            title: "Price (CAD $)",
            render: (record) => (
              <NumberFormatter value={record.price} thousandSeparator />
            ),
          },
          { accessor: "description", title: "Description" },
          { accessor: "location", title: "Location" },
          { accessor: "bedrooms", title: "Bedrooms" },
          { accessor: "bathrooms", title: "Bathrooms" },
          { accessor: "image", title: "Image" },
          {
            accessor: "actions",
            title: <Box mr={6}>Row actions</Box>,
            textAlign: "right",
            render: (data) => (
              <Group gap={4} justify="right" wrap="nowrap">
                <ActionIcon
                  size="sm"
                  variant="subtle"
                  color="blue"
                  onClick={() => handleEdit(data)}
                >
                  <IconEdit size={16} />
                </ActionIcon>
                <ActionIcon
                  size="sm"
                  variant="subtle"
                  color="red"
                  onClick={() => handleDelete(data)}
                >
                  <IconTrash size={16} />
                </ActionIcon>
              </Group>
            ),
          },
        ]}
        records={data}
      />
    </>
  );
}

export default PropertyTable;
