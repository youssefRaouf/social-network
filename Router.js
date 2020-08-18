import PostsController from './src/controllers/PostsController';
import UsersController from './src/controllers/UsersController';
import CommentsController from './src/controllers/CommentsController';
import FollowersController from './src/controllers/FollowersController';
import {Emoji} from './dbhelper'; 
import EmojisController from './src/controllers/EmojisController';
import MessagesController from './src/controllers/MessagesController';
import RoomsController from './src/controllers/RoomsController';
import mongoose from 'mongoose';

export default class Router {
	constructor(app) {
		this.app = app;
		this.initializeRoutes();
	}

	async addCurrentUserEmojsToPosts(posts, userId){
		const postIds = posts.map(post => post._id.toString());
		let emojees = await Emoji.find(
			{
				post_id: { $in: postIds},
				user_id: userId
			}
			).exec();
			// console.log(emojees,userId)
		return posts.map(post => {
			const myEmojis = emojees.filter(emojee => mongoose.Types.ObjectId(emojee.post_id).equals(mongoose.Types.ObjectId(post._id)));
			return {
				...post,
				myEmojis
			}
		})
	}

	initializeRoutes() {
		this.app.get('/test', (req,res)=>res.json({"status": "success"}));
		this.app.get('/posts', async (req,res)=>{
			const {offset = 0, limit = 15} = req.query;
			let posts = await PostsController.getPosts(Number(offset), Number(limit))
			posts = await this.addCurrentUserEmojsToPosts(posts, req.userId)
			// console.log(posts)
			console.log(posts)
			res.json(posts)
		})
		this.app.get('/posts/:postId', async (req,res)=>{
			let post = await PostsController.getPostsById(req.params.postId)
			post = (await this.addCurrentUserEmojsToPosts([post], req.userId))[0];
			res.json(post)
		})

		this.app.post('/posts', async (req,res)=>{
			const post = await PostsController.createPost(req.body,req.user)
			res.json(post)
		})
		this.app.put('/posts/:postId', async (req,res)=>{
			let post = await PostsController.updatePost(req.body,req.params.postId)
			// post = (await this.addCurrentUserEmojsToPosts([post], req.userId))[0];
			res.json(post)
		})
		this.app.delete('/posts/:postId', async (req,res)=>{
			const posts = await PostsController.deletePost(req.params.postId)
			res.json(posts)
		})




		this.app.get('/users', async (req,res)=>{
			const {offset = 0, limit = 15} = req.query;
			const posts = await UsersController.getUsers(Number(offset), Number(limit))
			res.json(posts)
		})
		this.app.get('/users/:email', async (req,res)=>{
			// console.log("leh d5l hna")
			const posts = await UsersController.getUserByEmail(req.params.email)
			res.json(posts)
		})
		this.app.get('/users/profile/myProfile', async (req,res)=>{
			// console.log("d5lna gwa el profile")
			const user = await UsersController.getMyProfile(req.userId)
			res.json(user)
		})
		this.app.post('/users', async (req,res)=>{
			const posts = await UsersController.createUser(req.body)
			res.json(posts)
		})
		this.app.post('/checkUsers', async (req,res)=>{
			const users = await UsersController.checkUser(req.body)
			res.json(users)
		})
		this.app.put('/users/:userId', async (req,res)=>{
			const posts = await UsersController.updateUser(req.body,req.params.userId)
			res.json(posts)
		})
		this.app.delete('/users/:userId', async (req,res)=>{
			const posts = await UsersController.deleteUser(req.params.userId)
			res.json(posts)
		})



		this.app.get('/comments', async (req,res)=>{
			const {offset = 0, limit = 15} = req.query;
			const posts = await CommentsController.getComments(Number(offset), Number(limit))
			res.json(posts)
		})
		this.app.get('/comments/:commentId', async (req,res)=>{
			const posts = await CommentsController.getCommentById(req.params.commentId)
			res.json(posts)
		})
		this.app.post('/comments', async (req,res)=>{
			const comments = await CommentsController.createComment(req.body,req.user)
			res.json(comments)
		})
		this.app.put('/comments/:commentId', async (req,res)=>{
			const posts = await CommentsController.updateComment(req.body,req.params.commentId)
			res.json(posts)
		})
		this.app.delete('/comments/:commentId', async (req,res)=>{
			const posts = await CommentsController.deleteComment(req.params.commentId)
			res.json(posts)
		})


		this.app.get('/comments/:id/comments', async (req,res)=>{
			const {offset = 0, limit = 15} = req.query;
			const posts = await CommentsController.getReply(Number(offset), Number(limit),req.params._id)
			res.json(posts)
		})

		this.app.post('/comments/:id/comments', async (req,res)=>{
			const posts = await CommentsController.createReply(req.body,req.params._id)
			res.json(posts)
		})

		this.app.delete('/comments/:id/comments/:commentId', async (req,res)=>{
			const posts = await CommentsController.deleteReply(req.params.commentId)
			res.json(posts)
		})

		this.app.get('/users/:userId/posts', async (req,res)=>{
			const {offset = 0, limit = 15} = req.query;
			let posts = await UsersController.getPostsByUserId(Number(offset), Number(limit),req.params.userId)
			posts = await this.addCurrentUserEmojsToPosts(posts, req.userId)
			res.json(posts)
		})
		
		this.app.get('/users/:userId/postsCount', async (req,res)=>{
			const posts = await UsersController.getPostsCountByUserId(req.params.userId)
			res.json(posts)
		})

		this.app.get('/users/:userId/followToUsers', async (req,res)=>{
			const {offset = 0, limit = 15} = req.query;
			const following = await FollowersController.getFollowTo(Number(offset), Number(limit),req.params.userId)
			res.json(following)
		})
		this.app.post('/users/followToUsers', async (req,res)=>{
			const following = await FollowersController.follow(req.userId,req.body.to_user,req.user)
			res.json(following)
		})
		this.app.delete('/users/:userId/followToUsers', async (req,res)=>{
			const following = await FollowersController.deleteFollow(req.userId,req.params.userId)
			res.json(following)
		})

		this.app.get('/users/:userId/followFromUsers', async (req,res)=>{
			const {offset = 0, limit = 15} = req.query;
			const following = await FollowersController.getFollowFrom(Number(offset), Number(limit),req.params.userId)
			res.json(following)
		})

		this.app.get('/posts/:id/comments', async (req,res)=>{
			const {offset = 0, limit = 15} = req.query;
			const following = await PostsController.getPostComments(Number(offset), Number(limit),req.params.id)
			res.json(following)
		})
		this.app.post('/posts/:id/comments', async (req,res)=>{
			const following = await PostsController.createComment(req.params._id,req.body.user_id,req.body.text,req.body.parent_id)
			res.json(following)
		})
		this.app.delete('/posts/:id/comments/:commentId', async (req,res)=>{
			const following = await PostsController.deleteComment(req.params._id,req.params.commentId)
			res.json(following)
		})

		this.app.post('/emojis', async (req,res)=>{
			const emojis = await EmojisController.createEmoji(req.body,req.userId)
			res.json(emojis)
		})
		this.app.delete('/emojis', async (req,res)=>{
			const emojis = await EmojisController.deleteEmoji(req.body,req.userId)
			res.json(emojis)
		})
		this.app.put('/emojis', async (req,res)=>{
			const emojis = await EmojisController.updateEmoji(req.body,req.userId)
			res.json(emojis)
		})
		this.app.get('/messages/:id', async (req,res)=>{
			const {offset = 0, limit = 15} = req.query;
			const following = await MessagesController.getMessages(Number(offset),Number(limit),req.params.id)
			res.json(following)
		})

		this.app.post('/messages', async (req,res)=>{
			const message = await MessagesController.createMessage(req.body,req.userId)
			res.json(message)
		})
		this.app.delete('/messages', async (req,res)=>{
			const emojis = await EmojisController.deleteEmoji(req.body,req.userId)
			res.json(emojis)
		})
		this.app.get('/rooms/:id', async (req,res)=>{
			const {offset = 0, limit = 15} = req.query;
			
			const following = await RoomsController.getRooms(Number(offset),Number(limit),req.params.id)
			res.json(following)
		})
		this.app.post('/rooms', async (req,res)=>{
			const message = await RoomsController.createRoom(req.body.user2_id,req.body.user1_id)
			res.json(message)
		})
		this.app.post('/search', async (req,res)=>{
			const {offset = 0, limit = 15} = req.query;
			const users = await UsersController.search(Number(offset),Number(limit),req.body)
			res.json(users)
		})

		this.app.get('/reportPosts', async (req,res)=>{
			const message = await PostsController.getReportPosts()
			res.json(message)
		})
		this.app.put('/reportPosts', async (req,res)=>{
			const message = await PostsController.reportPost(req.body.report,req.body.postId)
			res.json(message)
		})

		this.app.post('/admin/login', async (req,res)=>{
			const token = await UsersController.adminLogin(req.body.username,req.body.password)
			res.json({token})
		})
		
            
	}
}
