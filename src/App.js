
import './App.css';

import Form from './vikram/Form'
function App() {
  return (
    <div className="App">
      
    <Form />
      
    </div>
  );
}




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
//                     </div> */}
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

export default App;
