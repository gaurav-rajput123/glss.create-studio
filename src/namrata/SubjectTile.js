import styled from "@emotion/styled";
import { Button, Card, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import EditIcon from '@mui/icons-material/Edit';
import FeedIcon from '@mui/icons-material/Feed';
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { TextField } from "@mui/material";
import TextNLabel from "./TextNLabel";
import "./SubjectTile.css"

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
    <StyledCard sx={{backgroundColor:"#f1f1f1"}}>
    <IconButton onClick={()=>setIsExpanded(!isExpanded)}>
        <ArrowRightIcon sx={{transform: isExpanded ? "rotate(90deg)" : "rotate(0)"}}/>
    </IconButton>
    {/* <TextField value={subTitle} onChange={(e)=>setSubTitle(e.target.value)}/> */}

    <TextNLabel isLabelShown={isTitle} setIsLabelShown={setLabelController} label={label} setLabel={handleLabel}/>
    
    <div style={{flexGrow: 1}}/>
     
    <IconButton>
       <EditIcon className="Icon1"sx={{color:"#b7b7b7",marginX:"10px"}}/>
    </IconButton>
    
    <IconButton>
       <FeedIcon className="Icon1" sx={{color:"#b7b7b7", marginX:"10px"}}/>
    </IconButton>

    <IconButton>
      <DeleteIcon className="Icon1" sx={{color:"#b7b7b7", marginX:"10px"}}/>
    </IconButton>

    <IconButton>
     <AddCircleIcon className="Icon1" sx={{color:"#b7b7b7", marginX:"10px"}}/>
    </IconButton>

    
    
        
    </StyledCard>
  </div>)
}

export default SubjectTile;
