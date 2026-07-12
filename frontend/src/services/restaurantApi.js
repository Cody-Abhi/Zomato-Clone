// This file mimics an API service.
// In a real project these functions would call a backend using fetch().
// Here we simply return the dummy data after a small delay so the Loader
// component can be demonstrated.

import {
  restaurants,
  categories,
  collections,
  reviews,
  menuItems,
} from "../utils/dummyData";

// Helper that waits for a given number of milliseconds
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Get all restaurants (optionally filtered by search text and category)
export async function getRestaurants(search = "", category = "All") {
  await wait(500); // fake network delay
  let list = restaurants;

  // Filter by category if one is selected
  if (category && category !== "All") {
    list = list.filter((r) => r.category === category);
  }

  // Filter by search text (match name or cuisine)
  if (search) {
    const lower = search.toLowerCase();
    list = list.filter(
      (r) =>
        r.name.toLowerCase().includes(lower) ||
        r.cuisine.toLowerCase().includes(lower)
    );
  }

  return list;
}

// Get a single restaurant by its id
export async function getRestaurantById(id) {
  await wait(400);
  return restaurants.find((r) => r.id === Number(id)) || null;
}

// Get restaurants that are similar (same category), excluding the current one
export async function getSimilarRestaurants(id) {
  await wait(400);
  const current = restaurants.find((r) => r.id === Number(id));
  if (!current) return [];
  return restaurants
    .filter((r) => r.category === current.category && r.id !== current.id)
    .slice(0, 4);
}

// Get all categories
export async function getCategories() {
  await wait(300);
  return categories;
}

// Get all collections
export async function getCollections() {
  await wait(300);
  return collections;
}

// Get reviews for a restaurant
export async function getReviews() {
  await wait(300);
  return reviews;
}

// Get menu items for a restaurant
export async function getMenuItems() {
  await wait(300);
  return menuItems;
}
