import {Post,Comment,Follower} from '../../dbhelper';

class FollowersController {

    async getFollowTo(offset, limit = 15,from_user){
        const followers = await Follower.findAll({ where:{from_user},offset, limit })
        return followers;
    }
    
    async getFollowFrom(offset, limit = 15,to_user){
        const followers = await Follower.findAll({ where:{to_user},offset, limit })
        return followers;
    }
    async follow(from_user,to_user){
        const followers = await Follower.create({from_user:from_user,to_user:to_user})
        return followers;
    }
    async deleteFollow(from_user,to_user){
        const followers = await Follower.destroy({where:{from_user,to_user}})
        return followers;
    }
}

export default new FollowersController();