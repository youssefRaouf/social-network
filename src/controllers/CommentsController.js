import {Post,Comment,User} from '../../dbhelper';
import { commentsSocket, reactionsSocket } from '../..';
import mongoose from 'mongoose';

class CommentController {

    async getComments(offset, limit = 15){
        const comments = await Comment.find().skip(offset).limit(limit).exec()
        return comments;
    }
    async getCommentById(comment_id){
        const comments = await Comment.find({ _id:comment_id}).exec()
        return comments;
    }
    async createComment(object,user){
        // console.log(object)
        const comment = await Comment.create({ ...object, user_id:user._id,user })
       
        const commentsCount = await Comment.count({
                post_id: comment.post_id
            }
        );  
        commentsSocket.emit("new_comment"+comment.post_id,comment);
        reactionsSocket.emit(`comments_count_${comment.post_id}`, commentsCount);
        return comment;
    }
    async updateComment(obj,comment_id){
        const comment = await Comment.update({_id:mongoose.Types.ObjectId(comment_id)},obj ).exec()
        return comment;
    }
    async deleteComment(comment_id){
        const comment = await Comment.deleteOne({_id:mongoose.Types.ObjectId(comment_id) }).exec()
        
        return comment;
    }
    async createReply(obj,parent_id){
        const comment = await Comment.create({text:obj.text,post_id:obj.post_id,user_id:obj.user_id,parent_id:parent_id})
        return comment;
    }
    async getReply(offset, limit = 15,parent_id){
        const comments = await Comment.find({parent_id:parent_id}).skip(offset).limit(limit).exec()
        return comments;
    }
    async deleteReply(comment_id){
        const comment = await Comment.deleteOne({_id:comment_id}).exec()
        
        return comment;
    }
  

}

export default new CommentController();