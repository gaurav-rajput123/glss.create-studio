import logo from './logo.svg';
import './App.css';
import courseArray from './resources/courseArray'
import SubjectTitle from './namrata/SubjectTile'
import { TextField } from '@mui/material';
import { useState } from 'react';
function App() {
  const [val, setVal] = useState("hello")
  return (
    <div className="App">
      <SubjectTitle/>
      <TextField value={val} onChange={(e)=>setVal(e.target.value)} label="hello"/>
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
