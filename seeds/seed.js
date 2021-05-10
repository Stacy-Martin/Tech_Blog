const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const posts = require('./posts.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // this is another way to do a for each, for all the posts, iterate over each post in posts
  // ... are a spread operator, take everything within the post object and performing the following methods 
  for (const post of posts) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
