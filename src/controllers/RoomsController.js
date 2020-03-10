import { Room, User } from '../../dbhelper';
import { chatSocket } from '../..';

class RoomsController {

    async getRooms(offset, limit, id) {
        console.log("looooooooool")
        const rooms = await Room.findAll({
            $or: [{ user1_id: id }, { user2_id: id }], offset, limit, order: [['id', 'DESC']]
            ,
            include: [{
                model: User,
                as: 'user1',
            },
        { 
            model: User,
            as : 'user2',
        }],
        })
        return rooms;
    }

    // async createMessage(object,user_id){
    //     // console.log(object)
    //     const message = await Message.create({ ...object,from_user:user_id })
    //     // const comment2 = await Comment.findOne({where:{id:comment.id}, include: [{
    //     //     model: User,
    //     //     as: 'user'
    //     //   }], })
    //     // const commentsCount = await Comment.count({
    //     //     where: {
    //     //         post_id: comment.post_id
    //     //     }
    //     // });  
    //     chatSocket.emit("new_message"+message.to_user+message.from_user,message);
    //     // reactionsSocket.emit(`comments_count_${comment.post_id}`, commentsCount);
    //     return message;
    // }
    // async updateComment(obj,comment_id){
    //     const message = await Message.update(obj,{ where:{id:comment_id} })
    //     return message;
    // }
    // async deleteMessage(comment_id){
    //     const message = await Message.destroy({ where:{id:comment_id} })

    //     return message;
    // }


}

export default new RoomsController();