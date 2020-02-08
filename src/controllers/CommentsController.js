import {Post,Comment,User} from '../../dbhelper';
import { commentsSocket, reactionsSocket } from '../..';

class CommentController {

    async getComments(offset, limit = 15){
        const comments = await Comment.findAll({ offset, limit })
        return comments;
    }
    async getCommentById(comment_id){
        const comments = await Comment.findAll({ where:{id:comment_id}})
        return comments;
    }
    async createComment(object,user_id){
        // console.log(object)
        const comment = await Comment.create({ ...object, user_id })
        const comment2 = await Comment.findOne({where:{id:comment.id}, include: [{
            model: User,
            as: 'user'
          }], })
        const commentsCount = await Comment.count({
            where: {
                post_id: comment.post_id
            }
        });  
        commentsSocket.emit("new_comment"+comment.post_id,comment2);
        reactionsSocket.emit(`comments_count_${comment.post_id}`, commentsCount);
        return comment;
    }
    async updateComment(obj,comment_id){
        const comment = await Comment.update(obj,{ where:{id:comment_id} })
        return comment;
    }
    async deleteComment(comment_id){
        const comment = await Comment.destroy({ where:{id:comment_id} })
        
        return comment;
    }
    async createReply(obj,parent_id){
        const comment = await Comment.create({text:obj.text,post_id:obj.post_id,user_id:obj.user_id,parent_id:parent_id})
        return comment;
    }
    async getReply(offset, limit = 15,parent_id){
        const comments = await Comment.findAll({where:{parent_id:parent_id}, offset, limit })
        return comments;
    }
    async deleteReply(comment_id){
        const comment = await Comment.destroy({ where:{id:comment_id} })
        
        return comment;
    }
  

}

export default new CommentController();