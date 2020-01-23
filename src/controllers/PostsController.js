import {Post} from '../../dbhelper';

class PostsController {

    async getPosts(offset, limit = 15){
        const posts = await Post.findAll({ offset, limit, order: [['id', 'DESC']] })
        return posts;
    }
    
    async getPostsById(id){
        const posts = await Post.findAll({ where:{id:id} })
        return posts;
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
    async getPostsByUserId(offset, limit = 15,user_id){
        const posts = await Post.findAll({ where:{user_id:user_id}, offset, limit, order: [['id', 'DESC']] } )
        return posts;
    }
   
}

export default new PostsController();