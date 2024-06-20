// db.ts

import mysql, { PoolConnection } from 'mysql2/promise';

// Define the MySQL connection configuration
const connectionConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'test_database',
};

// Create a function to establish a connection pool
export async function connectDatabase(): Promise<PoolConnection> {
  try {
    // Create a MySQL connection pool
    const pool = await mysql.createPool(connectionConfig);
    
    // Get a connection from the pool
    const connection = await pool.getConnection();

    console.log('Connected to MySQL database');
    return connection;
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
    throw error;
  }
}

// Export the connectDatabase function as default
export default connectDatabase;
