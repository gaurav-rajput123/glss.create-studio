import styled from "@emotion/styled";
import { Card, IconButton, Box, Button } from "@mui/material";
import React, { useState } from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import EditIcon from '@mui/icons-material/Edit';
import FeedIcon from '@mui/icons-material/Feed';
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextNLabel from "./TextNLabel";
import "./SubjectTile.css";
// import Collapsible from "./SubContent";
import TopicTile from './TopicTile';
// import Subsection from './Subsection';

function SubjectTile(prop) {
  let {name, changeCourseName, courseIndex, courseArray, addTopics} =prop

    const StyledCard = styled(Card)({
        display: "flex",
        margin: '12px 10px',
        padding: "12px 12px 12px 0px"  
    })

    const [isExpanded, setIsExpanded] = useState(false)

    const [isTitle, setIsTitle] = useState(true)

    const [label, setLabel] = useState("Section")

    const setLabelController = () => {
      setIsTitle(!isTitle)
    }
    const handleLabel = (labelVal) => {
      setLabel(labelVal)
      changeCourseName(courseIndex, courseArray, labelVal)
    }

   
    const addNewTopics = () => {
      addTopics()
    }

  return(
  <div style={{paddingBottom:'0%'}}>
    <StyledCard sx={{backgroundColor:"#f1f1f1"}}>
     <IconButton onClick={()=>setIsExpanded(!isExpanded)}>
     
        <ArrowRightIcon sx={{transform: isExpanded ? "rotate(90deg)" : "rotate(0)"}}
        />
    </IconButton>
    {/* <TextField value={subTitle} onChange={(e)=>setSubTitle(e.target.value)}/> */}

    <TextNLabel isLabelShown={isTitle} setIsLabelShown={setLabelController} label={label} setLabel={handleLabel}/>
    
    {name}


    <div style={{flexGrow: 1}}/>
     
    <IconButton sx={{marginRight: "10px"}} onClick={() => setLabelController()}>
       <EditIcon className="Icon1"sx={{color:"#b7b7b7",}}/>
    </IconButton>
    
    <IconButton sx={{marginRight: "10px"}}>
       <FeedIcon className="Icon1" sx={{color:"#b7b7b7", }}/>
    </IconButton>

    <IconButton sx={{marginRight: "10px"}}>
      <DeleteIcon className="Icon1" sx={{color:"#b7b7b7",}}/>
    </IconButton>

    <IconButton sx={{marginRight: "10px"}}
    onClick={()=>addNewTopics()}
    >
     <AddCircleIcon className="Icon1" sx={{color:"#b7b7b7", }}
      
     />
    </IconButton>
    </StyledCard>
  </div>
  )
}


export default SubjectTile;
