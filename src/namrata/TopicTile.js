import styled from "@emotion/styled";
import { Card, IconButton, Typography, Box, Collapse } from "@mui/material";
import React, { useState } from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import EditIcon from '@mui/icons-material/Edit';
import FeedIcon from '@mui/icons-material/Feed';
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextNLabel from "./TextNLabel";
import "./SubjectTile.css";
import TextDescription from "./TextDescription";
import Collapsible from "./SubContent";
import Subsection from './SubTopicTile';
import convertToString from "../resources/convertToString";
import FileCopy from "@mui/icons-material/FileCopy";
import pushToArray from "../resources/pushToArray";

const parse = require('html-react-parser')



function TopicTile({ changeTopicName, topicIndex, topicArray, addSubTopics, updateCourseArray, courseArray, courseIndex }) {


  const StyledCard = styled(Card)({
    display: "flex",
    margin: '12px 10px',
    padding: "12px 12px 12px 0px"
  })

  const [expanded, setExpanded] = React.useState(false);

  const [isExpanded, setIsExpanded] = useState(false)

  const [isTitle, setIsTitle] = useState(true)

  const [label, setLabel] = useState("Topic")

  const setLabelController = () => {
    setIsTitle(!isTitle)

  }
  const handleLabel = (labelVal) => {
    setLabel(labelVal)
    changeTopicName(labelVal, topicIndex, topicArray)
  }

  const addSubTopic = () => {
    addSubTopics()
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const getDescription = (description) => {
    const newArr = [...courseArray]
    const stArr = parse(description)
    newArr[courseIndex].topics[topicIndex].description = convertToString(stArr)
    updateCourseArray(newArr)
  }

  const handleDelete = () => {
    let newCourseArray = [...courseArray]
    let newTopicArray = [...courseArray[courseIndex].topics.slice(0, topicIndex), ...courseArray[courseIndex].topics.slice(topicIndex+1)]
    newCourseArray[courseIndex].topics = newTopicArray
    updateCourseArray(newCourseArray)
}

const makeCopy = () => {
  let newCourseArray = [...courseArray]
  // let newTopicArray = pushToArray(newCourseArray[courseIndex].topics, topicIndex)
  // let newCourseArray = [...courseArray]


  let tempTopicArr = newCourseArray[courseIndex].topics
  let newTopicArr = []
  for(let i = 0; i<=topicIndex; i++){
    newTopicArr.push({...tempTopicArr[i]})
  }
 
  newTopicArr.push(
    {...newTopicArr[topicIndex]}
  )
  for(let i = topicIndex+1; i<tempTopicArr.length; i++){
    newTopicArr.push({...tempTopicArr[i]})
  }
  // console.log(newCourseArray[courseIndex].topics)
  // console.log(tempTopicArr)
  // console.log(newTopicArr)

  newCourseArray[courseIndex].topics = newTopicArr
  
  updateCourseArray(newCourseArray)

  // console.log(courseArray)
  // console.log(newCourseArray)
  // console.log(newTopicArray)
  // newCourseArray[courseIndex].topics = newTopicArray

  // console.log(newCourseArray) 
  // updateCourseArray(newCourseArray)
 
}

  return (
    <div onClick={()=>console.log(topicIndex)}>
      <StyledCard sx={{ backgroundColor: "#f1f1f1", borderLeft: '4px solid #375dbe' }}>
        <IconButton onClick={() => setIsExpanded(!isExpanded)}>

          <ArrowRightIcon sx={{ transform: isExpanded ? "rotate(90deg)" : "rotate(0)" }}
          />
        </IconButton>
        {/* <TextField value={subTitle} onChange={(e)=>setSubTitle(e.target.value)}/> */}

        <TextNLabel isLabelShown={isTitle} setIsLabelShown={setLabelController} label={label} setLabel={handleLabel} />

        <div style={{ flexGrow: 1 }} />

        <IconButton sx={{ marginRight: "10px" }} onClick={() => makeCopy()}>
          <FileCopy className="Icon5" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }} onClick={() => setLabelController()}>
          <EditIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }}
          onClick={() => handleExpandClick()}
        >
          <FeedIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }}
         onClick={() => handleDelete()}
        >
          <DeleteIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }}
          onClick={() => {
            addSubTopic()
          }}
        >
          <AddCircleIcon className="Icon1" sx={{ color: "#b7b7b7", }}

          />
        </IconButton>
      </StyledCard>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <TextDescription getDescription={getDescription} />
      </Collapse>


    </div>
  )
}

export default TopicTile;
