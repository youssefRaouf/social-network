import {Post,User} from '../../dbhelper';

class UserController {

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
        const posts = await Post.findAll({ where:{user_id:user_id}, offset, limit, order: [['id', 'DESC']] } )
        return posts.map(post=> post.toJSON());
    }

}

export default new UserController();