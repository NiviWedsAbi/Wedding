import { Grid, Box } from "@mui/material";
import React from "react";

const Location = () => {
  return (
    <Grid container>
  
      <Grid item style={{ display: "flex", justifyContent : "center", width: "100%", margin : "5ch 0 1ch"}}>
        <h2 style={{color: "#fd8d83", display: "flex", justifyContent : "center", flexDirection : "column"}}> Location </h2>
      </Grid>   
      <Grid item>
        <Box style={{margin : "auto", maxWidth : "55ch"}}>
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.943995907715!2d76.95888991423271!3d8.504818999321147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbca7c1052e5%3A0x6d0cb418aeb6d165!2sP.%20Subramaniam%20Hall!5e0!3m2!1sen!2sin!4v1660384618158!5m2!1sen!2sin"
            style={{
              border: "2px solid #F5E4CD ",
              borderRadius: "2ch",
              height: "33vh",
              width: "90vw"
            }}></iframe>
        </Box>
        
        <Box style={{marginTop : "1ch"}}>
          <h5 style={{fontSize:"2ch"}}> P. Subramaniam Hall ( Trivandrum Club ) </h5>
          <h5> Vazhuthycad </h5>
          <h5> Thiruvananthapuram </h5>
        </Box>


      </Grid>
    </Grid>
  );
};

export default Location;
