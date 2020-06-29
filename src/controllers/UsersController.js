import { Post, User, Emoji, Comment, Sequelize } from '../../dbhelper';
import { UUID } from 'sequelize';

import { jwt } from '../../index'
class UserController {

    emojisMapper(post) {
        const comments = post.comments.length;
        const emojis = [];
        const emojisCount = post.emojis.length;
        post.emojis.forEach(emoji => {
            if (!emojis[emoji.type]) {
                emojis[emoji.type] = 1;
            } else {
                emojis[emoji.type] = emojis[emoji.type] + 1;
            }

        })
        // comments=post.comments.length();
        return {
            ...post,
            emojis,
            comments,
            emojisCount

        }
    }
    async getUsers(offset, limit = 15) {
        const users = await User.find({}).skip(offset).limit(limit).exec();
        return users.map(post => post.toJSON());

    }
    async getUsersByUserId(user_id) {
        const users = await User.find({ _id: mongoose.Types.ObjectId(user_id) }).exec()
        return users.map(post => post.toJSON());

    }
    async getUserByEmail(email) {
        const users = await User.findOne({ email: email }).exec()
        let token = jwt.sign({ user: users }, 'secret')
        return token

    }
    async search(offset, limit = 15, body) {
        console.log(body.name)
        const users = await User.find({name: {$regex: '.*' + body.name + '.*', $options: 'i' }}).skip(offset).limit(limit).exec()
        return users
    }
    // async getMyProfile(id){
    //     console.log(id)
    //     const user = await User.findOne({ where:{id:id} })
    //     console.log(user);
    //     return user

    // }
    async createUser(obj) {
        const user = await User.create({ ...obj })
        let token = jwt.sign({ user: user }, 'secret')
        console.log(token)
        return [user, token];
    }

    async adminLogin(username, password) {
        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
            let token = jwt.sign({ user: { admin: true } }, 'secret')
            return token;
        }
        return null;
    }

    async checkUser(obj) {
        console.log("sssdg")
        const user = await User.findOne({ email: obj.email }).exec()
        if (user === null) {
            return [null, null]
        }
        let token = jwt.sign({ user: user }, 'secret')
        return [user, token];
    }
    async updateUser(obj, user_id) {
        const user = await User.update({ _id: mongoose.Types.ObjectId(user_id) }, obj,).exec()
        return user;
    }
    async deleteUser(user_id) {
        const user = await User.deleteOne({ _id: mongoose.Types.ObjectId(user_id) }).exec()

        return user;
    }

    async getPostsByUserId(offset, limit = 15, user_id) {
        console.log("d5l gwa 3mo el userposts")
        const posts = await Post.find({ user_id: user_id }).sort({_id:-1}).skip(offset).limit(limit).exec()
        return posts.map(post=>post.toJSON());
    }

}

export default new UserController();