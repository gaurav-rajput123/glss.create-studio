import './App.css';
import { useState } from 'react';
import Middle from './namrata/Middle';
import { Card } from '@mui/material';
import { CardHeader } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
function App() {
  const [val, setVal] = useState("hello")
  return (
    <div className="App">
      {/* <SubjectTitle/> */}
      <Middle/>

     
      
    </div>
  );



  // {courseArray.map((item, index) => {
  //   return (
  //     <div className='mainCourse'>
  //       <h4>{item.name}</h4>
  //       <div className='course-content'>
  //         {
  //           item.topics.map((topic, index)=>{
  //             return(<div className="topic-tile">
  //               <h5>{topic.name}</h5>
  //               <div className='topic-contents'>
  //                 {topic.subTopics.map((subtopic, index)=>{
  //                   return (<div className='subtopicTile'>
  //                     <h6>{subtopic.name}</h6>
  //                     {/* <div>
  //                       {subtopic.}
  //                     </div> */}c
  //                   </div>)
  //                 })}
  //               </div>
  //             </div>)
  //           })
  //         }
  //       </div>
  //     </div>
  //   )
  // })}
}

export default App;
