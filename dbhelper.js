import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
	email: String,
	name: String,
	image_url: String,
	phone: String,
})

export const User = mongoose.model(
	'user',
	userSchema	
);

export const Post = mongoose.model('Post', {
	text: String,
	user_id: String,
	user: userSchema,
	url: String,
	created_at: { type: Date, default: new Date() },
	video_name: String,
	isReported:{type: Boolean,default:false},
	commentsCount: {type: Number, default: 0},
	emojisCount: { type: {}, default: {
		like: 0,
		angry: 0,
		love: 0,
		wow: 0,
		laugh: 0,
		sad: 0
	}},
});

export const Message = mongoose.model(
	'messages',
	{
		text: String,
		from_user: Number,
		room_id: String
		// company_id: { type: Sequelize.INTEGER, defaultValue: 1 },
	}
);
export const Room = mongoose.model(
	'room',
	{
		update_at:  { type: Date, default: new Date() },
		user1_id: String,
		user2_id: String,
		user1:userSchema,
		user2:userSchema,
		text: String
	}
);
export const Comment = mongoose.model(
	'comments',
	{
	
		text: String,
		parent_id: String,
		post_id: String,
		user_id: String,
		user: userSchema,
		created_at:  { type: Date, default: new Date() },
	}
);

export const Follower = mongoose.model(
	'followers',
	{
		from_user_id: String,
		to_user_id: String,
		from:userSchema,
		to:userSchema
	}
);

export const Emoji = mongoose.model(
	'emojis',
	{
		type: Number,
		post_id: String,
		user_id: String
		// type: {
		// 	type: Sequelize.INTEGER,
		// 	primaryKey: true,
		// },
		// post_id: {
		// 	type: Sequelize.INTEGER,
		// 	primaryKey: true,
		// },
		// user_id: {
		// 	type: Sequelize.INTEGER,
		// 	primaryKey: true,
		// }
	}
);

// Post.hasMany(Emoji, { foreignKey: 'post_id', sourceKey: 'id' });
// Post.hasMany(Comment, { foreignKey: 'post_id', sourceKey: 'id' });
// // User.hasMany(Follower,{foreignKey:'from_user'});
// // User.hasMany(Follower,{foreignKey:'to_user'});
// // // User.hasMany(Post, {foreignKey: 'user_id', sourceKey: 'id'});
// Follower.belongsTo(User, { foreignKey: 'from_user', as: 'from' })
// Follower.belongsTo(User, { foreignKey: 'to_user', as: 'to' })
// Room.belongsTo(User, { foreignKey: 'user1_id', as: 'user1' })
// Room.belongsTo(User, { foreignKey: 'user2_id', as: 'user2' })
// Post.belongsTo(User, { foreignKey: 'user_id' });
// Comment.belongsTo(User, { foreignKey: 'user_id' });

