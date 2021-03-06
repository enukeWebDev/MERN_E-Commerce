import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Erick Nuque',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },

    {
      name: 'John Doe',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      // _id: '1',
      name: 'Personal Private Journal',
      slug: 'personal-private-journal',
      category: 'Personal',
      image: '/images/p5.jpg',
      price: 80,
      countInStock: 10,
      brand: 'YPA',
      rating: 4.5,
      numReviews: 10,
      description: 'Made with LOVE!',
    },

    {
      // _id: '2',
      name: 'Fruit Theme Journal',
      slug: 'fruit-theme-journal',
      category: 'Fruit Theme',
      image: '/images/p6.jpg',
      price: 100,
      countInStock: 10,
      brand: 'YPA',
      rating: 4.0,
      numReviews: 10,
      description: 'Made with LOVE!',
    },

    {
      // _id: '3',
      name: 'Flower Theme Journal',
      slug: 'flower-theme-journal',
      category: 'Flower Theme',
      image: '/images/p7.jpg',
      price: 90,
      countInStock: 15,
      brand: 'YPA',
      rating: 4.5,
      numReviews: 14,
      description: 'Made with LOVE!',
    },

    {
      // _id: '4',
      name: 'Passport Type Journal',
      slug: 'passport-type-journal',
      category: 'Passport',
      image: '/images/p8.jpg',
      price: 60,
      countInStock: 0,
      brand: 'YPA',
      rating: 4.5,
      numReviews: 10,
      description: 'Made with LOVE!',
    },
  ],
};

export default data;
