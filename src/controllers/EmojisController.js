import {Post,Comment,Follower,Emoji} from '../../dbhelper';
import { commentsSocket, reactionsSocket } from '../..';
import PostsController from './PostsController'
import mongoose from 'mongoose';

class EmojisController {

    // async getFollowTo(offset, limit = 15,from_user){
    //     const emojis = await Emoji.findAll({ where:{from_user},offset, limit })
    //     return emojis;
    // }
    async createEmoji(object,user_id){
        const emojis = await Emoji.create({...object, user_id})
        let type=''
        let ar=['like', 'love', 'laugh', 'wow', 'sad', 'angry']
        type=ar[emojis.type-1]
        console.log(type);
        const post = await Post.findOneAndUpdate({_id:mongoose.Types.ObjectId(emojis.post_id)},{$inc : { [type]:1 }}).exec()
        console.log(post,emojis)
        reactionsSocket.emit(`emojis_count_${emojis.post_id}`,post);

        return emojis;
    }
    async deleteEmoji(object,user_id){
        const emojis = await Emoji.deleteOne({post_id:object.post_id,user_id:user_id}).exec()
        // const emojisCount = await Emoji.count({
        //     where: {
        //         post_id: object.post_id
        //     }
        // });
        const post =await PostsController.getPostsById(object.post_id)
        // console.log("youssef",object);
        reactionsSocket.emit(`emojis_count_${object.post_id}`,post);

        return emojis;
    }
    async updateEmoji(obj,userId){
        // console.log(obj,userId)
        const emoji = await Emoji.update({user_id:userId,post_id:obj.post_id},{type:obj.type} ).exec()
        const post =await PostsController.getPostsById(obj.post_id)
        // console.log("youssef",object);
        reactionsSocket.emit(`emojis_count_${obj.post_id}`,post);
        // console.log("sd",emoji)
        return emoji;
    }
}

export default new EmojisController();