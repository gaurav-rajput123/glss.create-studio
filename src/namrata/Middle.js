import React, { useState } from "react";
import Butn from "./Butn";
import { Paper, Box, Button, Card } from "@mui/material";
import SubjectTile from "./SubjectTile";
import TopicTile from "./TopicTile";
import SubTopicTile from './SubTopicTile';


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

  const changeCourseName = (courseIndex, courseArray, labelVal) => {
    let newCourseObj = {...courseArray[courseIndex]}
    newCourseObj.name = labelVal
    let newCourseArray = [...courseArray]
    newCourseArray[courseIndex] = newCourseObj
    setCourses(newCourseArray)
  }

  return (
    <Box className="box-list" style={{ margin: "10px 0px 0px 60px", width: "1400px", zIndex: 2 }}>
      <Paper style={{ backgroundColor: "white", alignItems: "flex-start", height: "auto", borderRadius: "15px", paddingBottom:'1%' }}>


        <div style={{ display: "flex", margin: "50px 0px 0px 70px", justifyContent:'space-evenly' }}>
          <Butn Text="Select Course"/>
          <Butn Text="Add Section +" clickHoja={addNewSection} />
          <Butn Text="Collapse All Section" />
          <Butn Text="Live View" />
          <Butn Text=" Save" />
        </div>
        <Card />
    {courses.map((item, index) => {
    return (
      <MainTile key={index} course={item} courseIndex={index} courseArray={courses} updateCurrentCourse={updateCourse} 
        changeCourseName={changeCourseName}
      />
    )
  })}
      </Paper>
      <Button onClick={() =>console.log(courses)}>CheckUpdate</Button>
    </Box>
  )
}



function MainTile({course, courseIndex, courseArray, updateCurrentCourse, changeCourseName}){
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


  const updateTopicName = (newTopicName, topicIndex, topicArray) => {
    let newTopicObject = {...topicArray[topicIndex]}
    newTopicObject.name = newTopicName
    let newTopicArray = [...topicArray]
    newTopicArray[topicIndex] = newTopicObject
    let newCourseObject = {...course}
    newCourseObject.topics = newTopicArray
    updateCurrentCourse(newCourseObject, courseIndex)
  } 

  const addNewSubTopic = (newTopicArray) => {
    let newCourseObject = {...course}
    newCourseObject.topics = newTopicArray
    updateCurrentCourse(newCourseObject, courseIndex)
  }
  
  return (
    <Box>
      <SubjectTile changeCourseName={changeCourseName} courseIndex={courseIndex} courseArray={courseArray} addTopics={updateCourse} />
      <Box sx={{width: "98%", marginLeft:'1%'}}>
      {
        course.topics?.map((topic, topicIndex, topicArr)=>{
          return <TopicTileBox
          key={topicIndex+4}
          topic={topic}
          topicIndex={topicIndex}
          topicArray={topicArr}
          changeTopicName={updateTopicName}
          addNewSubTopic={addNewSubTopic}  />
        })
      }
      </Box>
    </Box>
  )
}




function TopicTileBox({topic, topicIndex, topicArray, changeTopicName, addNewSubTopic}){
  const updateSubTopic = () => {
   
    let newSubTopic = {
      "name": "newSubTopic"
    }

    let newTopicArray = [...topicArray]
    if(newTopicArray[topicIndex].hasOwnProperty('subTopics')){
      newTopicArray[topicIndex].subTopics.push(newSubTopic)
    }else{
      newTopicArray[topicIndex].subTopics = [newSubTopic]
    }
    addNewSubTopic(newTopicArray)
  }
  
  return (
    <Box>
      <TopicTile changeTopicName={changeTopicName} topicIndex={topicIndex} topicArray={topicArray} addSubTopics={updateSubTopic} />
      <Box sx={{width: "98%", marginLeft:'1%'}}>
      {
        topic.subTopics?.map((subTopic, subTopicIndex, subTopicArr)=>{
          return <SubTopicTile key={subTopicIndex} />
        })
      }
      </Box>
    </Box>
  )
}








































//  <div className='mainCourse'>
//         <h4>{item.name}</h4>
//         <div className='course-content'>
//           {
//             item.topics.map((topic, index)=>{
//               return(<div className="topic-tile">
//                 <h5>{topic.name}</h5>
//                 <div className='topic-contents'>
//                   {topic.subTopics.map((subtopic, index)=>{
//                     return (<div className='subtopicTile'>
//                       <h6>{subtopic.name}</h6>
//                        <div>
//                         {subtopic.}
//                       </div> 
//                     </div>)
//                   })}
//                 </div>
//               </div>)
//             })
//           }
//         </div>
//       </div> 
// function SubTopicsTile({subtopic, subTopicIndex, subTopicArray}){




//   const retCourseList = () => {
//     let retArr = []

//     for (let [key, val] of Object.entries(subtopic.resources)){
//       retArr.push(val)
//     }
//     return retArr
//   }

  


// return (
//   <Box>
//     {subtopic.name}
//     {subtopic.subTopics.map((item)=>{
//       return (
//       <div>{item.name}</div>
//       )
//     })}
//   </Box>
// )
// }