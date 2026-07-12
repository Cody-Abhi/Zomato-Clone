// Dummy data for the whole app.
// In a real project this would come from an API, but here we use static data
// so the app works without a backend.

// 8 Food Categories shown on the home page
export const categories = [
  {
    id: 1,
    name: "Pizza",
    icon: "GiPizzaSlice",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80",
  },
  {
    id: 2,
    name: "Burger",
    icon: "GiHamburger",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&q=80",
  },
  {
    id: 3,
    name: "Chinese",
    icon: "GiNoodles",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&q=80",
  },
  {
    id: 4,
    name: "South Indian",
    icon: "GiDosa",
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=80",
  },
  {
    id: 5,
    name: "North Indian",
    icon: "GiCurry",
    image:
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&q=80",
  },
  {
    id: 6,
    name: "Cafe",
    icon: "GiCoffeeCup",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&q=80",
  },
  {
    id: 7,
    name: "Desserts",
    icon: "GiCupcake",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80",
  },
  {
    id: 8,
    name: "Biryani",
    icon: "GiRiceCooker",
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80",
  },
];

// 5 Collections shown on the home page
export const collections = [
  {
    id: 1,
    title: "Trending This Week",
    places: 24,
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
  },
  {
    id: 2,
    title: "Best Cafes",
    places: 18,
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
  },
  {
    id: 3,
    title: "Luxury Dining",
    places: 12,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
  },
  {
    id: 4,
    title: "Budget Meals",
    places: 30,
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
  },
  {
    id: 5,
    title: "Date Night",
    places: 15,
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
  },
];

// 12 Restaurants used on Home, Restaurants, and Details pages
export const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    rating: 4.5,
    location: "Connaught Place, Delhi",
    deliveryTime: "30 min",
    priceForTwo: 400,
    cuisine: "Pizza, Italian",
    offer: "50% OFF up to ₹100",
    isOpen: true,
    category: "Pizza",
  },
  {
    id: 2,
    name: "Burger Barn",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80",
    rating: 4.2,
    location: "Bandra, Mumbai",
    deliveryTime: "25 min",
    priceForTwo: 350,
    cuisine: "Burger, American",
    offer: "Free Delivery",
    isOpen: true,
    category: "Burger",
  },
  {
    id: 3,
    name: "Dragon Wok",
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80",
    rating: 4.3,
    location: "Koramangala, Bangalore",
    deliveryTime: "35 min",
    priceForTwo: 500,
    cuisine: "Chinese, Asian",
    offer: "20% OFF on first order",
    isOpen: true,
    category: "Chinese",
  },
  {
    id: 4,
    name: "Dosa Junction",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
    rating: 4.6,
    location: "T Nagar, Chennai",
    deliveryTime: "28 min",
    priceForTwo: 300,
    cuisine: "South Indian",
    offer: "Buy 1 Get 1 Free",
    isOpen: true,
    category: "South Indian",
  },
  {
    id: 5,
    name: "Curry House",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    rating: 4.4,
    location: "Park Street, Kolkata",
    deliveryTime: "40 min",
    priceForTwo: 600,
    cuisine: "North Indian, Mughlai",
    offer: "30% OFF up to ₹150",
    isOpen: false,
    category: "North Indian",
  },
  {
    id: 6,
    name: "Brew & Bean",
    image:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80",
    rating: 4.7,
    location: "Hauz Khas, Delhi",
    deliveryTime: "20 min",
    priceForTwo: 450,
    cuisine: "Cafe, Continental",
    offer: "Free Coffee with breakfast",
    isOpen: true,
    category: "Cafe",
  },
  {
    id: 7,
    name: "Sweet Tooth",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
    rating: 4.8,
    location: "Banjara Hills, Hyderabad",
    deliveryTime: "22 min",
    priceForTwo: 350,
    cuisine: "Desserts, Bakery",
    offer: "15% OFF on cakes",
    isOpen: true,
    category: "Desserts",
  },
  {
    id: 8,
    name: "Biryani Blues",
    image:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&q=80",
    rating: 4.5,
    location: "Charminar, Hyderabad",
    deliveryTime: "38 min",
    priceForTwo: 500,
    cuisine: "Biryani, Hyderabadi",
    offer: "Combo meal at ₹299",
    isOpen: true,
    category: "Biryani",
  },
  {
    id: 9,
    name: "The Pizza Oven",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
    rating: 4.1,
    location: "Sector 17, Chandigarh",
    deliveryTime: "32 min",
    priceForTwo: 550,
    cuisine: "Pizza, Fast Food",
    offer: "40% OFF up to ₹80",
    isOpen: true,
    category: "Pizza",
  },
  {
    id: 10,
    name: "Cafe Mocha",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    rating: 4.6,
    location: "Indiranagar, Bangalore",
    deliveryTime: "26 min",
    priceForTwo: 480,
    cuisine: "Cafe, Italian",
    offer: "Free Dessert",
    isOpen: true,
    category: "Cafe",
  },
  {
    id: 11,
    name: "Spice Route",
    image:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80",
    rating: 4.3,
    location: "Marine Drive, Mumbai",
    deliveryTime: "45 min",
    priceForTwo: 700,
    cuisine: "North Indian, Chinese",
    offer: "10% OFF up to ₹50",
    isOpen: false,
    category: "North Indian",
  },
  {
    id: 12,
    name: "Burger Lab",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
    rating: 4.4,
    location: "Anna Nagar, Chennai",
    deliveryTime: "27 min",
    priceForTwo: 380,
    cuisine: "Burger, Fast Food",
    offer: "Free Fries with meal",
    isOpen: true,
    category: "Burger",
  },
];

// 5 Reviews used on the Restaurant Details page
export const reviews = [
  {
    id: 1,
    name: "Aarav Sharma",
    rating: 5,
    date: "2 days ago",
    text: "Amazing food and quick delivery! The pizza was fresh and hot. Will order again.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 2,
    name: "Priya Patel",
    rating: 4,
    date: "5 days ago",
    text: "Good taste and nice packaging. Delivery was a bit late but the food made up for it.",
    avatar: "https://i.pravatar.cc/100?img=45",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    rating: 5,
    date: "1 week ago",
    text: "One of the best places in town. The ambiance is great and the staff is friendly.",
    avatar: "https://i.pravatar.cc/100?img=33",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    rating: 4,
    date: "1 week ago",
    text: "Loved the desserts! The cakes were soft and fresh. Highly recommend for sweet lovers.",
    avatar: "https://i.pravatar.cc/100?img=49",
  },
  {
    id: 5,
    name: "Karan Verma",
    rating: 5,
    date: "2 weeks ago",
    text: "Perfect place for a quick bite. Affordable prices and generous portions.",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
];

// Sample menu items used on the Restaurant Details page.
// Each item now has an image, rating, and veg/non-veg flag so the
// Add to Cart menu section can show all the required details.
export const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 199,
    description: "Classic pizza with fresh mozzarella and basil.",
    veg: true,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    price: 299,
    description: "Loaded with pepperoni and cheese.",
    veg: false,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&q=80",
  },
  {
    id: 3,
    name: "Garlic Bread",
    price: 99,
    description: "Crispy bread with garlic butter and herbs.",
    veg: true,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1544982503-9f984c14501a?w=400&q=80",
  },
  {
    id: 4,
    name: "Pasta Alfredo",
    price: 249,
    description: "Creamy white sauce pasta with veggies.",
    veg: true,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&q=80",
  },
  {
    id: 5,
    name: "Chicken Wings",
    price: 319,
    description: "Spicy grilled wings with dip.",
    veg: false,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&q=80",
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    price: 129,
    description: "Warm cake with molten chocolate center.",
    veg: true,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80",
  },
];

// Sample offers shown on the Home page Offers section
export const offers = [
  {
    id: 1,
    title: "50% OFF",
    subtitle: "On first 3 orders",
    code: "FOODIE50",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
  },
  {
    id: 2,
    title: "Free Delivery",
    subtitle: "On orders above ₹199",
    code: "FREEDEL",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80",
  },
  {
    id: 3,
    title: "₹125 OFF",
    subtitle: "Use code SAVE125",
    code: "SAVE125",
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80",
  },
];
