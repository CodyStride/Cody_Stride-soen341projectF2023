'use client';

import { IBrokerData } from "@/types/property";
import { ActionIcon, Box, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DataTable } from "mantine-datatable";
import { EditBroker } from "./EditBroker";
import { useState } from "react";
import { DeleteBroker } from "./DeleteBroker";
import { IconEdit, IconTrash } from "@tabler/icons-react";

export function BrokerTable({ data }: { data: IBrokerData[] }) {
  const [openedEdit, { open: openEdit, close: closeEdit }] = useDisclosure(false);
  const [openedDelete, { open: openDelete, close: closeDelete }] = useDisclosure(false);
  const [brokerData, setBrokerData] = useState<IBrokerData>();

  const handleEdit = (data: IBrokerData) => {
    console.log(data)
    setBrokerData(data);
    openEdit();
  }

  const handleDelete = (data: IBrokerData) => {
    console.log(data)
    openDelete();
  }

  console.log(data);

  return (
    <>
      {brokerData && <EditBroker setBroker={setBrokerData} data={brokerData} closeModal={closeEdit} opened={openedEdit} />}
      {brokerData && <DeleteBroker brokerId={brokerData.id} closeModal={closeDelete} opened={openedDelete} />}
      <DataTable
        withTableBorder
        columns={[
          { accessor: 'name', title: 'Name' },
          { accessor: 'license', title: 'License' },
          { accessor: 'id', title: 'User' },
          { accessor: 'agency', title: 'Agency' },
          {
            accessor: 'actions',
            title: <Box mr={6}>Row actions</Box>,
            textAlign: 'right',
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
              </Group >
            ),
          },
        ]}
        records={data}
      />
    </>
  );
}