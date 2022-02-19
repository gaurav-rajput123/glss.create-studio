import * as React from "react";
import { useState } from "react";
import { TextField } from '@mui/material';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import parse from 'html-react-parser'
import generateKey from "../../resources/generateKey";
export default function CheckCard({ question, updateAssesment, index }) {
  // const [para, setPara] = useState("Questions ");
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
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div>
          <Typography
            variant="h4"
            sx={{ margin: "5px 5px 5px 25px" }}
            color="text.secondary"
          >
            Checkboxes
          </Typography>


          <Typography sx={{ marginLeft:"30px" }} variant="h7">
            {
              parse(question)
            }
          </Typography>

        </div>
        <div>
          <div>
            <TextField sx={{ margin: "40px 5px 10px 25px", }} id="standard-basic" label="Add Option" variant="standard" value={newOption} onChange={(e) => {
              setNewOption(e.target.value)
            }} />
            <Button sx={{ margin: "50px 50px 6px 25px" , backgroundColor:"#7d8285"}} variant="contained" onClick={() => {
              let newOptionArr = [...options]
              let newOptionObject = {
                name: newOption,
                value: newOption,
                id: generateKey(),
                // question: question.toString()
              }
              newOptionArr.push(newOptionObject)
              setOptions(newOptionArr)
              setNewOption("")
            }}> ADD NEW OPTION </Button>

          </div>
          <FormControl>
            <FormLabel id="MCQ"></FormLabel>
            <RadioGroup aria-labelledby="CORRECT ANSWER " name="ANSWERS"
              onChange={(e)=>{
                setCorrectOption(e.target.value)
              }}
            >
              {
                options.map((item, index) => {
                  return (
                    <FormControlLabel
                      value={item.value}
                      control={<Radio />}
                      label={item.name}
                      key={item.id}
                    />
                  )
                })
              }

            </RadioGroup>
          </FormControl>
        </div>
        <Button sx={{ margin: "40px 5px 10px 25px", width:"100px" , backgroundColor:"#7d8285"}} variant="contained" onClick={updateContent}>
          SAVE
        </Button>
      </CardContent>

    </Card>
  );
}
