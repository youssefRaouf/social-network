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
    async createComment(obj){
        const Comment = await Comment.create(obj)
        return Comment;
    }
    async updateComment(obj,comment_id){
        const Comment = await Comment.update(obj,{ where:{id:comment_id} })
        return Comment;
    }
    async deleteComment(comment_id){
        const Comment = await Comment.destroy({ where:{id:comment_id} })
        
        return Comment;
    }
  

}

export default new CommentController();