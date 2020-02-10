import {Post,Comment,Follower,Emoji} from '../../dbhelper';
import { commentsSocket, reactionsSocket } from '../..';

class EmojisController {

    // async getFollowTo(offset, limit = 15,from_user){
    //     const emojis = await Emoji.findAll({ where:{from_user},offset, limit })
    //     return emojis;
    // }
    async createEmoji(object,user_id){
        const emojis = await Emoji.create({...object, user_id})
        const emojisCount = await Emoji.count({
            where: {
                post_id: emojis.post_id
            }
        });  
        reactionsSocket.emit(`emojis_count_${emojis.post_id}`,emojisCount);

        return emojis;
    }
    async deleteEmoji(object){
        const emojis = await Emoji.destroy({where:object})
        const emojisCount = await Emoji.count({
            where: {
                post_id: object.post_id
            }
        });
        // console.log("youssef",object);
        reactionsSocket.emit(`emojis_count_${object.post_id}`,emojisCount);

        return emojis;
    }
    async updateEmoji(obj,userId){
        console.log(obj,userId)
        const emoji = await Emoji.update({type:obj.type},{where:{user_id:userId,post_id:obj.post_id} })
        console.log("sd",emoji)
        return emoji;
    }
}

export default new EmojisController();