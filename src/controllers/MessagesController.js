import {Message, Room} from '../../dbhelper';
import { chatSocket ,roomSocket} from '../..';

class MessageController {

    async getMessages(offset, limit = 15,id){
        console.log("looooooooool")
        const messages = await Message.find({room_id:id}).sort({_id:-1}).skip(offset).limit(limit).exec()
        return messages;
    }
    async getCommentById(comment_id){
        const messages = await Message.find( {_id:mongoose.Types.ObjectId(comment_id)}).exec()
        return messages;
    }
    async createMessage(object,user_id){
        // console.log(object)
        const message = await Message.create({ ...object,from_user:user_id })
               await Room.update({id:object.room_id},{text:object.text}).exec()
        // const comment2 = await Comment.findOne({where:{id:comment._id}, include: [{
        //     model: User,
        //     as: 'user'
        //   }], })
        // const commentsCount = await Comment.count({
        //     where: {
        //         post_id: comment.post_id
        //     }
        // });  
        chatSocket.emit("new_message"+message.room_id,message);
        roomSocket.emit("new_message"+object.to_user,message);
        // reactionsSocket.emit(`comments_count_${comment.post_id}`, commentsCount);
        return message;
    }
    // async updateComment(obj,comment_id){
    //     const message = await Message.update(obj,{ where:{id:comment_id} })
    //     return message;
    // }
    async deleteMessage(comment_id){
        const message = await Message.deleteOne({id:mongoose.Types.ObjectId(comment_id)}).exec()
        
        return message;
    }
  

}

export default new MessageController();