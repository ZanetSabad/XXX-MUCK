import "./style.css"
import {Box, CardActionArea, CardMedia,CardContent, Typography } from '@mui/material'
import { NavLink } from "react-router-dom"

const Products = ({props}) => {
   

  return ( 
     <Box sx={{
          display: "flex", justifyContent:"space-around", 
          flexWrap: "wrap"}}>

     {props.map((oneProduct) => (  
        <NavLink 
          key={oneProduct.id} 
          to={`/productPage/${oneProduct.id}`}
          alt=""        
          sx={{   
            maxWidth: 300,
            maxHeight: 300,            
            margin: "10px 20px", 
            underline: "none",
            border:"2px solid blue"           
          }}
         >   
          <CardActionArea>   
            <CardMedia
              component="img"
              height="250"          
              image={oneProduct.image}
              alt={oneProduct.name}
            />        
            <CardContent>
              <Typography 
                gutterBottom                            
                variant="h6"  
                underline="none">
                  {oneProduct.name}
              </Typography>
            </CardContent>                      
          </CardActionArea>
        </NavLink>
     ))}
    </Box>
  )
}       
export default Products