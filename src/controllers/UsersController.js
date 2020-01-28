import {Post,User,Emoji,Comment} from '../../dbhelper';

class UserController {

    emojisMapper(post){
        const emojis = {};
        const comments= post.comments.length;
        post.emojis.forEach(emoji =>{
            if(!emojis[emoji.type]){
                emojis[emoji.type] = 1;
            }else{
                emojis[emoji.type] = emojis[emoji.type] + 1;
            }

        })
        return {
            ...post,
            emojis,
            comments
        }
    }

    async getUsers(offset, limit = 15){
        const users = await User.findAll({ offset, limit })
        return users.map(post=> post.toJSON());
        
    }
    async getUsersByUserId(user_id){
        const users = await User.findAll({ where:{id:user_id}})
        return users.map(post=> post.toJSON());
       
    }
    async createUser(obj){
        const user = await User.create(obj)
        return user;
    }
    async updateUser(obj,user_id){
        const user = await User.update(obj,{ where:{id:user_id} })
        return user;
    }
    async deleteUser(user_id){
        const user = await User.destroy({ where:{id:user_id} })
        
        return user;
    }
  
    async getPostsByUserId(offset, limit = 15,user_id){
        const posts = await Post.findAll({ where:{user_id:user_id}, offset, limit, order: [['id', 'DESC']], include: [{
            model: Emoji,
            as: 'emojis'
          },
          {
            model: Comment,
            as:'comments'
        },
    //     {
    //         model: User,
    //         as:'user',
    // }
        ] } )
        return posts.map(post=> post.toJSON()).map(this.emojisMapper);
        
        // return posts.map(post=> post.toJSON());
    }

}

export default new UserController();