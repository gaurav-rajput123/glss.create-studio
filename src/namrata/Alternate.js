import React from "react" ;
import {Grid, Typography, Button, Paper, Card, Switch} from "@mui/material";
import UploadButton from "./Button";
import LinkIcon from '@mui/icons-material/Link';
import IosShareIcon from '@mui/icons-material/IosShare';
import "./Button.css";

import FileInput from "./Preview";

export default function Alternate(){
    
    const label = { inputProps: {"aria-label" : "Switch demo"}};
    
    
    return(
        
        
        
        <Grid container
        
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        >
         
          <Grid  className="left-content" xs={10} sx={{direction:"column"}}>
          
             <div className="Transcript">
                 <Typography sx={{fontWeight:"bold"}}>Transcript<Switch {...label}/></Typography>
                 <UploadButton
                   
                 name={"Attach Transcript"}
                 Icon={<LinkIcon className="attach-icon"/>}>
                 
                 </UploadButton>
                 
                
             
            </div>

             <div className="Thumbnail">
                  <Typography sx={{fontWeight:"bold"}}>Thumbnail</Typography>
                  <UploadButton
                  name={"Upload Thumbnail"}
                  Icon={<IosShareIcon className="thumb-icon"/>} >
                  </UploadButton>
                
                  
             </div>

                      
             <div className="Preview">
             <Typography sx={{fontWeight:"bold"}}>Upload</Typography>
           </div>
             <FileInput/>
          
           </Grid>
         

        

         <Grid xs={12}>
             <Button  variant="contained"
             style={{
                 backgroundColor:"#9bac42", 
                 fontWeight:"bold",
                  marginLeft:"500px"}}>
               Save
             </Button>
             
            
             
             
         </Grid>
         
         
        
        
        
        
        </Grid>
    
    )

}