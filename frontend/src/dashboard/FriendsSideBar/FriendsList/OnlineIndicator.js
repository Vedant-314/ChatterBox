import React from 'react'
import { Box } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const OnlineIndicator = () => {
  return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        right: '15px',
        color: '#3ba55d'
    }}
    >
        <FiberManualRecordIcon/>
    </Box>
  )
}

export default OnlineIndicator