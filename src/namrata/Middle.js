import React, { useState } from "react";


// import {Box, Paper, Button, Card} from "@mui/material";

import { Paper, Box, Button, Card } from "@mui/material";
import SubjectTile from "./SubjectTile";
import RecipeReviewCard from "./Subsection";
import TextDescription from "./TextDescription";



export default function Middle() {
  const [courses, setCourses] = useState([])
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
  return (
    <Box className="box-list" style={{ marginTop: "10px", width: "1400px", zIndex: 2, marginLeft: "60px" }}>
      <Paper style={{ backgroundColor: "white", alignItems: "flex-start", height:"auto", borderRadius: "15px",padding:"10px" }}>


        <div style={{ display: "flex", marginLeft: "70px", marginTop: "50px" }}>
          <div style={{ marginLeft: "-10px", marginTop: "40px", padding:"30px" }}>
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: "#375DBE", borderRadius: "5px", fontFamily: "Roboto Slab", marginBottom: "40px", width: "180px" }}
            >
              Select Course
            </Button>
          </div>

          <div style={{ marginLeft: "10px", marginTop: "40px", padding:"30px" }}>
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: "#375DBE", borderRadius: "5px", fontFamily: "Roboto Slab", marginBottom: "40px", width: "180px" }}
              onClick={()=>addNewSection()}
            >
              Add Section +
            </Button>
          </div>

          <div style={{ marginLeft: "10px", marginTop: "40px", padding:"30px" }}>
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: "#375DBE", borderRadius: "5px", fontFamily: "Roboto Slab", marginBottom: "40px", width: "240px" }}
            >
              Collapse All Sections
            </Button>
          </div>

          <div style={{ marginLeft: "10px", marginTop: "40px", padding:"30px" }}>
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: "#375DBE", borderRadius: "5px", fontFamily: "Roboto Slab", marginBottom: "40px", width: "160px" }}
            >
              Live View
            </Button>
          </div>

          <div style={{ marginLeft: "10px", marginTop: "40px", padding:"30px" }}>
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: "#375DBE", borderRadius: "5px", fontFamily: "Roboto Slab", marginBottom: "40px", width: "160px" }}
            >
              Save
            </Button>
          </div>

        </div>
        <Card />
    
        <RecipeReviewCard/>
        <TextDescription/>
        

  
      </Paper>

      

    </Box>
  )
}

{/* <div className='mainCourse'>
        <h4>{item.name}</h4>
        <div className='course-content'>
          {
            item.topics.map((topic, index)=>{
              return(<div className="topic-tile">
                <h5>{topic.name}</h5>
                <div className='topic-contents'>
                  {topic.subTopics.map((subtopic, index)=>{
                    return (<div className='subtopicTile'>
                      <h6>{subtopic.name}</h6>
                      {/* <div>
                        {subtopic.}
                      </div> 
                    </div>)
                  })}
                </div>
              </div>)
            })
          }
        </div>
      </div> */}