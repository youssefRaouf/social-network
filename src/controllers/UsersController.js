import {Post,User,Emoji,Comment} from '../../dbhelper';
import { UUID } from 'sequelize';

import {jwt} from '../../index'
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
    async getUserByEmail(email){
        const users = await User.findOne({ where:{email:email} })
        let token= jwt.sign({user:users},'secret')
        return token
        
    }
    async getMyProfile(id){
        console.log(id)
        const user = await User.findOne({ where:{id:id} })
        console.log(user);
        return user
        
    }
    async createUser(obj){
        // const token = new UUID();
             
        const user = await User.create({...obj})
        let token= jwt.sign({user:user},'secret')
        console.log(token)
        return token;
    }
    async checkUser(obj){
        console.log("sssdg")
        const user = await User.findOne({where:{email:obj.email}})
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