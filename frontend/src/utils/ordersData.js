// Dummy data for previous orders.
// Used on the My Orders page and Order Details page.

export const orders = [
  {
    id: "ORD-1001",
    restaurantId: 1,
    restaurantName: "Pizza Palace",
    restaurantImage:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    items: [
      { name: "Margherita Pizza", quantity: 2, price: 199 },
      { name: "Garlic Bread", quantity: 1, price: 99 },
    ],
    total: 537,
    status: "Delivered",
    orderDate: "July 5, 2026",
    deliveryTime: "30 min",
    paymentMethod: "Credit Card",
    address: "12, MG Road, Connaught Place, New Delhi - 110001",
    phone: "+91 98765 43210",
    timeline: ["Confirmed", "Preparing", "Picked Up", "Out for Delivery", "Delivered"],
    currentStep: 5,
  },
  {
    id: "ORD-1002",
    restaurantId: 6,
    restaurantName: "Brew & Bean",
    restaurantImage:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2065?w=400&q=80",
    items: [
      { name: "Cappuccino", quantity: 2, price: 179 },
      { name: "Chocolate Lava Cake", quantity: 1, price: 129 },
    ],
    total: 487,
    status: "Out for Delivery",
    orderDate: "July 9, 2026",
    deliveryTime: "20 min",
    paymentMethod: "UPI",
    address: "45, Hauz Khas Village, New Delhi - 110016",
    phone: "+91 98765 43210",
    timeline: ["Confirmed", "Preparing", "Picked Up", "Out for Delivery", "Delivered"],
    currentStep: 4,
  },
  {
    id: "ORD-1003",
    restaurantId: 8,
    restaurantName: "Biryani Blues",
    restaurantImage:
      "https://images.unsplash.com/photo-1633945274309-2c16c87c0d4c?w=400&q=80",
    items: [
      { name: "Chicken Biryani", quantity: 2, price: 249 },
      { name: "Chicken Wings", quantity: 1, price: 319 },
    ],
    total: 817,
    status: "Preparing",
    orderDate: "July 10, 2026",
    deliveryTime: "38 min",
    paymentMethod: "Cash on Delivery",
    address: "78, Banjara Hills, Hyderabad - 500034",
    phone: "+91 98765 43210",
    timeline: ["Confirmed", "Preparing", "Picked Up", "Out for Delivery", "Delivered"],
    currentStep: 2,
  },
  {
    id: "ORD-1004",
    restaurantId: 2,
    restaurantName: "Burger Barn",
    restaurantImage:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80",
    items: [
      { name: "Classic Cheese Burger", quantity: 3, price: 149 },
      { name: "French Fries", quantity: 2, price: 99 },
    ],
    total: 645,
    status: "Cancelled",
    orderDate: "July 3, 2026",
    deliveryTime: "25 min",
    paymentMethod: "Debit Card",
    address: "22, Bandra West, Mumbai - 400050",
    phone: "+91 98765 43210",
    timeline: ["Confirmed", "Preparing", "Picked Up", "Out for Delivery", "Delivered"],
    currentStep: 1,
  },
];

// Helper to find a single order by id (used on the Order Details page)
export function getOrderById(id) {
  return orders.find((o) => o.id === id);
}
