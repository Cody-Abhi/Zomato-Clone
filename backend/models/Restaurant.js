const db = require('../config/db');

// Create the restaurants table if it does not exist yet
const createRestaurantTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS restaurants (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      address VARCHAR(255) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      cuisine_type VARCHAR(100),
      vendor_id INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (vendor_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `;
  await db.query(query);
};


class Restaurant {
  // Create a new restaurant record
  static async create({ name, address, phone, cuisine_type, vendor_id }) {
    const query = `
      INSERT INTO restaurants (name, address, phone, cuisine_type, vendor_id)
      VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await db.query(query, [name, address, phone, cuisine_type, vendor_id]);
    return { id: result.insertId, name, address, phone, cuisine_type, vendor_id };
  }

  // Find all restaurants
  static async findAll() {
    const query = `SELECT * FROM restaurants`;
    const [rows] = await db.query(query);
    return rows;
  }

  // Find restaurant by ID
  static async findById(id) {
    const query = `SELECT * FROM restaurants WHERE id = ?`;
    const [rows] = await db.query(query, [id]);
    return rows[0];
  }

  // Update restaurant details
  static async update(id, { name, address, phone, cuisine_type }) {
    const query = `
      UPDATE restaurants 
      SET name = ?, address = ?, phone = ?, cuisine_type = ? 
      WHERE id = ?
    `;
    await db.query(query, [name, address, phone, cuisine_type, id]);
    return { id, name, address, phone, cuisine_type };
  }

  // Delete restaurant
  static async delete(id) {
    const query = `DELETE FROM restaurants WHERE id = ?`;
    const [result] = await db.query(query, [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Restaurant;
module.exports.createRestaurantTable = createRestaurantTable;
