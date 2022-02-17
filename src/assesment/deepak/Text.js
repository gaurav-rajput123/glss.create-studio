import { Card, Modal, Box, Typography,Button, TextField } from "@mui/material"
import { useState } from "react";
import parse from 'html-react-parser'


import TextDescription from './TextDescription'
import EditIcon from '@mui/icons-material/Edit';
import generateKey from "../../resources/generateKey";

<<<<<<< HEAD
const Textinput = ({question, title ,}) => {
  

 const updateAssesment =() => {
   
 }
=======
const Textinput = ({question, title, updateAssesment, index}) => {
  const [correctOption, setCorrectOption] = useState("")
  const updateContent = () => {
    let newTextInput = {
      question: parse(question).props?.children ? parse(question).props.children : "null question",
      correctAnswer: correctOption.toString(),
      id: generateKey()
    }
    updateAssesment(newTextInput, index)
  }
  
>>>>>>> b59b8587b00a4c6cee52783cc6d4d8cfc86d2f23
  return (
    <Card sx={{ width: '100', height: '100' , padding:'12px', paddingTop: "6px"
    , fontSize:'18px',
    borderTopLeftRadius: "0px", borderTopRightRadius: "0px", paddingLeft: "24px"
    }}>
      


      <div className="box">
        {/* <h2 style={{marginTop: "6px", fontFamily: "Montserrat"}}>{title}</h2> */}

        <p style={{
          fontSize: "16px",
          fontFamily: "Helvetica",
          marginBottom: "24px"
        }}>
          {parse(question)}
        </p>

        <TextField variant="outlined" label="Enter correct answer"
        sx={{width:'50%'}} value={correctOption} onChange={(e)=>{
          setCorrectOption(e.target.value)
        }}/><br/>
        <Button variant="contained" sx={{
          margin: "12px 0px 12px 0px"
        }}
        onClick={()=>{
updateContent()
        }}
        >Save</Button>
      </div>
      
    </Card>
  )
}
export default Textinput;