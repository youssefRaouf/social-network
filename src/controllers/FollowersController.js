import { Post, Comment, Follower,User } from '../../dbhelper';
import UsersController from './UsersController';
import mongoose from 'mongoose';

class FollowersController {

    async getFollowTo(offset, limit = 15, from_user_id) {
        if(from_user_id==null){
            const followers = await Follower.find( { from_user:req.userId }).skip(offset).limit(limit).exec()
            return followers;
        }
        const followers = await Follower.find( { from_user_id}).skip(offset).limit(limit).exec();
        console.log("get el nas el 3mlaly follow",followers)
        return followers;
    }
    async getMyUserFollowings(from_user_id) {
        const followers = await Follower.find(
          { from_user_id }
        ).exec()
        return followers;
    }

    async getFollowFrom(offset, limit = 15, to_user_id) {
        const followers = await Follower.find({to_user_id }).skip(offset).limit(limit).exec()
        console.log("get follower",followers)
        return followers;
    }
    async follow(from_user_id, to_user_id,from_user) {
         const to_user = await UsersController.getUsersByUserId(to_user_id)
         console.log("el to_user",from_user_id,to_user_id,from_user,to_user)
        const followers = await Follower.create({ from_user_id,to_user_id,from: from_user, to: to_user[0] })
        console.log("creatna",followers)
        return followers;
    }
    async deleteFollow(from_user_id, to_user_id) {
        const followers = await Follower.deleteOne( { from_user_id, to_user_id } ).exec()
        return followers;
    }
}

export default new FollowersController();