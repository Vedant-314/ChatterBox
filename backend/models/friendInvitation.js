const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const friendInvitaionSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("FriendInvitation", friendInvitaionSchema)