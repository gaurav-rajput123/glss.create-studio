import Videoheader from "../Vikram/Header";
// import MainCard from "../components/MainCard";
import {useState} from "react";
import MainCard from '../components/MainCarnNAM'
import React from 'react'

function CheckBoxAssesment() {
    let [question, setQuestion] = useState('Add your question here')
  return (
    <div>
      <Videoheader changeQuestion={setQuestion} title={"Checkbox Assessment"}/>
      <MainCard question={question}/>
    
    </div>
  )
}

export default CheckBoxAssesment;