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
import TextDescription from "./TextDescription";
import convertToString from "../resources/convertToString";
import Alternate from './Alternate';
import Modal from '@mui/material/Modal';
import { Box } from "@mui/system";
import UploadComponentAlter from "./UploadComponentAlter";
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { MenuItem, Select } from "@mui/material";
import generateKey from "../resources/generateKey";
import CheckboxComponent from "../assesment/components/Checkbox";
import TextFieldAssesment from "../assesment/assesmentComponents/TextFieldAssesment";
import CheckBoxAssesment from "../assesment/assesmentComponents/CheckBoxAssesment";
import RadioButtonAssesment from "../assesment/assesmentComponents/RadioButtonAssesment";
import DropdownAssesment from "../assesment/assesmentComponents/DropdownAssesment";

const parse = require('html-react-parser');

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  maxHeight: "70%",
  height: "70%",
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest
//   })
// }));

export default function SubTopicTile({ subTopicIndex, topicIndex, courseIndex, courseArray, updateCourseArray }) {
  const [expanded, setExpanded] = React.useState(false);
  const [expandedDescription, setExpandedDescription] = React.useState(false);
  const StyledCard = styled(Card)({
    display: "flex",
    margin: '12px 10px',
    padding: "12px 12px 12px 0px"
  })

  const [isExpanded, setIsExpanded] = useState(false)

  const [isTitle, setIsTitle] = useState(true)

  const [label, setLabel] = useState("Section")

  const [resourceType, setResourceType] = useState(null)

  const [isDisable, setIsDisable] = useState({
    "ppt": false,
    "video": false,
    "audio": false,
    'pdf': false
  })

  const setLabelController = () => {
    setIsTitle(!isTitle)
  }
  const handleLabel = (labelVal) => {
    setLabel(labelVal)
    let newArr = [...courseArray]
    console.log(courseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex])
    courseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].name = labelVal.toString()
    updateCourseArray(newArr)
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClickDescription = () => {
    setExpandedDescription(!expandedDescription);
  };

  const getDescription = (description) => {
    const newArr = [...courseArray]
    const stArr = parse(description)
    newArr[courseIndex].topics[topicIndex].subTopics[subTopicIndex].description = convertToString(stArr)
    updateCourseArray(newArr)
  }

  const handleDelete = () => {
    let newCourseArray = [...courseArray]
    // let newTopicArray = [...topicArray]
    let newSubTopicArray = [...courseArray[courseIndex].topics[topicIndex].subTopics.slice(0, subTopicIndex), ...courseArray[courseIndex].topics[topicIndex].subTopics.slice(subTopicIndex + 1)]
    newCourseArray[courseIndex].topics[topicIndex].subTopics = newSubTopicArray
    updateCourseArray(newCourseArray)
  }
  // below, three lines of code are for modal used in video
  const [open, setOpen] = React.useState(false);

  const handleOpen = (type) => {
    setResourceType(type)
    setOpen(true)
  };

  const handleClose = (txt) => {
    setOpen(false)
  };

  const addAssesment = () => {
    setOpenAssesment(!openAssesment)
  }
  const [openAssesment, setOpenAssesment] = useState(false)
  const [assesmentType, setAssesmentType] = useState('')
  const selectAssesment = (e) => {
    setAssesmentType(e.target.value)
    let newCourseArray = [...courseArray]
    let newAssesmentObj;
    let newAssesmentArray = newCourseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].assesments? [...newCourseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].assesments] : []
    if(assesmentType === 0){
      newAssesmentObj = {
        name: "CheckBox",
        type : e.target.value,
        id: generateKey()
      }
    }else if(assesmentType === 1){
      newAssesmentObj = {
        name: "TextInput",
        type : e.target.value,
        id: generateKey()
      }
    }else if(assesmentType === 2){
      newAssesmentObj = {
        name: "Multiple Choice",
        type : e.target.value,
        id: generateKey()
      }
    }else if(assesmentType === 3){
      newAssesmentObj = {
        name: "DropDown",
        type : e.target.value,
        id: generateKey()
      }
    }
    newAssesmentArray.push(
      newAssesmentObj
    )
    newCourseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].assesments = newAssesmentArray
    updateCourseArray(newCourseArray)
  }
  const assessmentList = [
    {
      name: "Check Box",
      value: 0
    },
    {
      name: "Text Input",
      value: 1
    },
    {
      name: "Multiple Choice",
      value: 2
    },
    {
      name: "Drop Down",
      value: 3
    }
  ]

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

        <IconButton sx={{ marginRight: "10px" }} onClick={() => handleExpandClickDescription()}>
          <FeedIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }} onClick={() => handleDelete()}>
          <DeleteIcon className="Icon1" sx={{ color: "#b7b7b7", }} />
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }}
          onClick={() => handleExpandClick()}
        >
          <AddCircleIcon className="Icon1" sx={{ color: "#b7b7b7", }}
          />
        </IconButton>

      </StyledCard >
      <Collapse in={expandedDescription} timeout="auto" unmountOnExit>
        <TextDescription getDescription={getDescription} />
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
            onClick={() => handleOpen("audio")}
            color="error"
            disabled={isDisable.audio}
          >
            <AudioFileIcon />
          </Button>

          <Modal
            open={open}
            onClose={() => handleClose(null)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <UploadComponentAlter courseArray={courseArray} topicIndex={topicIndex} subTopicIndex={subTopicIndex} courseIndex={courseIndex} setInForm={resourceType} updateCourseArray={updateCourseArray} handleClose={handleClose} />
            </Box>
          </Modal>

          <Button
            sx={{ minWidth: "150px", height: "100px" }}
            variant="outlined"
            onClick={() => handleOpen("video")}
            disabled={isDisable.video}
          >
            <OndemandVideoIcon />
          </Button>

          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Alternate />
            </Box>
          </Modal> */}

          <Button
            sx={{ minWidth: "150px", height: "100px" }}
            variant="outlined"
            color="success"
            onClick={() => handleOpen("pdf")}
            disabled={isDisable.pdf}
          >
            <PictureAsPdfIcon />
          </Button>

          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Alternate />
            </Box>
          </Modal> */}

          <Button
            sx={{ minWidth: "150px", height: "100px" }}
            variant="outlined"
            color="warning"
            onClick={() => handleOpen("ppt")}
            disabled={isDisable.ppt}
          >
            <SlideshowIcon />
          </Button>
          <Button
            sx={{ minWidth: "150px", height: "100px" }}
            variant="outlined"
            onClick={() => addAssesment()}
            color="error"
            disabled={isDisable.audio}
          >
            <TextSnippetIcon />
          </Button>
        </Stack>
        <Collapse in={openAssesment}>
          <Select 
          sx={{
            width: "250px"
          }}
            label='choose an assesment type'
            value={assesmentType}
            onChange={selectAssesment}>
              {
                assessmentList.map((assesment, index)=>{
                  return (
                    <MenuItem value={assesment.value} key={assesment.name}>{assesment.name}</MenuItem>
                  )
                })
              }
            </Select>
            
            <div>
              {
                courseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].assesments?.map((assesment, assesmentIndex, assesmentArray)=>{
                  let basicProps = {
                    color: "blue"
                  }
                  if(assesment == undefined){
                    return null
                  }
                  if(assesment.type === 0){
                    return (
                      <CheckBoxAssesment {...basicProps}/>
                    )
                  }
                  if(assesment.type === 1){
                    return (
                      <TextFieldAssesment {...basicProps}/>
                    )
                  }
                  if(assesment.type === 2){
                    return (
                      <RadioButtonAssesment {...basicProps}/>
                    )
                  }
                  if(assesment.type === 3){
                    return (
                      <DropdownAssesment {...basicProps}/>
                    )
                  }
                })
              }
            </div>


        </Collapse>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" sx={{ backgroundColor: "#375dbe", borderRadius: "5px" }}>
            Upload
          </Button>
        </div>

      </Collapse>

    </div >

  )
}

