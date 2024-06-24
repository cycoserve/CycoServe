import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';

type Website = {
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
        <img src={params.value as string} alt="Website" style={{ maxWidth: '100%', maxHeight: '100%' }} />
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

const WebsiteTable = () => {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        const response = await fetch(`/api/websites`);
        if (!response.ok) {
          throw new Error('Failed to fetch websites');
        }
        const data: Website[] = await response.json();
        setWebsites(data);
      } catch (error) {
        console.error('Error fetching websites:', error);
        // Handle error fetching websites
      } finally {
        setLoading(false);
      }
    };

    fetchWebsites();
  }, []);

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={websites}
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

export default WebsiteTable;
