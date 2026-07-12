const db = require('../config/db');

// Create the simple_users table if it does not exist
const initTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS simple_users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  await db.query(query);
};


class SimpleUser {
  static async create({ name, email }) {
    const query = `INSERT INTO simple_users (name, email) VALUES (?, ?)`;
    const [result] = await db.query(query, [name, email]);
    return { id: result.insertId, name, email };
  }
}

module.exports = SimpleUser;
module.exports.initTable = initTable;

