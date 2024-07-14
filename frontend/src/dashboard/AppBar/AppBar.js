import React from 'react';
import { styled } from '@mui/system';
import DropdownMenu from './DropdownMenu';

const MainContainer = styled('div')({
    position: 'absolute',
    top: 0,
    right: 0,
    height: '48px',
    borderBottom: '1px solid black',
    backgroundColor: '#36393f',
    width: 'calc(100% - 326px)',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 15px',
    alignItems: 'center'    
})

const AppBar = () => {
  return (
    <MainContainer>
      <DropdownMenu/>
    </MainContainer>
  )
}

export default AppBar;