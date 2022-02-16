import { Button } from "@mui/material";
import { useState } from "react";
import CheckCard from "../vaibhav/RadioButtons";
import Videoheader from "../Vikram/Header";


export default function RadioButtonAssesment({color, updateAssesment}){
    let [question, setQuestion] = useState('Add the questions text,or prompt here.This text is required.')
     return (
        <div>
            <Videoheader changeQuestion={setQuestion} title={"Check Boxes"}/>
            <CheckCard question={question} updateAssesment={updateAssesment}/>
            {/* <Button onClick={()=>console.log(question)}>Check</Button> */}
        </div>
    )
}