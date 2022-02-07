// import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import React, { useState } from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import EditIcon from '@mui/icons-material/Edit';
import FeedIcon from '@mui/icons-material/Feed';
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextNLabel from "./TextNLabel";
import "./SubjectTile.css";
import AddComponent from './Add';
import { display } from "@mui/system";
import TextDescription from "./TextDescription";



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

export default function SubTopicTile({ subTopicIndex, topicIndex, courseIndex, courseArray, updateCourseArray }) {
  const [expanded, setExpanded] = React.useState(false);
  const StyledCard = styled(Card)({
    display: "flex",
    margin: '12px 10px',
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
    let newArr = [...courseArray]
    console.log(courseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex])
    courseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].name = labelVal.toString()
    updateCourseArray(newArr)
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div >
      <StyledCard sx={{ backgroundColor: "#f1f1f1", borderLeft: '4px solid green' }}>

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

        <IconButton sx={{ marginRight: "10px" }} onClick={() => handleExpandClick()}>
          <FeedIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }}>
          <DeleteIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }}
          onClick={() => handleExpandClick()}
        >
          <AddCircleIcon className="Icon1" sx={{ color: "#b7b7b7", }}
          />
        </IconButton>

      </StyledCard >
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <TextDescription />
      </Collapse>
      <Collapse in={expanded} timeout="auto" unmountOnExit>

        <CardContent sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" sx={{ minWidth: "60% !important", backgroundColor: "#375dbe", height: "50px" }}>
            Add Component
          </Button>
        </CardContent>
        <Stack
          sx={{
            padding: "10px 100px 10px 100px",
            display: "flex",
            justifyContent: "center"
          }}
          direction="row"
          spacing={2}
        >
          <Button
            sx={{ minWidth: "150px", height: "100px" }}
            variant="outlined"
            color="error"
          >
            <AudioFileIcon />
          </Button>
          <Button
            sx={{ minWidth: "150px", height: "100px" }}
            variant="outlined"
          >
            <OndemandVideoIcon />
          </Button>
          <Button
            sx={{ minWidth: "150px", height: "100px" }}
            variant="outlined"
            color="success"
          >
            <PictureAsPdfIcon />
          </Button>
          <Button
            sx={{ minWidth: "150px", height: "100px" }}
            variant="outlined"
            color="warning"
          >
            <SlideshowIcon />
          </Button>
        </Stack>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" sx={{ backgroundColor: "#375dbe", borderRadius: "5px" }}>
            Upload
          </Button>
        </div>

      </Collapse>

    </div >

  )
}

