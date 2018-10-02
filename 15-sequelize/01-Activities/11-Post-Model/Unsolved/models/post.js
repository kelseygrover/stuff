module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    category: DataTypes.STRING
  });
  return Todo;
  // Add code here to create a Post model
  // This model needs a title, a body, and a category
  // Don't forget to 'return' the post after defining
};
