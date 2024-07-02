import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';

type Article = {
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
        <img src={params.value as string} alt="Article" style={{ maxWidth: '100%', maxHeight: '100%' }} />
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

const ArticlesTable = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles');
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data: Article[] = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
        // Handle error fetching articles
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div style={{ height: '50%', width: '100%' }}>
      <DataGrid
        rows={articles}
        columns={columns}
        loading={loading}
        // checkboxSelection
        autoHeight
        onRowDoubleClick={(params) => console.log('Row double-clicked:', params.row)}
        onRowSelectionModelChange={(selection) => console.log('Selection changed:', selection)}
      />
    </div>
  );
};

export default ArticlesTable;
