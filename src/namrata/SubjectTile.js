import styled from "@emotion/styled";
import { Card, IconButton, Box, Button, Collapse } from "@mui/material";
import React, { useState } from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import EditIcon from '@mui/icons-material/Edit';
import FeedIcon from '@mui/icons-material/Feed';
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextNLabel from "./TextNLabel";
import "./SubjectTile.css";
import TextDescription from "./TextDescription";
// import Collapsible from "./SubContent";
import TopicTile from './TopicTile';
import convertToString from "../resources/convertToString";
// import Subsection from './Subsection';
// import parse from 'html-react-parser'
const parse = require('html-react-parser')
function SubjectTile(prop) {
  let { name, changeCourseName, courseIndex, courseArray, addTopics, updateCourseArray } = prop

  const StyledCard = styled(Card)({
    display: "flex",
    margin: '12px 10px',
    padding: "12px 12px 12px 0px"
  })

  const [expanded, setExpanded] = React.useState(false);

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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const addNewTopics = () => {
    addTopics()
  }


  const getDescription = (description) => {
    const newArr = [...courseArray]
    const stArr = parse(description)
    newArr[courseIndex].description = convertToString(stArr)
    updateCourseArray(newArr)
  }

  const handleDelete = () => {
      
      let newCourseArray = [...courseArray.slice(0, courseIndex), ...courseArray.slice(courseIndex+1)]
      updateCourseArray(newCourseArray)
  }
  return (
    <div>
      <StyledCard sx={{ backgroundColor: "#f1f1f1" }}>
        <IconButton onClick={() => setIsExpanded(!isExpanded)}>
          <ArrowRightIcon sx={{ transform: isExpanded ? "rotate(90deg)" : "rotate(0)" }} />
        </IconButton>
        {/* <TextField value={subTitle} onChange={(e)=>setSubTitle(e.target.value)}/> */}

        {/* <TextField value={subTitle} onChange={(e)=>setSubTitle(e.target.value)}/> */}

        <TextNLabel isLabelShown={isTitle} setIsLabelShown={setLabelController} label={label} setLabel={handleLabel} />

        {name}


        <div style={{ flexGrow: 1 }} />

        <IconButton sx={{ marginRight: "10px" }} onClick={() => setLabelController()}>
          <EditIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }}
          onClick={() => handleExpandClick()}
        >
          <FeedIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }} onClick={()=>handleDelete()}>
          <DeleteIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }}
          onClick={() => addNewTopics()}
        >
          <AddCircleIcon className="Icon1" sx={{ color: "#b7b7b7", }}

          />
        </IconButton>
      </StyledCard>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <TextDescription getDescription={getDescription} />
      </Collapse>
    </div >
  )

}


export default SubjectTile;
