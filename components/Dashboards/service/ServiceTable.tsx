import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';

type Service = {
  id: string;
  title: string;
  imageUrl: string;
  excerpt: string;
  content: string;
  published: boolean;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
};

const columns: GridColDef[] = [
  {
    field: 'imageUrl',
    headerName: 'Image',
    width: 100,
    renderCell: (params: GridCellParams) => (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding:'4px' }}>
        <img src={params.value as string} alt="Service" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
    ),
  },
  { field: 'title', headerName: 'Title', width: 300 },

  {
    field: 'excerpt',
    headerName: 'Excerpt',
    width: 400,
    renderCell: (params: GridCellParams) => (
      <div dangerouslySetInnerHTML={{ __html: params.value as string }} />
    ),
  },
  {
    field: 'published',
    headerName: 'Published',
    width: 200,
    renderCell: (params: GridCellParams) => (
      <span>{params.value ? 'Yes' : 'No'}</span>
    ),
  },
  { field: 'id', headerName: 'ID', width: 100 },
];

const ServiceTable = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`/api/services`);
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const data: Service[] = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
        // Handle error fetching services
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={services}
        columns={columns}
        loading={loading}
        checkboxSelection
        autoHeight
        onRowDoubleClick={(params) => console.log('Row double-clicked:', params.row)}
        onRowSelectionModelChange={(selection) => console.log('Selection changed:', selection)}
      />
    </div>
  );
};

export default ServiceTable;
