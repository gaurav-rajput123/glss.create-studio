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
export default function CheckCard({ question }) {
  // const [para, setPara] = useState("Questions ");
  let [newOption, setNewOption] = useState('')
  let [options, setOptions] = useState([])
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div>
          <Typography
            variant="h4"
            sx={{ padding: "5px 5px 10px 5px" }}
            color="text.secondary"
          >
            Checkboxes
          </Typography>
          {/* <Typography
          sx={{ padding: "5px 5px 10px 5px" }}
          variant="h5"
          component="div"
        >
          {para}
        </Typography> */}

          <Typography sx={{ padding: "5px 5px 10px 5px" }} variant="h7">
            {
              parse(question)
            }
          </Typography>
          {/* <Typography sx={{ fontSize: 14, padding: "5px 5px 10px 5px" }}>
          you can add an optional tip or note related to prompt like this.
        </Typography> */}
        </div>
        <div>
          <div>
            <TextField sx=  {{margin: "50px 5px 50px 5px",}} id="standard-basic" label="Add Option" variant="standard" value={newOption} onChange={(e) => {
              setNewOption(e.target.value)
            }} />
            <Button sx={{ margin: "50px 50px 6px 5px", padding: "12px", backgroundColor: "#7d8285" }} variant="contained" onClick={() => {
              let newOptionArr = [...options]
              newOptionArr.push(newOption)
              setOptions(newOptionArr)
              setNewOption("")
            }}> NEW OPTION </Button>

          </div>
          <FormControl>
            <FormLabel id="MCQ"></FormLabel>
            <RadioGroup aria-labelledby="CORRECT ANSWER " name="ANSWERS">
              {
                options.map((item, index) => {
                  return (
                    <FormControlLabel
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  )
                })
              }

            </RadioGroup>
          </FormControl>
        </div>
      </CardContent>
      <Button sx={{ margin: "5px 5px 10px 15px", backgroundColor: "#7d8285" }} variant="contained">
        SUBMIT
      </Button>
    </Card>
  );
}
