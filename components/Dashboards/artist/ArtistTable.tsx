import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import Link from 'next/link';

type Artist = {
  id: string;
  name: string;
  bio: string;
  genre: string[];
  createdAt?: {
    seconds: number;
    nanoseconds: number;
  };
};

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'bio', headerName: 'Biography', width: 400 },
  { field: 'genre', headerName: 'Genre', width: 250 },
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

const ArtistTable = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch('/api/artists');
        if (!response.ok) {
          throw new Error('Failed to fetch artists');
        }
        const data: Artist[] = await response.json();
        setArtists(data);
      } catch (error) {
        console.error('Error fetching artists:', error);
        // You can add more sophisticated error handling here, e.g., displaying an error message to the user
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);





  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        rows={artists}
        columns={columns}
        loading={loading}
        checkboxSelection
        autoHeight
      />
    </div>
  );
};

export default ArtistTable;


