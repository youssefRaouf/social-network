import {Post,Comment, Emoji, User} from '../../dbhelper';

class PostsController {

    emojisMapper(post){
        const comments= post.comments.length;
        const emojis = [];
        post.emojis.forEach(emoji =>{
            if(!emojis[emoji.type]){
                emojis[emoji.type] = 1;
            }else{
                emojis[emoji.type] = emojis[emoji.type] + 1;
            }

        })
        // comments=post.comments.length();
        return {
            ...post,
            emojis,
            comments
        }
    }

    async getPosts(offset, limit = 15){        
        const posts = await Post.findAll({ offset, limit, order: [['id', 'DESC']], include: [{
              model: Emoji,
              as: 'emojis'
            },
            {
                model: Comment,
                as:'comments'

            },
            {
                model: User,
                as:'user',
        }
        ]
          })
        return posts.map(post=> post.toJSON()).map(this.emojisMapper);
    }
    

    async getPostsById(id){
        const posts = await Post.findOne({ where:{id:id}, include: [{
            model: Emoji,
            as: 'emojis'
          },
          {
            model: Comment,
            as:'comments'
        },
        {
            model: User,
            as:'user',
    }
        ] })
          return this.emojisMapper(posts.toJSON());
    }
    async createPost(object,user_id){
        const post = await Post.create({ ...object, user_id })
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