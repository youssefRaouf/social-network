import { Room, User ,Sequelize} from '../../dbhelper';
import { chatSocket } from '../..';
class RoomsController {

    async getRooms(offset, limit, id) {
        
        const rooms = await Room.findAll({
           where: {
            [Sequelize.Op.or]: [
                {
                  user1_id: Number(id)
                },
                {
                  user2_id: Number(id)
                }
              ]
            }, 
           offset, 
           limit, 
           order: [['update_at', 'DESC']],
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

    async createRoom(user1_id,user2_id){
        console.log("ll")
        let room = await Room.findAll({where:{user1_id,user2_id}})
        if(room.length===0){
            room = await Room.findAll({where:{ user1_id:user2_id,user2_id:user1_id }})
            if(room.length===0){
            room = await Room.create({ user1_id,user2_id})

            }
            console.log("ll2")
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