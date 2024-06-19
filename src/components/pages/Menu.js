import React from "react";
import { Card } from "react-bootstrap";

// Data structured by categories with extended items
const menuData = [
  {
    category: "Soups",
    items: [
      { name: "Lentil Soup", price: "6.50" },
      { name: "Minestrone Soup", price: "6.00" },
      { name: "Seafood Bisque", price: "7.50" },
      { name: "Tomato Basil Soup", price: "5.75" },
    ],
  },
  {
    category: "Salads",
    items: [
      { name: "Greek Salad", price: "9.75" },
      { name: "Tabouleh", price: "8.25" },
      { name: "Caesar Salad", price: "7.50" },
      { name: "Arugula Salad", price: "8.50" },
    ],
  },
  {
    category: "Main Courses",
    items: [
      { name: "Moussaka", price: "13.50" },
      { name: "Chicken Shawarma", price: "12.50" },
      { name: "Grilled Lamb", price: "19.50" },
      { name: "Stuffed Peppers", price: "14.50" },
    ],
  },
  {
    category: "Specials",
    items: [
      {
        name: "Greek Salad",
        price: "12.99",
        description:
          "The famous Greek salad with crispy lettuce, peppers, and olives.",
      },
      {
        name: "Bruschetta",
        price: "5.99",
        description:
          "Homemade grilled bread with garlic, olive oil, and fresh vegetables.",
      },
      {
        name: "Lemon Cake",
        price: "5.00",
        description:
          "Grandma’s recipe with authentic ingredients and a touch of love.",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Baklava", price: "5.50" },
      { name: "Rice Pudding", price: "4.50" },
      { name: "Tiramisu", price: "6.00" },
      { name: "Greek Yogurt with Honey", price: "4.75" },
    ],
  },
];

// Component to render each menu category and its items
function MenuCategory({ category, items }) {
  return (
    <div className="w-full my-4 ml-4">
      <h4 className="text-2xl font-semibold text-[#495e57]">{category}</h4>
      {items.map((item, index) => (
        <Card key={index} className="flex justify-between p-3 mt-2 shadow-md">
          <span className="font-medium text-lg text-gray-700">{item.name}</span>
          <span className="text-xl text-gray-900">${item.price}</span>
        </Card>
      ))}
    </div>
  );
}

function Menu() {
  return (
    <section className="flex flex-col items-center w-full px-5">
      <h2 className="text-5xl font-serif mt-5 mb-3 text-[#495e57] font-bold">
        Our Menu
      </h2>
      {menuData.map((category, index) => (
        <MenuCategory key={index} {...category} />
      ))}
    </section>
  );
}

export default Menu;
