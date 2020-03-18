import { Post, User, Emoji, Comment,Sequelize } from '../../dbhelper';
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
        const users = await User.findAll({ offset, limit })
        return users.map(post => post.toJSON());

    }
    async getUsersByUserId(user_id) {
        const users = await User.findAll({ where: { id: user_id } })
        return users.map(post => post.toJSON());

    }
    async getUserByEmail(email) {
        const users = await User.findOne({ where: { email: email } })
        let token = jwt.sign({ user: users }, 'secret')
        return token

    }
    async search(offset,limit=15,body) {
        const users = await User.findAll({ where: { name: {[Sequelize.Op.like]: '%'+body.name+'%'} } ,offset,limit})
        
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
    async checkUser(obj) {
        console.log("sssdg")
        const user = await User.findOne({ where: { email: obj.email } })
        if (user === null) {
            return [null, null]
        }
        let token = jwt.sign({ user: user }, 'secret')
        return [user, token];
    }
    async updateUser(obj, user_id) {
        const user = await User.update(obj, { where: { id: user_id } })
        return user;
    }
    async deleteUser(user_id) {
        const user = await User.destroy({ where: { id: user_id } })

        return user;
    }

    async getPostsByUserId(offset, limit = 15, user_id) {
       console.log("d5l gwa 3mo el userposts")
        const posts = await Post.findAll({
            where: { user_id: user_id },
            offset, limit, order: [['id', 'DESC']], include: [{
                model: Emoji,
                as: 'emojis'
            },
            {
                model: Comment,
                as: 'comments'

            },
            {
                model: User,
                as: 'user',
            }
            ]
        })
        return posts.map(post => post.toJSON()).map(this.emojisMapper);
    }

}

export default new UserController();