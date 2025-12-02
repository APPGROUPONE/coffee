// docker/mongo-init/mongo-init.js
// Initializes the coffee_shop DB and populates menu_items collection


db = db.getSiblingDB('coffee_shop');

// Drop collection if exists (safe for development)
if (db.getCollectionNames().indexOf('menu_items') !== -1) {
  db.menu_items.drop();
}

// Insert documents that match the React component
db.menu_items.insertMany([
  {
    name: "Espresso",
    description: "A bold, concentrated shot of coffee, perfect for a quick energy boost.",
    price: 3.50,
    category: "Coffee",
    image_url: "images/espresso.jpg",
    is_available: true,
    tags: ["espresso", "strong"],
    created_at: new Date()
  },
  {
    name: "Latte",
    description: "Smooth espresso blended with steamed milk and a touch of foam.",
    price: 4.75,
    category: "Coffee",
    image_url: "images/latte.jpg",
    is_available: true,
    tags: ["milk", "smooth"],
    created_at: new Date()
  },
  {
    name: "Cappuccino",
    description: "Espresso topped with equal parts steamed milk and frothy foam.",
    price: 4.50,
    category: "Coffee",
    image_url: "images/cappuccino.jpg",
    is_available: true,
    tags: ["foam", "balanced"],
    created_at: new Date()
  },
  {
    name: "Mocha",
    description: "Rich espresso mixed with chocolate syrup and topped with whipped cream.",
    price: 5.00,
    category: "Coffee",
    image_url: "images/mocha.jpg",
    is_available: true,
    tags: ["chocolate", "sweet"],
    created_at: new Date()
  },
  {
    name: "Croissant",
    description: "Buttery, flaky pastry that's perfect alongside your coffee.",
    price: 2.50,
    category: "Food",
    image_url: "images/croissant.jpg",
    is_available: true,
    tags: ["pastry", "buttery"],
    created_at: new Date()
  },
  {
    name: "Blueberry Muffin",
    description: "Soft and moist muffin bursting with fresh blueberries.",
    price: 3.00,
    category: "Food",
    image_url: "images/muffin.jpg",
    is_available: true,
    tags: ["muffin", "sweet"],
    created_at: new Date()
  },
  {
    name: "Chicken Sandwich",
    description: "Grilled chicken with veggies on toasted bread—satisfying and delicious.",
    price: 7.50,
    category: "Food",
    image_url: "images/sandwich.jpg",
    is_available: true,
    tags: ["sandwich", "savory"],
    created_at: new Date()
  }
]);

// Helpful indexes for queries
db.menu_items.createIndex({ category: 1 });
db.menu_items.createIndex({ is_available: 1 });
db.menu_items.createIndex({ name: "text", description: "text" });
