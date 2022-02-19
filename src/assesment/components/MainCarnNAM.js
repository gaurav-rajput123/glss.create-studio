import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Typography, Button, TextField, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import parse from "html-react-parser";
import SubjectTile from "./AnswerTile";
import generateKey from '../../resources/generateKey';


export default function MainCard({ question, updateAssesment, index }) {

    let [newOption, setNewOption] = useState('')
    let [options, setOptions] = useState([])
    const [correctOption, setCorrectOption] = useState('')
    const updateContent = () => {
        let newMCQ = {
            question: parse(question).props.children,
            options: options,
            correctOption: correctOption,
            id: generateKey()
        }
        updateAssesment(newMCQ, index)
    }
    return (
        <Card sx={{ minWidth: 200, height: "auto" }}>
            <CardContent>

                <Typography sx={{margin: "5px 5px 0px 25px" }}  variant="h4" color="text.secondary">
                    Checkbox Assessment
                </Typography>
                <Typography sx={{margin: "5px 5px 0px 25px"}}  variant="h7" component="div">
                    {parse(question)}
                </Typography>

             
                <TextField sx={{marginLeft:"30px", marginTop:"30px" }} id="standard-basic" label="Add Option" variant="standard" value={newOption} onChange={(e) => {
                    setNewOption(e.target.value)
                }} />
                <Button sx={{ marginTop:"40px" , marginLeft:"20px", backgroundColor:"#7d8285"}}   variant="contained" onClick={() => {
                    let newOptionArr = [...options]
                    let newOptionObject = {
                        name: newOption,
                        value: newOption,
                        id: generateKey(),
                        isCorrect: false
                        // question: question.toString()
                    }
                    newOptionArr.push(newOptionObject)
                    setOptions(newOptionArr)
                    setNewOption("")
                }}>ADD NEW OPTION</Button>
                <FormGroup>
                    {
                        options.map((item, itemIndex) => {
                            return (
                                <FormControlLabel control={<Checkbox value={item.value} onChange={(e) => {
                                    let newOptionObject = {
                                        ...options[itemIndex]
                                    }
                                    newOptionObject.isCorrect = e.target.checked
                                    let newOptionsArray = [...options]
                                    newOptionsArray[itemIndex] = newOptionObject
                                    setOptions(newOptionsArray)
                                }}
                                    checked={options[itemIndex].isCorrect}
                                />}
                                 label={item.name} />
                            )
                        })
                    }


                </FormGroup>




                <Button  sx={{margin: "5px 5px 10px 30px" , backgroundColor:"#7d8285" }} variant="contained" size="medium" style={{ marginTop: "80px" }} onClick={() => {
                    updateContent()
                }}>Submit</Button>
            </CardContent>

        </Card>
    );
}