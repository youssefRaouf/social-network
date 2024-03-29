import { Room, User ,Sequelize} from '../../dbhelper';
import { chatSocket } from '../..';
import UsersController from './UsersController';
import mongoose from 'mongoose';

class RoomsController {

    async getRooms(offset, limit, id) {
      console.log("room id",id)
        const rooms = await Room.find(
            {$or:[{user1_id:id},{user2_id:id}]}
            // [Sequelize.Op.or]: [
            //     {
            //       user1_id: Number(id)
            //     },
            //     {
            //       user2_id: Number(id)
            //     }
            //   ]
            // }
        ).sort({update_at:-1}).skip(offset).limit(limit).exec()
        console.log("el rooms",id)
        return rooms;
    }

    async createRoom(user1_id,user2_id){
        console.log("ll")
        let room = await Room.find({user1_id,user2_id}).exec()
        if(room.length===0){
            room = await Room.find({ user1_id:user2_id,user2_id:user1_id }).exec()
            if(room.length===0){
         const user1 = await UsersController.getUsersByUserId(user1_id)
         const user2 = await UsersController.getUsersByUserId(user2_id)

            room = await Room.create({ user1_id,user2_id,user1:user1[0],user2:user2[0]});
             return room ;
            }
            console.log("ll2",room)
        }
        return room[0];
    }
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
