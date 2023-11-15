import React from 'react'
import "./style.css"
import {Typography} from "@mui/material"

const Title = () => {
  return (
    <div className='title'>
      <Typography variant='h4' 
                  align='center' 
      >
        Aktuální nabídka
      </Typography>
      <Typography variant='subtitle1'> 
        Nejnovější prémiové produkty od předních českých designerů. Doprava zdarma až k vám domů, na cenu nehleďte.
      </Typography>
    </div>
  )
}

export default Title