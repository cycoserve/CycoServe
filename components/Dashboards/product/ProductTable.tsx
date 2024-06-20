import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import Link from 'next/link';

type Product = {
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
  { field: 'title', headerName: 'Title', width: 200 },
  { field: 'description', headerName: 'Description', width: 400 },
  { field: 'category', headerName: 'Category', width: 250 },
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
  //     return 'Unknown';
  //   },
  // },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    sortable: false,
    renderCell: (params: GridCellParams) => (
      <>
        <div className="inline-flex gap-4">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </>
    ),
  },
];

const ProductTable = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // You can add more sophisticated error handling here, e.g., displaying an error message to the user
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);





  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        loading={loading}
        checkboxSelection
        autoHeight
      />
    </div>
  );
};

export default ProductTable;


