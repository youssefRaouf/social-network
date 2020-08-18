import { Message, Room } from '../../dbhelper';
import { chatSocket, roomSocket } from '../..';
import mongoose from 'mongoose';

class MessageController {

    async getMessages(offset, limit = 15, id) {
        const messages = await Message.find({ room_id: id }).sort({ _id: -1 }).skip(offset).limit(limit).exec()
        return messages;
    }
    async getCommentById(comment_id) {
        const messages = await Message.find({ _id: mongoose.Types.ObjectId(comment_id) }).exec()
        return messages;
    }
    async createMessage(object, user_id) {
        // console.log(object)
        const message = await Message.create({ ...object, from_user: user_id })
        console.log("el text",object.room_id,message)
        await Room.update({ _id: mongoose.Types.ObjectId(object.room_id) }, { text: object.text,update_at:Date.now() }).exec()
        chatSocket.emit("new_message" + message.room_id, message);
        roomSocket.emit("new_message" + message.room_id, message);
        return message;
    }
    async deleteMessage(comment_id) {
        const message = await Message.deleteOne({ id: mongoose.Types.ObjectId(comment_id) }).exec()

        return message;
    }


}

export default new MessageController();