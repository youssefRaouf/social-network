import {Post,Comment} from '../../dbhelper';

class CommentController {

    async getComments(offset, limit = 15){
        const comments = await Comment.findAll({ offset, limit })
        return comments;
    }
    async getCommentById(comment_id){
        const comments = await Comment.findAll({ where:{id:comment_id}})
        return comments;
    }
    async createComment(object){
        console.log(object)
        const comment = await Comment.create(object)
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