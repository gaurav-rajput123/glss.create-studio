import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Typography , Button} from '@mui/material';
import parse from "html-react-parser";
import SubjectTile from "./AnswerTile";



export default function MainCard({question}) {
    const [option , setOption] = useState("'You can use this template as a guide to the simple editor markdown and OLX markup to use for checkboxes problems.Edit this component to replace this template with your own assessment.'")
    const [checkOptions, setCheckOptions] = useState([])
    const addNewOption = () => {
      let newOption = {
        name: "hello"
      }
      let newCheckOptions = [...checkOptions]
      newCheckOptions.push(newOption)
      setCheckOptions(newCheckOptions)
    }
    const setName = (array) => {
      setCheckOptions(array)
    }
  return (
    <Card sx={{ minWidth: 200 , height:"auto"}}>
      <CardContent>
        
         <Typography style={{fontFamily:"inter", fontWeight:"bold"}}>
              1 point possible (ungraded)
         </Typography>
         <Typography style={{fontFamily:"inter", fontWeight:"bold", fontSize:"24px"}}>
            {parse(question)}
         </Typography>
         
         <Typography style={{fontFamily:"inter", fontWeight:"bold"}}>
           Type your question
         </Typography>
         
         <Typography style={{fontSize:"15px", fontFamily:"inter", fontWeight:"bold"}}>
             <p>You can add an optional tip or note related to the prompt like this.</p>
         </Typography>
         <Button variant="contained" onClick={()=>addNewOption()}>Add</Button>
       
        {
          checkOptions.map((item, itemIndex)=>{
            return (
              <SubjectTile value={item.name} setValue={setName} index={itemIndex} optionArray={checkOptions}/>
            )
          })
        }
       
        

        <Button variant="contained" size="medium" style={{marginTop:"80px"}} onClick={()=>console.log(checkOptions)}>Submit</Button>
      </CardContent>
      
    </Card>
  );
}