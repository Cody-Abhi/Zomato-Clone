// Dummy data for the Cart feature.
// The cart starts empty in the app, but we also provide a "sample cart"
// that can be used to preview the cart page layout.

// A few sample cart items (used for preview / fallback)
export const sampleCartItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic pizza with fresh mozzarella and basil.",
    price: 199,
    rating: 4.5,
    veg: true,
    quantity: 2,
    restaurantName: "Pizza Palace",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
  },
  {
    id: 4,
    name: "Pasta Alfredo",
    description: "Creamy white sauce pasta with veggies.",
    price: 249,
    rating: 4.3,
    veg: true,
    quantity: 1,
    restaurantName: "Pizza Palace",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812a3e5e7?w=400&q=80",
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    description: "Warm cake with molten chocolate center.",
    price: 129,
    rating: 4.8,
    veg: true,
    quantity: 3,
    restaurantName: "Sweet Tooth",
    image:
      "https://images.unsplash.com/photo-1551024601-bd78fb4e4d7c?w=400&q=80",
  },
];

// Available promo codes for the cart
export const promoCodes = [
  { code: "FOODIE50", label: "50% OFF up to ₹100", discount: 100 },
  { code: "FREEDEL", label: "Free Delivery", discount: 40 },
  { code: "SAVE125", label: "₹125 OFF", discount: 125 },
];

// Cart price details constants
export const DELIVERY_FEE = 40;
export const GST_RATE = 0.05; // 5% GST
