const User = require('./User');
const Post = require('./Post');

//Create associations
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Post.hasOne(User, {
    foreignKey: 'user_id',
});

User.belongsToMany(Post, {
    foreignKey: 'id',
});

User.hasMany(Post, {
    foreignKey: 'id',
    onDelete: 'CASCADE',
});

module.exports = { User, Post };