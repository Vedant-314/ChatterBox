import React from 'react';
import { styled } from '@mui/system';
import PendingInvitationListItem from './PendingInvitationListItem';

const DUMMY_INVITATIONS = [
  {
    id: '1',
    senderId:{
      username: 'Mark',
      mail: 'mark@gmail.com'
    }
  },
  {
    id: '2',
    senderId:{
      username: 'Joseph',
      mail: 'joseph@gmail.com'
    }
  },
  {
    id: '3',
    senderId:{
      username: 'Clark',
      mail: 'clark@gmail.com'
    }
  },
]

const MainContainer = styled('div')({
    width: '100%',
    height: '22%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto'
})

const PendingInvitationsList = () => {
  return (
    <MainContainer>
        {DUMMY_INVITATIONS.map(invitation => (
          <PendingInvitationListItem
            key={invitation.id}
            id={invitation.id}
            username={invitation.senderId.username}
            mail={invitation.senderId.mail}
          />
        ))}
    </MainContainer>
  )
}

export default PendingInvitationsList