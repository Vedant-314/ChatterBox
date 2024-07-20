import React from 'react';
import { styled } from '@mui/system';
import FriendListItem from './FriendListItem';
import {connect} from "react-redux";

const MainContainer = styled('div')({
    flexGrow: 1,
    width: '100%'
})

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
   friends.forEach(friend => {
    const isUserOnline = onlineUsers.find(user => user.userId === friend.id);
    friend.isOnline = isUserOnline ? true : false;
   })

   return friends;
}

const FriendsList = ({friends, onlineUsers}) => {
  return (
    <MainContainer>
        {checkOnlineUsers(friends, onlineUsers).map(friend => (
          <FriendListItem
            username = {friend.username}
            id = {friend.id}
            key={friend.id}
            isOnline = {friend.isOnline}
          />
        ))}
    </MainContainer>
  )
}

const mapStateToProps = ({friends}) => {
  return {
    ...friends
  }
}

export default connect(mapStateToProps) (FriendsList)