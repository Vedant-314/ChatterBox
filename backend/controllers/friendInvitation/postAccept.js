const FriendsInvitation = require("../../models/friendInvitation");
const User = require("../../models/user");
const friendsUpdates = require("../../sockerHandlers/updates/friends");

const postAccept = async (req, res) => {
  try {
    const { id } = req.body;
    const invitation = await FriendsInvitation.findById(id);

    if (!invitation) {
      return res.status(401).send("Error occured");
    }

    const { senderId, receiverId } = invitation;

    const senderUser = await User.findById(senderId);
    senderUser.friends = [...senderUser.friends, receiverId];

    const receiverUser = await User.findById(receiverId);
    receiverUser.friends = [...receiverUser.friends, senderId];

    await senderUser.save();
    await receiverUser.save();

    await FriendsInvitation.findByIdAndDelete(id);

    friendsUpdates.updateFriends(senderId.toString());
    friendsUpdates.updateFriends(receiverId.toString());
    friendsUpdates.updateFriendsPendingInvitations(receiverId.toString());

    return res.status(200).send("Friend added successfully!");

  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong!");
  }
};

module.exports = postAccept;
