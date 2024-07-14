import React from 'react';
import { styled } from '@mui/system';
import FriendListItem from './FriendListItem';

const DUMMY_FRIENDS = [
  {
    id: 1,
    username: 'Mark',
    isOnline: true
  },
  {
    id: 2,
    username: 'Anna',
    isOnline: false
  },
  {
    id: 3,
    username: 'John',
    isOnline: false
  },
  {
    id: 4,
    username: 'Mathew',
    isOnline: true
  }
]

const MainContainer = styled('div')({
    flexGrow: 1,
    width: '100%'
})

const FriendsList = () => {
  return (
    <MainContainer>
        {DUMMY_FRIENDS.map(friend => (
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

export default FriendsList