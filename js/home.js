// Featured products data
const products = [
  { name: "Classic Latte", desc: "Smooth, creamy, and perfectly balanced.", image: "images/latte.jpg" },
  { name: "Cappuccino", desc: "Bold espresso topped with airy foam.", image: "images/cappuccino.jpg" },
  { name: "Cold Brew", desc: "Refreshing and rich with a smooth finish.", image: "images/coldbrew.jpg" }
];

// Dynamically insert product cards
const container = document.getElementById("featured-products");
products.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.desc}</p>
  `;
  container.appendChild(card);
});

// Dynamic greeting based on time
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Good Morning from Brew Haven ☀️";
} else if (hour < 18) {
  greeting.textContent = "Good Afternoon from Brew Haven ☕";
} else {
  greeting.textContent = "Good Evening from Brew Haven 🌙";
}
