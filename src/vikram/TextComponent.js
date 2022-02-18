import * as React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from '@mui/material/FormHelperText';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3)
  },

  "& .MuiInputBase-input": {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    // width: "100%",
    padding: "10px 0px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow"
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ['Montserrat'].join(",")
  }
}));

export default function TextBox({ heading, label, helpertext, handler, name }) {

  return (
    <Box component="form" display="flex" sx={{ padding: "6px", width: "50%", alignItems: "center" }}>
      <FormControl fullWidth width="60%" variant="standard" sx={{
        justifyContent: "center"
      }}>
        {/* <InputLabel
        
          shrink
          sx={{ fontSize: "24px", fontWeight: "400", color: "black" }}

        >
          {heading}
        </InputLabel> */}
        <BootstrapInput fullWidth placeholder={label} id="bootstrap-input" onChange={(e) => {
          handler(name, e.target.value)
        }} />
        <FormHelperText>
          {helpertext}
        </FormHelperText>
      </FormControl>
    </Box>
  );
}