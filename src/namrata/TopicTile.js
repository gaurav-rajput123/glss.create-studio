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



function TopicTile({ changeTopicName, topicIndex, topicArray, addSubTopics }) {


  const StyledCard = styled(Card)({
    display: "flex",
    margin: '12px 10px',
    padding: "12px 12px 12px 0px"
  })

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


  return (
    <div>
      <StyledCard sx={{ backgroundColor: "#f1f1f1", borderLeft: '4px solid #375dbe' }}>
        <IconButton onClick={() => setIsExpanded(!isExpanded)}>

          <ArrowRightIcon sx={{ transform: isExpanded ? "rotate(90deg)" : "rotate(0)" }}
          />
        </IconButton>
        {/* <TextField value={subTitle} onChange={(e)=>setSubTitle(e.target.value)}/> */}

        <TextNLabel isLabelShown={isTitle} setIsLabelShown={setLabelController} label={label} setLabel={handleLabel} />

        <div style={{ flexGrow: 1 }} />

        <IconButton sx={{ marginRight: "10px" }} onClick={() => setLabelController()}>
          <EditIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }}>
          <FeedIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }}>
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


    </div>
  )
}

export default TopicTile;
