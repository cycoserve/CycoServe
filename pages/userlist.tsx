// components/UsersList.tsx

import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Define the function to fetch users
    const fetchUsers = async () => {
      try {
        // Fetch users from the API endpoint
        const response = await axios.get<User[]>('/api/users', {
          headers: {
            Authorization: `Bearer ${process.env.INTERNAL_API_TOKEN}` // Include the secret token in the request headers
          }
        });

        // Update the state with the fetched users
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    // Call the fetchUsers function when the component mounts
    fetchUsers();

    // Clean up function to clear any ongoing requests when the component unmounts
    return () => {
      // Cleanup logic (if any)
    };
  }, []); // Run the effect only once when the component mounts

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {/* Map through the users array and display user details */}
        {users.map((user) => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
