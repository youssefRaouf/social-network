import {Message} from '../../dbhelper';
import { chatSocket } from '../..';

class MessageController {

    async getMessages(offset, limit = 15,id){
        console.log("looooooooool")
        const messages = await Message.findAll({where:{room_id:id}, offset, limit, order: [['id', 'DESC']]})
        return messages;
    }
    async getCommentById(comment_id){
        const messages = await Message.findAll({ where:{id:comment_id}})
        return messages;
    }
    async createMessage(object,user_id){
        // console.log(object)
        const message = await Message.create({ ...object,from_user:user_id })
        // const comment2 = await Comment.findOne({where:{id:comment.id}, include: [{
        //     model: User,
        //     as: 'user'
        //   }], })
        // const commentsCount = await Comment.count({
        //     where: {
        //         post_id: comment.post_id
        //     }
        // });  
        chatSocket.emit("new_message"+message.room_id,message);
        // reactionsSocket.emit(`comments_count_${comment.post_id}`, commentsCount);
        return message;
    }
    // async updateComment(obj,comment_id){
    //     const message = await Message.update(obj,{ where:{id:comment_id} })
    //     return message;
    // }
    async deleteMessage(comment_id){
        const message = await Message.destroy({ where:{id:comment_id} })
        
        return message;
    }
  

}

export default new MessageController();