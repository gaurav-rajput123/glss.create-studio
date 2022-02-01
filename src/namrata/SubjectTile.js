import styled from "@emotion/styled";
import { Button, Card, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import EditIcon from '@mui/icons-material/Edit';
import FeedIcon from '@mui/icons-material/Feed';
import { TextField } from "@mui/material";
import TextNLabel from "./TextNLabel";
function SubjectTile() {


    const StyledCard = styled(Card)({
        display: "flex",
        margin: '12px 0px',
        padding: "12px 12px 12px 0px"  
    })

    const [isExpanded, setIsExpanded] = useState(false)

    const [isSettingTitle, setIsSettingTitle] = useState(false)

    const [subTitle, setSubTitle] = useState("d")

    const [isTitle, setIsTitle] = useState(true)

    const [label, setLabel] = useState("Section")

    const setLabelController = () => {
      setIsTitle(!isTitle)
    }
    const handleLabel = (labelVal) => {
      setLabel(labelVal)
    }
  return(
  <div>
    <StyledCard >
    <IconButton onClick={()=>setIsExpanded(!isExpanded)}>
        <ArrowRightIcon sx={{transform: isExpanded ? "rotate(90deg)" : "rotate(0)"}}/>
    </IconButton>
    {/* <TextField value={subTitle} onChange={(e)=>setSubTitle(e.target.value)}/> */}

    <TextNLabel isLabelShown={isTitle} setIsLabelShown={setLabelController} label={label} setLabel={handleLabel}/>
    
    <div style={{flexGrow: 1}}/>
     
    <IconButton>
       <EditIcon/>
    </IconButton>
    
    <IconButton>
       <FeedIcon/>
    </IconButton>
    
    
        
    </StyledCard>
  </div>)
}

export default SubjectTile;
