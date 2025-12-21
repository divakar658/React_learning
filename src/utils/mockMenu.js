const mockMenus = {
  "38902": {
    resId: "38902",
    name: "Domino's Pizza",
    cuisines: ["Pizza", "Italian"],
    rating: 4.1,
    deliveryTime: 25,
    menu: [
      { itemId: "d1", name: "Margherita", price: 199, veg: true },
      { itemId: "d2", name: "Pepperoni Pizza", price: 349, veg: false }
    ]
  },

  "188457": {
    resId: "188457",
    name: "KFC",
    cuisines: ["Fast Food", "Burgers"],
    rating: 4.2,
    deliveryTime: 24,
    menu: [
      { itemId: "k1", name: "Zinger Burger", price: 199, veg: false },
      { itemId: "k2", name: "French Fries", price: 99, veg: true }
    ]
  },

  "32617": {
    resId: "32617",
    name: "McDonald's",
    cuisines: ["Burgers", "Cafe"],
    rating: 4.2,
    deliveryTime: 25,
    menu: [
      { itemId: "m1", name: "McAloo Tikki", price: 89, veg: true },
      { itemId: "m2", name: "McChicken Burger", price: 149, veg: false }
    ]
  },

  "153539": {
    resId: "153539",
    name: "Burger King",
    cuisines: ["Burgers", "American"],
    rating: 4.3,
    deliveryTime: 19,
    menu: [
      { itemId: "b1", name: "Veg Whopper", price: 169, veg: true },
      { itemId: "b2", name: "Chicken Whopper", price: 199, veg: false }
    ]
  },

  "104023": {
    resId: "104023",
    name: "Zaitoon",
    cuisines: ["Biryani", "Arabian"],
    rating: 4.3,
    deliveryTime: 30,
    menu: [
      { itemId: "z1", name: "Chicken Biryani", price: 260, veg: false },
      { itemId: "z2", name: "Mutton Biryani", price: 320, veg: false }
    ]
  },

  "92408": {
    resId: "92408",
    name: "Subway",
    cuisines: ["Healthy Food", "Wraps"],
    rating: 4.3,
    deliveryTime: 20,
    menu: [
      { itemId: "s1", name: "Veggie Delight", price: 180, veg: true },
      { itemId: "s2", name: "Chicken Teriyaki", price: 220, veg: false }
    ]
  },

  "186549": {
    resId: "186549",
    name: "Pizza Hut",
    cuisines: ["Pizza"],
    rating: 4.0,
    deliveryTime: 29,
    menu: [
      { itemId: "p1", name: "Veg Supreme", price: 299, veg: true },
      { itemId: "p2", name: "Chicken Supreme", price: 349, veg: false }
    ]
  },

  "587672": {
    resId: "587672",
    name: "Chaayos",
    cuisines: ["Beverages", "Snacks"],
    rating: 4.4,
    deliveryTime: 29,
    menu: [
      { itemId: "c1", name: "Masala Chai", price: 79, veg: true },
      { itemId: "c2", name: "Samosa", price: 49, veg: true }
    ]
  },

  "184933": {
    resId: "184933",
    name: "Wow! Momo",
    cuisines: ["Momos", "Chinese"],
    rating: 4.5,
    deliveryTime: 30,
    menu: [
      { itemId: "w1", name: "Veg Steam Momo", price: 120, veg: true },
      { itemId: "w2", name: "Chicken Fried Momo", price: 150, veg: false }
    ]
  },

  "222495": {
    resId: "222495",
    name: "Starbucks",
    cuisines: ["Cafe", "Beverages"],
    rating: 4.3,
    deliveryTime: 21,
    menu: [
      { itemId: "st1", name: "Cappuccino", price: 210, veg: true },
      { itemId: "st2", name: "Chocolate Muffin", price: 180, veg: true }
    ]
  },

  "144827": {
    resId: "144827",
    name: "Taco Bell",
    cuisines: ["Mexican", "Fast Food"],
    rating: 4.3,
    deliveryTime: 24,
    menu: [
      { itemId: "t1", name: "Veg Taco", price: 139, veg: true },
      { itemId: "t2", name: "Chicken Burrito", price: 219, veg: false }
    ]
  },

  "17991": {
    resId: "17991",
    name: "Faasos",
    cuisines: ["Wraps", "Fast Food"],
    rating: 4.3,
    deliveryTime: 25,
    menu: [
      { itemId: "f1", name: "Chicken Shawarma Roll", price: 199, veg: false },
      { itemId: "f2", name: "Paneer Wrap", price: 179, veg: true }
    ]
  }
};

export default mockMenus;
