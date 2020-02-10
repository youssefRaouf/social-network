import PostsController from './src/controllers/PostsController';
import UsersController from './src/controllers/UsersController';
import CommentsController from './src/controllers/CommentsController';
import FollowersController from './src/controllers/FollowersController';
import {Emoji} from './dbhelper'; 
import EmojisController from './src/controllers/EmojisController';
export default class Router {
	constructor(app) {
		this.app = app;
		this.initializeRoutes();
	}

	async addCurrentUserEmojsToPosts(posts, userId){
		const postIds = posts.map(post => post.id);
		console.log(postIds)
		let emojees = await Emoji.findAll(
			{
				where: {
					post_id:postIds,
					user_id: userId
				}
			}
		)
		emojees = emojees.map(emo => emo.toJSON())

		// let emojis = await Emoji.findAll(
		// 	{where: {
		// 		post_id:postIds,
		// 	}
		// 	}
		// )
		// emojis = emojis.map(emo => emo.toJSON())
        // let emojisCount=[0,0,0,0]
        //   for(const i=0;i<emojis.length;i++){
		// 	  emojisCount[emojis[i]-1]++;
		//   }
		posts = posts.map(post => {
			const myEmojis = emojees.filter(emojee => emojee.post_id === post.id);
			// let emojisCount=[0,0,0,0]
			// const Emojis = emojis.filter(emojee => emojee.post_id === post.id);

			return {
				...post,
				myEmojis,
				// Emojis
			}
		})
		// console.log(posts)
		// console.log(userId)
		return posts;
	}

	initializeRoutes() {
		this.app.get('/posts', async (req,res)=>{
			const {offset = 0, limit = 15} = req.query;
			let posts = await PostsController.getPosts(Number(offset), Number(limit))
			posts = await this.addCurrentUserEmojsToPosts(posts, req.userId)
			res.json(posts)
		})
		this.app.get('/posts/:postId', async (req,res)=>{
			let post = await PostsController.getPostsById(req.params.postId)
			post = (await this.addCurrentUserEmojsToPosts([post], req.userId))[0];
			res.json(post)
		})

		this.app.post('/posts', async (req,res)=>{
			const post = await PostsController.createPost(req.body,req.userId)
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
		this.app.get('/users/:userId', async (req,res)=>{
			const posts = await UsersController.getUsersByUserId(req.params.userId)
			res.json(posts)
		})
		this.app.post('/users', async (req,res)=>{
			const posts = await UsersController.createUser(req.body)
			res.json(posts)
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
			const comments = await CommentsController.createComment(req.body,req.userId)
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
			const posts = await CommentsController.getReply(Number(offset), Number(limit),req.params.id)
			res.json(posts)
		})

		this.app.post('/comments/:id/comments', async (req,res)=>{
			const posts = await CommentsController.createReply(req.body,req.params.id)
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

		this.app.get('/users/:userId/followedToUsers', async (req,res)=>{
			const {offset = 0, limit = 15} = req.query;
			const following = await FollowersController.getFollowTo(Number(offset), Number(limit),req.params.userId)
			res.json(following)
		})
		this.app.post('/users/:userId/followedToUsers', async (req,res)=>{
			const following = await FollowersController.follow(req.params.userId,req.body.to_user)
			res.json(following)
		})
		this.app.delete('/users/:userId/followedToUsers/:followedTo', async (req,res)=>{
			const following = await FollowersController.deleteFollow(req.params.userId,req.params.followedTo)
			res.json(following)
		})

		this.app.get('/users/:userId/followedfromUsers', async (req,res)=>{
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
			const following = await PostsController.createComment(req.params.id,req.body.user_id,req.body.text,req.body.parent_id)
			res.json(following)
		})
		this.app.delete('/posts/:id/comments/:commentId', async (req,res)=>{
			const following = await PostsController.deleteComment(req.params.Id,req.params.commentId)
			res.json(following)
		})

		this.app.post('/emojis', async (req,res)=>{
			const emojis = await EmojisController.createEmoji(req.body,req.userId)
			res.json(emojis)
		})
		this.app.delete('/emojis', async (req,res)=>{
			const emojis = await EmojisController.deleteEmoji(req.body)
			res.json(emojis)
		})
		this.app.put('/emojis', async (req,res)=>{
			const emojis = await EmojisController.updateEmoji(req.body,req.userId)
			res.json(emojis)
		})
	}
}
