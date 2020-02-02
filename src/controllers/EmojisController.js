import {Post,Comment,Follower,Emoji} from '../../dbhelper';

class EmojisController {

    // async getFollowTo(offset, limit = 15,from_user){
    //     const emojis = await Emoji.findAll({ where:{from_user},offset, limit })
    //     return emojis;
    // }
    async createEmoji(object,user_id){
        const emojis = await Emoji.create({...object, user_id})
        return emojis;
    }
    async deleteEmoji(object){
        const emojis = await Emoji.destroy({where:object})
        return emojis;
    }
}

export default new EmojisController();