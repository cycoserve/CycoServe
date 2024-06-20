import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'; // Firebase imports

type UserTable = {
  id: string;
  name: string;
  imageUrl: string;
  active: boolean;
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
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px' }}>
        <img src={params.value as string} alt="User" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
    ),
  },
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'email', headerName: 'EMAIL', width: 400 },
  {
    field: 'published',
    headerName: 'Published',
    width: 200,
    renderCell: (params: GridCellParams) => <span>{params.value ? 'Yes' : 'No'}</span>,
  },
];

const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const auth = getAuth(); // Initialize Firebase Auth

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (fetchedUser) => {
      const fetchUsers = async () => {
        try {
          if (!fetchedUser) {
            console.warn('User not logged in. Data not fetched.');
            setUsers([]); // Clear users if not logged in
            return;
          }

          const response = await fetch(`/api/users`);
          if (!response.ok) {
            throw new Error('Failed to fetch users');
          }
          const data: User[] = await response.json();

          // Filter data based on logged-in user's ID (replace 'uid' with your field name)
          const filteredUsers = data.filter((user) => user.uid === fetchedUser.uid); // Adjust filter condition

          setUsers(filteredUsers);
        } catch (error) {
          console.error('Error fetching users:', error);
          // Handle error fetching users
        } finally {
          setLoading(false);
        }
      };

      fetchUsers();
    });

    return unsubscribe;
  }, [auth]); // Add auth as dependency

  return (
    <div style={{ height: 600, width: '100%' }}>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <DataGrid
          rows={users}
          columns={columns}
          loading={loading}
          checkboxSelection
          autoHeight
          onRowDoubleClick={(params) => console.log('Row double-clicked:', params.row)}
          onRowSelectionModelChange={(selection) => console.log('Selection changed:', selection)}
        />
      )}
    </div>
  );
};

export default UserTable;
