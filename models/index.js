const User = require('./user');
const Stroke = require('./stroke');

User.hasMany(Stroke, {
    foreignkey: "user_id"
});

Stroke.belongsTo(User, {
    foreignkey: 'user_id'
});

module.exports = { User, Stroke };