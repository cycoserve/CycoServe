import { DataAPIClient } from "@datastax/astra-db-ts";

// Initialize the client
const client = new DataAPIClient('AstraCS:LUYKxBwzampRlMZqDxLAZmoj:038dfbc0efb7051ae4caed613170fc3bc0d29a56f48e69e43a93a8216ef1f3bc');
const db = client.db('https://b8dc2dae-28c9-45d6-a538-d8c6e9604194-us-east1.apps.astra.datastax.com');

(async () => {
  const colls = await db.listCollections();
  console.log('Connected to AstraDB:', colls);
})();