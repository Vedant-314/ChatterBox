const serverStore = require('../serverStore')
const friendsUpdate = require('../sockerHandlers/updates/friends')

const newConnectionHandler = async (socket, io) => {
    const userDetails = socket.user;
    serverStore.addNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.userId,
    })

    friendsUpdate.updateFriendsPendingInvitations(userDetails.userId);
    friendsUpdate.updateFriends(userDetails.userId);
}

module.exports = newConnectionHandler;