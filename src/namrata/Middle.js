import React from "react";


// import {Box, Paper, Button, Card} from "@mui/material";

import { Paper, Box, Button, Card } from "@mui/material";


export default function Middle() {
    return(
      <Box className="box-list" style={{ marginTop: "10px", width:"1400px", zIndex: 2, marginLeft:"60px"}}>
      <Paper style={{ backgroundColor: "white", alignItems:"flex-start",height:"600px",borderRadius:"15px"}}>


      <div style={{ display: "flex" , marginLeft:"70px", marginTop:"50px"}}>
      <div style={{marginLeft:"-10px", marginTop:"40px", marginRight:"20px"}}>
          <Button 
            variant="contained" 
            size="large"
            style={{backgroundColor:"#375DBE", borderRadius:"5px", fontFamily:"Roboto Slab",marginBottom:"40px", width:"180px"}}
            >
            Select Course
          </Button>
      </div>
     
      <div style={{marginLeft:"10px", marginTop:"40px", marginRight:"20px"}}>
        <Button 
          variant="contained" 
          size="large"
          style={{backgroundColor:"#375DBE", borderRadius:"5px", fontFamily:"Roboto Slab",marginBottom:"40px",width:"180px"}}
          >
          Add Section +
        </Button>
      </div>

      <div style={{marginLeft:"10px", marginTop:"40px",marginRight:"20px"}}>
          <Button 
            variant="contained" 
            size="large"
            style={{backgroundColor:"#375DBE", borderRadius:"5px", fontFamily:"Roboto Slab",marginBottom:"40px", width:"240px"}}
            >
            Collapse All Sections
          </Button>
      </div>

      <div style={{marginLeft:"10px", marginTop:"40px", marginRight:"20px"}}>
          <Button 
            variant="contained" 
            size="large"
            style={{backgroundColor:"#375DBE", borderRadius:"5px", fontFamily:"Roboto Slab",marginBottom:"40px", width:"140px"}}
            >
            Live View
          </Button>
      </div>

      <div style={{marginLeft:"10px", marginTop:"40px"}}>
          <Button 
            variant="contained" 
            size="large"
            style={{backgroundColor:"#375DBE", borderRadius:"5px", fontFamily:"Roboto Slab",marginBottom:"40px", width:"140px"}}
            >
            Save
          </Button>
      </div>
      
    </div>
    <Card/>

</Paper>
</Box>
    )
}

