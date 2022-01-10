import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Lameck",
      email: "otienolameck327@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Scarlet",
      email: "lameckmeshack4@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
  ],
  products: [
    {
      name: "Maasai Coloured Crown",
      category: "Crown",
      image: "/images/p1.png",
      price: 120,
      countInStock: 15,
      brand: "Maasai",
      rating: 4.5,
      numReviews: 10,
      description: "high quality Maasai beads products",
    },
    {
      name: "Samburu Bracelet ",
      category: "Bracelets",
      image: "/images/p2.png",
      price: 100,
      countInStock: 10,
      brand: "Samburu",
      rating: 4.5,
      numReviews: 10,
      description: "high quality Samburu products",
    },
    {
      name: "Indegenous Beaded Crown",
      category: "Crown",
      image: "/images/p3.png",
      price: 220,
      countInStock: 0,
      brand: "Indegenous",
      rating: 4.8,
      numReviews: 10,
      description: "high quality Indegenous beads products",
    },
    {
      name: "Maasai Men Necklace",
      category: "Necklace",
      image: "/images/p4.png",
      price: 78,
      countInStock: 13,
      brand: "Maasai",
      rating: 14,
      numReviews: 10,
      description: "high quality Maasai beads products",
    },
    {
      name: "Samburu Wpmen Necklace",
      category: "Necklace",
      image: "/images/p1.png",
      price: 65,
      countInStock: 14,
      brand: "Samburu",
      rating: 4.5,
      numReviews: 10,
      description: "high quality  beads products",
    },
    {
      name: "Indegineous Necklaces ",
      category: "Necklaces",
      image: "/images/p6.png",
      price: 139,
      countInStock: 10,
      brand: "Indeginous",
      rating: 4.5,
      numReviews: 15,
      description: "high quality products",
    },
  ],
};
export default data;
