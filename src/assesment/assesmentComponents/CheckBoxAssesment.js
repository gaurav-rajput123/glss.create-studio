import Videoheader from "../Vikram/Header";
// import MainCard from "../components/MainCard";
import {useState} from "react";
import MainCard from '../components/MainCarnNAM'
import React from 'react'

<<<<<<< HEAD
function CheckBoxAssesment({color,updateAssesment}) {
    let [question, setQuestion] = useState('Add your question here')
  return (
    <div>
      <Videoheader changeQuestion={setQuestion} title={"Checkbox Assessment"}/>
      <MainCard question={question} updateAssesment={updateAssesment}/>
=======
function CheckBoxAssesment({color, updateAssesment, index}) {
    let [question, setQuestion] = useState('Add your question here')
  return (
    <div>
      <Videoheader changeQuestion={setQuestion} title={"Checkbox Assessment"} color={color}/>
      <MainCard question={question}  updateAssesment={updateAssesment} index={index}/>
>>>>>>> b59b8587b00a4c6cee52783cc6d4d8cfc86d2f23
    
    </div>
  )
}

export default CheckBoxAssesment;