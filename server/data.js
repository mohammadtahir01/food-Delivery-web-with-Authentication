// data.js
module.exports = {
  resturant: [
    {
      id: 1,
      name: "Chef Burgers London",
      image:
        "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      discount: "40%",
      cuisine: ["Burgers", "Fast Food"],
      location: "London",
      rating: 4.5,
      deliveryTime: "25-30 min",
      priceRange: "$$",
      menu: [
        { itemId: 101, itemName: "Classic Burger", price: 99, veg: false },
        { itemId: 102, itemName: "Veggie Burger", price: 103, veg: true },
      ],
    },
    {
      id: 2,
      name: "Grand Al Cafe London",
      image:
        "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=1024x1024&w=is&k=20&c=faq73viCFGvfpKxcBuHcOI8kyT99B-p-jScipke-VuQ=",
      discount: "20%",
      cuisine: ["Cafe", "Healthy"],
      location: "London",
      rating: 4.2,
      deliveryTime: "30-40 min",
      priceRange: "$$",
      menu: [
        { itemId: 201, itemName: "Grilled Chicken Salad", price: 12.99, veg: false },
        { itemId: 202, itemName: "Veggie Salad", price: 10.49, veg: true },
      ],
    },
  ],

  burger: [
    {
      id: 1,
      name: "Royal Cheese Burger with Extra Fries",
      description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger™, medium fries",
      price: 23.1,
      currency: "GBP",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=60",
      category: "Burgers",
    },
  ],

  Brand: [
    {
      id: 1,
      name: "McDonald's",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3gqBg9hEJPaOly8m0GVfYmHBdYSixFCZUA&s",
    },
  ],

  "Pizza&Food": [
    {
      id: 1,
      name: "Burgers & Fastfood",
      restaurants: "21 Restaurants",
      image:
        "https://www.eatingwell.com/thmb/pMb5k3YZDGcJL22PWY0ZlExqowE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/use-a-spoon-chopped-salad-with-tomatoes-cucumber-red-onion-and-kalamata-olives-459c57117cf4494d88ff05413e660c73.jpg",
    },
  ],

  MENU: [
    {
      id: 1,
      category: "Pizza",
      name: "Farm House Xtreme Pizza",
      description: "Cheeseburger, 3 medium-sized french fries, 3 cold drinks.",
      sizes: [
        { key: "small", label: "Small", price: "£21.90" },
        { key: "medium", label: "Medium", price: "£25.90" },
        { key: "large", label: "Large", price: "£27.50" },
      ],
      rating: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3gqBg9hEJPaOly8m0GVfYmHBdYSixFCZUA&s",
    },
  ],
};
