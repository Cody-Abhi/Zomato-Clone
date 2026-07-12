const mysql = require('mysql2/promise');

let pool;

if (process.env.MYSQL_URL) {
  // Use Railway's full connection URL when available (preferred for Railway deployments)
  pool = mysql.createPool(process.env.MYSQL_URL);
} else {
  // Fallback to individual env vars (for local dev or Railway public proxy)
  pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'railway',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
}

// Export the pool so other files can import and use it
module.exports = pool;
