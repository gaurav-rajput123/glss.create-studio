import React, { useState } from "react";
import Butn from "./Butn";
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
    <Box className="box-list" style={{ margin: "10px 0px 0px 60px", width: "1400px", zIndex: 2 }}>
      <Paper style={{ backgroundColor: "white", alignItems: "flex-start", height: "auto", borderRadius: "15px" }}>


        <div style={{ display: "flex", margin: "50px 0px 0px 70px", justifyContent: 'space-evenly' }}>
          <Butn Text="Select Course" />
          <Butn Text="Select Course" clickHoja={addNewSection} />
          <Butn Text="Collapse All Section" />
          <Butn Text="Live View" />
          <Butn Text=" Save" />
        </div>
        <Card />
        {courses.map((item, index) => {
          return (
            <MainTile key={index} course={item} courseIndex={index} courseArray={courses} updateCurrentCourse={updateCourse} />
          )
        })}
      </Paper>



    </Box>
  )
}



function MainTile({ course, courseIndex, courseArray, updateCurrentCourse }) {
  const updateCourse = () => {
    let newCourseObj = { ...course }
    if (newCourseObj.hasOwnProperty('topics')) {
      newCourseObj.topics.push({
        name: "Nortons Theorem",
        subTopics: []
      })
    } else {
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
    <Box>
      <SubjectTile />
      <Box sx={{ width: "60%" }}>
        {
          course.topics?.map((topic, topicIndex, topicArr) => {
            return <SubjectTile />
          })
        }
      </Box>
      <Button onClick={() => updateCourse()}>Update</Button>
      <Button onClick={() => console.log(course)}>check</Button>
    </Box>
  )
}
function SubTopicsTile({ subtopic, subTopicIndex, subTopicArray }) {




  const retCourseList = () => {
    let retArr = []

    for (let [key, val] of Object.entries(subtopic.resources)) {
      retArr.push(val)
    }
    return retArr
  }




  return (
    <Box>
      {subtopic.name}
      {subtopic.subTopics.map((item) => {
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
