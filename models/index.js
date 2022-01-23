// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: "CASCADE"
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: "CASCADE"
});

// Products belongToMany Tags (through ProductTag)
Tag.belongsToMany(Product, {through: 'product_tag', onDelete: "CASCADE"});

// Tags belongToMany Products (through ProductTag)
Product.belongsToMany(Tag, {through: 'product_tag', onDelete: "CASCADE"});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
