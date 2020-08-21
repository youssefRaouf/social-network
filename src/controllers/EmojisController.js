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
        const post = await Post.updateOne({_id:mongoose.Types.ObjectId(emojis.post_id)},{$inc : { [type]:1 }}).exec()
        const post2= await Post.find({_id:mongoose.Types.ObjectId(emojis.post_id)})
        // reactionsSocket.emit(`emojis_count_${emojis.post_id}`,post2);

        return [emojis,post2];
    }
    async deleteEmoji(object,user_id){
        const emojis = await Emoji.deleteOne({post_id:object.post_id,user_id:user_id}).exec()
        let type = object.type.toLowerCase();
       if(type==="haha"){
           type="laugh"
       }
        const post = await Post.updateOne({_id:mongoose.Types.ObjectId(object.post_id)},{$inc : { [type]:-1 }}).exec()
        const post2 =await PostsController.getPostsById(object.post_id)
        // reactionsSocket.emit(`emojis_count_${object.post_id}`,post2);

        return [emojis,[post2]];
    }
    async updateEmoji(obj,userId){
        let type=''
        let prevType = obj.prevType;
        let ar=["like", "love", "laugh", "wow", "sad", "angry"]
        type=ar[obj.type-1]
        if(prevType==="haha"){
            prevType="laugh"
        }
        const emoji = await Emoji.updateOne({user_id:userId,post_id:obj.post_id},{type:obj.type}).exec()
        const post = await Post.updateOne({_id:mongoose.Types.ObjectId(obj.post_id)},{$inc : { [type]:1,[prevType]:-1 }}).exec()
        const post2 =await PostsController.getPostsById(obj.post_id)
        // reactionsSocket.emit(`emojis_count_${obj.post_id}`,post2);
        // console.log("sd",emoji)
        return [emoji,[post2]];
    }
}

export default new EmojisController();