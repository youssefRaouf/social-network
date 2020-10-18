import { Post, Comment, Emoji, User } from '../../dbhelper';
import { posts } from '../../index'
import mongoose from 'mongoose';
import FollowersController from './FollowersController';

class PostsController {

    // emojisMapper(post) {
    //     // const comments = post.comments.length;
    //     const emojis = [];
    //     const emojisCount = post.emojis.length;
    //     post.emojis.forEach(emoji => {
    //         if (!emojis[emoji.type]) {
    //             emojis[emoji.type] = 1;
    //         } else {
    //             emojis[emoji.type] = emojis[emoji.type] + 1;
    //         }

    //     })
    //     // comments=post.comments.length();
    //     return {
    //         ...post,
    //         emojis,
    //         comments: post.commentsCount,
    //         emojisCount
    //     }
    // }

    async getPosts(offset, limit = 15,userId) {
         const followings= await FollowersController.getMyUserFollowings(userId);
         const followingsIds= followings.map(following=>following.to._id.toString());
         followingsIds.push(userId);
         const posts = await Post.find(
			{
				user_id: { $in: followingsIds },
			}
		).sort({_id: -1}).skip(offset).limit(limit).exec();
        return posts.map(post=>post.toJSON());
    }


     async getPostsById(id) {
        const posts = await Post.findById(mongoose.Types.ObjectId(id)).exec();
        return posts;
    }

    async createPost(object, user) {
        const otherUpdates = {}
        // add video url
        if(object.video_name){
            otherUpdates.url = `${process.env.VIDEO_STREAMING_URL}${object.video_name}`
        }
        const post = await Post.create({ ...object, user_id: user._id, user, ...otherUpdates })
        // const post2 = await this.getPostsById(post._id)
        posts.emit("new_post", post);
        return post;
    }

    async reportPost(report, postId) {
        const post = await Post.updateOne({ _id: mongoose.Types.ObjectId(postId)}, {isReported:report}).exec();
        return post;
    }

    async getReportPosts() {
        const posts = await Post.find({isReported:true}).sort({_id: -1}).exec();
        return posts.map(post=>post.toJSON());
    }

    async deletePost(post_id) {
        const post = await Post.deleteOne({ _id: mongoose.Types.ObjectId(post_id)}).exec()
        return post;
    }
    async updatePost(obj, post_id) {
        const post = await Post.update({ _id: mongoose.Types.ObjectId(post_id) }, obj).exec()
        return post;
    }

    async getPostComments(offset, limit = 15, post_id) {
        const comments = await Comment.find({ post_id}).sort({_id: -1}).skip(offset).limit(limit).exec()
       console.log("get comments",comments,post_id)
        return comments;
    }
    
    async createComment(post_id, user, text, parent_id) {
        const post = await Comment.create({ post_id: post_id, user_id: user._id, user, text: text, parent_id: parent_id })
        return post;
    }
    async deleteComment(post_id, id) {
        const post = await Comment.deleteOne({ _id: mongoose.Types.ObjectId(id)}).exec()
        return post;
    }
}
export default new PostsController();