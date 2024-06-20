import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';

type Customer = {
  id: string;
  first_name: string;
  last_name: string;
  createdAt?: {
    seconds: number;
    nanoseconds: number;
  };
};

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 120 },
  { field: 'first_name', headerName: 'First Name', width: 200 },
  { field: 'last_name', headerName: 'Last Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'budget', headerName: 'Budget', width: 200 },
  // {
  //   field: 'createdAt',
  //   headerName: 'Created At',
  //   width: 180,
  //   valueGetter: (params: GridCellParams) => {
  //     const createdAt = params?.row?.createdAt;
  //     if (createdAt) {
  //       const date = new Date(createdAt.seconds * 1000);
  //       return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  //     }
  //     return 'Date';
  //   },
  // },
 
];

const CustomerTable = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('/api/customers');
        if (!response.ok) {
          throw new Error('Failed to fetch customers');
        }
        const data: Customer[] = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching customers:', error);
        // You can add more sophisticated error handling here, e.g., displaying an error message to the user
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  const handleEdit = (customerId: string) => {
    // Implement edit logic, e.g., redirect to edit page or open a modal
    console.log('Edit customer:', customerId);
  };

  const handleDelete = (customerId: string) => {
    // Implement delete logic, e.g., show confirmation dialog and then delete the customer
    console.log('Delete customer:', customerId);
  };

  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        rows={customers}
        columns={columns}
        loading={loading}
        checkboxSelection
        autoHeight
      />
    </div>
  );
};

export default CustomerTable;
function handleEdit(id: any): void {
    throw new Error('Function not implemented.');
}

function handleDelete(id: any): void {
    throw new Error('Function not implemented.');
}

