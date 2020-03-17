const Sequelize = require('sequelize');
const sequelize=new Sequelize('mysql://admin:admin@localhost/socialdb');
// const sequelize = new Sequelize('mysql://WxxM5D2QyF:r0n3QDFWxq@remotemysql.com:3306/WxxM5D2QyF');
export {Sequelize};
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
		url: Sequelize.STRING,
		created_at: Sequelize.TIME,
		video_name: Sequelize.STRING,


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
		email: Sequelize.STRING,
		image_url: Sequelize.STRING,
		phone: Sequelize.INTEGER,

		// level: Sequelize.INTEGER,
		// company_id: { type: Sequelize.INTEGER, defaultValue: 1 },
	},
	{
		timestamps: false,
	}
);
export const Message = sequelize.define(
	'messages',
	{
		text: Sequelize.STRING,
		from_user: Sequelize.INTEGER,
		room_id: Sequelize.INTEGER
		// company_id: { type: Sequelize.INTEGER, defaultValue: 1 },
	},
	{
		timestamps: false,
	}
);
export const Room = sequelize.define(
	'room',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		update_at: Sequelize.TIME,
		user1_id: Sequelize.INTEGER,
		user2_id: Sequelize.INTEGER,
		text: Sequelize.STRING
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
Post.hasMany(Comment, {foreignKey: 'post_id', sourceKey: 'id'});
// User.hasMany(Follower,{foreignKey:'from_user'});
// User.hasMany(Follower,{foreignKey:'to_user'});
// // User.hasMany(Post, {foreignKey: 'user_id', sourceKey: 'id'});
Follower.belongsTo(User,{foreignKey:'from_user', as: 'from'})
Follower.belongsTo(User,{foreignKey:'to_user', as: 'to'})
Room.belongsTo(User,{foreignKey:'user1_id', as: 'user1'})
Room.belongsTo(User,{foreignKey:'user2_id', as: 'user2'})
Post.belongsTo(User,{foreignKey:'user_id'});
Comment.belongsTo(User,{foreignKey:'user_id'});

