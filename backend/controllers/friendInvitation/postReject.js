const FriendInvitation = require('../../models/friendInvitation');
const friendsUpdates = require('../../sockerHandlers/updates/friends')
const postReject = async (req, res) => {
    try{
        const {id} = req.body;
        const {userId} = req.user;

        const invitationExists = await FriendInvitation.exists({_id:id});

        if(invitationExists) {
            await FriendInvitation.findByIdAndDelete(id);
        }

        friendsUpdates.updateFriendsPendingInvitations(userId);
        return res.status(200).send("Invitation succesfully rejected!");

    } catch (err) {
        console.log(err);
        return res.status(500).send("Something went wrong!")
    }
}

module.exports = postReject;