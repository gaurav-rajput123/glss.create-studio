import React, { useState } from "react";


// import {Box, Paper, Button, Card} from "@mui/material";

import { Paper, Box, Button, Card } from "@mui/material";
import SubjectTile from "./SubjectTile";


export default function Middle() {
  const [courses, setCourses] = useState([])
  const addNewSection = () => {
    let newCourses = [...courses]
    newCourses.push({
      name: "Basic Electrical Engineering"
    })
    setCourses(newCourses)
  }

  const updateCourse = (course, index) => {
    let newCourseObj = [...courses]
    newCourseObj[index] = course
    setCourses(newCourseObj)
  }
  return (
    <Box className="box-list" style={{ marginTop: "10px", width: "1400px", zIndex: 2, marginLeft: "60px" }}>
      <Paper style={{ backgroundColor: "white", alignItems: "flex-start", height: "600px", borderRadius: "15px" }}>


        <div style={{ display: "flex", marginLeft: "70px", marginTop: "50px" }}>
          <div style={{ marginLeft: "-10px", marginTop: "40px", marginRight: "20px" }}>
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: "#375DBE", borderRadius: "5px", fontFamily: "Roboto Slab", marginBottom: "40px", width: "180px" }}
            >
              Select Course
            </Button>
          </div>

          <div style={{ marginLeft: "10px", marginTop: "40px", marginRight: "20px" }}>
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: "#375DBE", borderRadius: "5px", fontFamily: "Roboto Slab", marginBottom: "40px", width: "180px" }}
              onClick={()=>addNewSection()}
            >
              Add Section +
            </Button>
          </div>

          <div style={{ marginLeft: "10px", marginTop: "40px", marginRight: "20px" }}>
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: "#375DBE", borderRadius: "5px", fontFamily: "Roboto Slab", marginBottom: "40px", width: "240px" }}
            >
              Collapse All Sections
            </Button>
          </div>

          <div style={{ marginLeft: "10px", marginTop: "40px", marginRight: "20px" }}>
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: "#375DBE", borderRadius: "5px", fontFamily: "Roboto Slab", marginBottom: "40px", width: "140px" }}
            >
              Live View
            </Button>
          </div>

          <div style={{ marginLeft: "10px", marginTop: "40px" }}>
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: "#375DBE", borderRadius: "5px", fontFamily: "Roboto Slab", marginBottom: "40px", width: "140px" }}
            >
              Save
            </Button>
          </div>

        </div>
        <Card />
    {courses.map((item, index) => {
    return (
      <MainTile key={index} course={item} courseIndex={index} courseArray={courses} updateCurrentCourse={updateCourse}/>
    )
  })}
      </Paper>
      <Button onClick={()=>console.log(courses)}>Check Course in Middle</Button>
    </Box>
  )
}



function MainTile({course, courseIndex, courseArray, updateCurrentCourse}){
  const updateCourse = () => {
    let newCourseObj = {...course}
    if(newCourseObj.hasOwnProperty('topics')){
      newCourseObj.topics.push({
        name: "Nortons Theorem",
        subTopics: []
      })
    }else{
      newCourseObj.topics = [
        {
          name: "Thevenins Theorem",
          subTopics: []
        }
      ]
    }

    updateCurrentCourse(newCourseObj, courseIndex)
  }
  
  return (
    <Box sx={{border: "1px solid black", margin: "8px 0px"}}>
      <SubjectTile />
      <Box sx={{width: "60%", }}>
      {
        course.topics?.map((topic, topicIndex, topicArr)=>{
          return <SubjectTile key={topicIndex}/>
        })
      }
      </Box>
      <Button onClick={()=>updateCourse()}>Update</Button>
      <Button onClick={()=>console.log(course)}>check</Button>
    </Box>
  )
}
function SubTopicsTile({subtopic, subTopicIndex, subTopicArray}){




  const retCourseList = () => {
    let retArr = []

    for (let [key, val] of Object.entries(subtopic.resources)){
      retArr.push(val)
    }
    return retArr
  }

  


return (
  <Box>
    {subtopic.name}
    {subtopic.subTopics.map((item)=>{
      return (
      <div>{item.name}</div>
      )
    })}
  </Box>
)
}



// function SubTopicsTile({subtopic, subTopicIndex, subTopicArray}){




//     const retCourseList = () => {
//       let retArr = []

//       for (let [key, val] of Object.entries(subtopic.resources)){
//         retArr.push(val)
//       }
//       return retArr
//     }

    
  

//   return (
//     <Box>
//       {subtopic.name}
//       {
//         retCourseList()
//       }
//     </Box>
//   )
// }














































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