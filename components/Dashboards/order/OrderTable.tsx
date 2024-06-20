import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';

type Order = {
  id: string;
  title: string;
  description: string;
  category: string;
  createdAt?: {
    seconds: number;
    nanoseconds: number;
  };
};

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'description', headerName: 'Description', width: 300 },
  { field: 'category', headerName: 'Category', width: 150 },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 180,
    valueGetter: (params: GridCellParams) => {
      const createdAt = params?.row?.createdAt;
      if (createdAt) {
        const date = new Date(createdAt.seconds * 1000);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
      }
      return 'Unknown';
    },
  },
 
];

const OrderTable = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/orders');
        if (!response.ok) {
          throw new Error('Failed to fetch prders');
        }
        const data: Order[] = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
        // You can add more sophisticated error handling here, e.g., displaying an error message to the user
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);



  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={orders}
        columns={columns}
        loading={loading}
        checkboxSelection
        autoHeight
      />
    </div>
  );
};

export default OrderTable;

