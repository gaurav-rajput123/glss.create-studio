import styled from "@emotion/styled";
import { Button, Card, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import EditIcon from '@mui/icons-material/Edit';
import FeedIcon from '@mui/icons-material/Feed';
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { TextField, Box } from "@mui/material";
import TextNLabel from "./TextNLabel";
import "./SubjectTile.css";

function SubjectTile(isLabelShown, setIsLabelShown) {


  const StyledCard = styled(Card)({
    display: "flex",
    margin: '12px 0px',
    padding: "12px 12px 12px 0px"
  });

  const [isExpanded, setIsExpanded] = useState(false)

  // const [isSettingTitle, setIsSettingTitle] = useState(false)


  const [isTitle, setIsTitle] = useState(true)

  const [label, setLabel] = useState("Section")

  // const [labelIn, setLabelIn] = useState(label)

  const [courses, setCourses] = useState([])    // For adding subsection
  const addNewSection = () => {
    let newCourses = [...courses]
    newCourses.push({
      name: "Basic Electrical Engineering",
      topics: [
        {
          name: "Thevenin's Theorem",
          subTopics: [
            {
              name: "theory",
              resources: {
                video: "render video",
                audio: "render audio",
                ppt: "render PPT"
              }

            },
            {
              name: "Application",
              resources: {
                video: "render video",
                audio: "render audio",
                // ppt: "render PPT"
              }

            }
          ]
        },
        {
          name: "Nortons's Theorem",
          subTopics: [
            {
              name: "theory",
              resources: {
                video: "render video",
                audio: "render audio",
                ppt: "render PPT"
              }

            },
            {
              name: "Application",
              resources: {
                video: "render video",
                // audio: "render audio",
                ppt: "render PPT"
              }

            }
          ]
        }
      ]
    })
    setCourses(newCourses)
  }


  const setLabelController = () => {
    setIsTitle(!isTitle)
  }
  const handleLabel = (labelVal) => {
    setLabel(labelVal)
  }

  return (
    <div>
      <StyledCard sx={{ backgroundColor: "#f1f1f1" }}>
        <IconButton onClick={() => setIsExpanded(!isExpanded)}>
          <ArrowRightIcon sx={{ transform: isExpanded ? "rotate(90deg)" : "rotate(0)" }} />
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

        <IconButton sx={{ marginRight: "10px" }} onClick={() => addNewSection()}>

          <AddCircleIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>
      </StyledCard>

      {courses.map((item, index) => {
        return (
          <Box sx={{ width: "90%", marginLeft: '5%' }}>
            <SubjectTile
            />
          </Box>
        )
      })}
    </div>)
}

export default SubjectTile;
