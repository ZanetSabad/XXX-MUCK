import React from 'react'
import "./style.css"
import { Typography } from "@mui/material"

const Footer = () => {
  return (
    <div className='footer'>
      <Typography   variant="h6" 
                    align="center" 
                    sx={{lineHeight: "80px"}}> 
        &copy; Žanet Sabadka 2023
      </Typography>
    </div>
  )
}

export default Footer