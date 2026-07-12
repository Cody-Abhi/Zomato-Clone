const db = require('../config/db');

// Create the users table if it does not exist yet
const createUserTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role ENUM('customer', 'vendor', 'delivery_partner', 'admin') DEFAULT 'customer',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  await db.query(query);
};

// Export table creator so server.js can call it in the right order
module.exports.createUserTable = createUserTable;

class User {
  // Create a new user
  static async create({ name, email, password, role }) {
    const query = `
      INSERT INTO users (name, email, password, role)
      VALUES (?, ?, ?, ?)
    `;
    const [result] = await db.query(query, [name, email, password, role || 'customer']);
    return { id: result.insertId, name, email, role: role || 'customer' };
  }

  // Find user by email
  static async findByEmail(email) {
    const query = `SELECT * FROM users WHERE email = ?`;
    const [rows] = await db.query(query, [email]);
    return rows[0];
  }

  // Find user by ID
  static async findById(id) {
    const query = `SELECT id, name, email, role, created_at FROM users WHERE id = ?`;
    const [rows] = await db.query(query, [id]);
    return rows[0];
  }
}

module.exports = User;
module.exports.createUserTable = createUserTable;
