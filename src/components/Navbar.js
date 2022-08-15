import React from 'react';
import { Grid,IconButton, useMediaQuery} from '@mui/material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';


const Navbar = (props) => {
  const { categories, filterItems,selectedCategory} = props;
  
  const matches = useMediaQuery('(min-width:768px)');
  const iconList=[CalendarMonthOutlinedIcon,FeedOutlinedIcon,LocationOnOutlinedIcon]
  
  return (
    <Grid container style={{ display: "flex", justifyContent: "space-around" }}>
      {categories.map((category, index) => {
        const Icon = iconList[index];
        return (
          <Grid item key={index}>
            <IconButton style={{display: "flex", flexDirection:"column"}} onClick={() => {filterItems(category);}}>            
                <Icon fontSize={matches ? "large" : "medium" } style ={{ color :(selectedCategory === category) ? "#fd8d83":"5f5f5f"}}/>
                <p style={{fontSize: "x-small", fontWeight : "bold", fontFamily: "Dancing Script"}}>{category}</p>
            </IconButton>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Navbar;
