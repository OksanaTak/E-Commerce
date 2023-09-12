// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category, {
  foreignKey: 'category_id',

});

// Categories have many Products
Category.hasMany(Products, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tags, {
  foreignKey: 'product_id',
  through:'productTag',
});
// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Products, {
  foreignKey: 'tag_id',
  through:'productTag',
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
