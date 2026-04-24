const sequelize = require('../config/database');
const User = require('./User');
const Category = require('./Category');
const Course = require('./Course');

// Define associations
Category.hasMany(Course, { foreignKey: 'categoryId' });
Course.belongsTo(Category, { foreignKey: 'categoryId' });

// We can also say User has many Courses (as mentor/author)
User.hasMany(Course, { foreignKey: 'authorId' });
Course.belongsTo(User, { foreignKey: 'authorId' });

module.exports = {
  sequelize,
  User,
  Category,
  Course
};
