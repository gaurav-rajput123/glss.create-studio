import styled from "@emotion/styled";
import { Button, Card, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import EditIcon from '@mui/icons-material/Edit';
import FeedIcon from '@mui/icons-material/Feed';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';


function SubjectTile() {


    const StyledCard = styled(Card)({
        display: "flex"
    })

    const [isExpanded, setIsExpanded] = useState(false)

    const [isSettingTitle, setIsSettingTitle] = useState(false)

    const [subTitle, setSubTitle] = useState("d")


  return(
  <div>
    <StyledCard sx={{backgroundColor:"#f1f1f1"}}>
    <IconButton onClick={()=>setIsExpanded(!isExpanded)}>
        <ArrowRightIcon sx={{transform: isExpanded ? "rotate(90deg)" : "rotate(0)"}}/>
    </IconButton>

    {

        isSettingTitle ? (<div><TextField label="hello" value={subTitle} type="text" variant='filled' onChange={(e)=>setSubTitle(e.currentTarget.value)} /><Button onClick={()=>setIsSettingTitle(!isSettingTitle)}>close it</Button></div>) : (<div onClick={()=>setIsSettingTitle(!isSettingTitle)}><Typography>{subTitle}</Typography>
            

        </div>)



    }
    <div style={{flexGrow: 1}}/>
     
    <IconButton>
       <EditIcon sx={{color:"#b7b7b7"}}/>
    </IconButton>
    
    <IconButton>
       <FeedIcon sx={{color:"#b7b7b7"}}/>
    </IconButton>

    <IconButton>
      <DeleteIcon sx={{color:"#b7b7b7"}}/>
    </IconButton>

    <IconButton>
     <AddCircleIcon sx={{color:"#b7b7b7"}}/>
    </IconButton>

    
    
        
    </StyledCard>
  </div>)
}

export default SubjectTile;
