import {Post,Comment} from '../../dbhelper';

class PostsController {

    async getPosts(offset, limit = 15){        
        const posts = await Post.findAll({ offset, limit, order: [['id', 'DESC']] })
        return posts.map(post=> post.toJSON());
    }
    
    async getPostsById(id){
        const posts = await Post.findAll({ where:{id:id} })
        return posts.map(post=> post.toJSON());
    }
    async createPost(object){
        const post = await Post.create(object)
        return post;
    }
    async deletePost(post_id){
        const post = await Post.destroy({ where:{id:post_id} })
        return post;
    }
    async updatePost(obj,post_id){
        const post = await Post.update(obj,{ where:{id:post_id} })
        return post;
    }
   
    async getPostComments(offset, limit = 15,post_id){
        const comments = await Comment.findAll({ offset, limit,where:{post_id:post_id} })
        return comments.map(post=> post.toJSON());
        
    }
    async createComment(post_id,user_id,text,parent_id){
        const post = await Comment.create({post_id:post_id,user_id:user_id,text:text,parent_id:parent_id})
        return post;
    }
    async deleteComment(post_id,id){
        const post = await Comment.destroy({ where:{id:id} })
        return post;
    }
}

export default new PostsController();