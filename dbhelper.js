const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://admin:admin@localhost/socialdb');

export const Post = sequelize.define(
	'posts',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		text: Sequelize.STRING,
		user_id: Sequelize.INTEGER,
		// level: Sequelize.INTEGER,
		// company_id: { type: Sequelize.INTEGER, defaultValue: 1 },
	},
	{
		timestamps: false,
	}
);


export const User = sequelize.define(
	'users',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: Sequelize.STRING,
		image_url: Sequelize.STRING,
		// level: Sequelize.INTEGER,
		// company_id: { type: Sequelize.INTEGER, defaultValue: 1 },
	},
	{
		timestamps: false,
	}
);
export const Comment = sequelize.define(
	'comments',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		text: Sequelize.STRING,
		parent_id: Sequelize.INTEGER,
		post_id: Sequelize.INTEGER,
		user_id: Sequelize.INTEGER,
		created_at: Sequelize.TIME,
		// level: Sequelize.INTEGER,
		// company_id: { type: Sequelize.INTEGER, defaultValue: 1 },
	},
	{
		timestamps: false,
	}
);

export const Follower = sequelize.define(
	'followers',
	{
		from_user: Sequelize.INTEGER,
		to_user: Sequelize.INTEGER,
	},
	{
		timestamps: false,
	}
);

export const Emoji = sequelize.define(
	'emojis',
	{
		type: {
			type: Sequelize.INTEGER,
			primaryKey: true,
		},
		post_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
		},
		user_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
		},
		// level: Sequelize.INTEGER,
		// company_id: { type: Sequelize.INTEGER, defaultValue: 1 },
	},
	{
		timestamps: false,
	}
);

Post.hasMany(Emoji, {foreignKey: 'post_id', sourceKey: 'id'});
