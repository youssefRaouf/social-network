import {Post,User} from '../../dbhelper';

class UserController {

    async getUsers(offset, limit = 15){
        const users = await User.findAll({ offset, limit })
        return users;
    }
    async getUsersByUserId(user_id){
        const users = await User.findAll({ where:{id:user_id}})
        return users;
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
  

}

export default new UserController();