import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import TextBox from './TextComponent';
import { Card, Grid, Typography } from '@mui/material';
import img1 from './Image/img1.png'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

function Form() {
  return (
    <>
      <Card sx={{ backgroundColor: "#F5F5F5" }}>
        <Grid container >
          <Grid xs={12} textAlign={'center'}>
            <Typography fontSize={"50px"} fontFamily={'Roboto Serif', "sans-serif"}>Course Detail</Typography>
          </Grid>
          <Grid xs={8} width={'100%'}>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '15ch' },
                paddingLeft: "24px"
              }}
              noValidate
              autoComplete="off"
              width={'100%'}
            >

              <div style={{ display: 'block', paddingTop: '50px', paddingBottom: '25px', paddingLeft: '25px' }} >
                <div style={{ display: "flex" }}>
                  <div style={{
                    width: "200px"
                  }}>
                    <Typography fontSize={"16px"} font-family={'Lobster', "cursive"}  sx={{paddingTop:"15px"}}>Course Title*</Typography>
                    <Typography fontSize={"10px"} font-family={'Lobster', "cursive"}>

                    </Typography>
                  </div>
                  <TextBox

                    InputLabelProps={{
                      sx: {
                        color: "Black !important",
                        fontSize: '20px',
                      }
                    }}
                    error
                    id="outlined-error"
                    variant='standard'
                    label="Eg. Introduction to the computer science"
                  />
                </div>
              </div>
              <div style={{ display: 'block', paddingTop: '50px', paddingBottom: '25px', paddingLeft: '25px' }} >
                <div style={{ display: "flex" }}>
                  <div style={{
                    width: "200px"
                  }}>
                    <Typography fontSize={"16px"} font-family={'Lobster', "cursive"} sx={{paddingTop:"15px"}}>Course Discription*</Typography>
                  </div>
                  <TextBox

                    InputLabelProps={{
                      sx: {
                        color: "Black !important",
                        fontSize: '20px',
                      }
                    }}
                    error
                    id="outlined-error"
                    variant='standard'
                    label="Eg. Introduction to the computer science"
                  />
                </div>
              </div>


              <div style={{ display: 'block', paddingTop: '50px', paddingBottom: '25px', paddingLeft: '25px' }} >
                <div style={{ display: "flex" }}>
                  <div style={{
                    width: "200px"
                  }}>
                    <Typography fontSize={"16px"} font-family={'Lobster', "cursive"}>Course Number*</Typography>
                    <Typography fontSize={"10px"} font-family={'Lobster', "cursive"}>
                      Any instruction that you want <br />to give or reccomend for this topic .
                    </Typography>
                  </div>
                  <TextBox

                    InputLabelProps={{
                      sx: {
                        color: "Black !important",
                        fontSize: '20px',
                      }
                    }}
                    error
                    id="outlined-error"
                    variant='standard'
                    label="Eg. CS101"
                  />
                </div>
              </div>


              <div style={{ display: 'block', paddingTop: '50px', paddingBottom: '25px', paddingLeft: '25px' }} >
                <div style={{ display: "flex" }}>
                  <div style={{
                    width: "200px"
                  }}>
                    <Typography fontSize={"16px"} font-family={'Lobster', "cursive"}>Organisation*</Typography>
                    <Typography fontSize={"10px"} font-family={'Lobster', "cursive"}>
                      Any instruction that you want <br />to give or reccomend for this topic .
                    </Typography>
                  </div>
                  <TextBox

                    InputLabelProps={{
                      sx: {
                        color: "Black !important",
                        fontSize: '20px',
                      }
                    }}
                    error
                    id="outlined-error"
                    variant='standard'
                    label="Eg. University or Organisation"
                  />
                </div>
              </div>

              <div style={{ display: 'block', paddingTop: '50px', paddingBottom: '25px', paddingLeft: '25px' }} >
                <div style={{ display: "flex" }}>
                  <div style={{
                    width: "200px"
                  }}>
                    <Typography fontSize={"16px"} font-family={'Lobster', "cursive"} sx={{paddingTop:"25px"}}>Course Duration*</Typography>
                    
                  </div>
                  <TextField
                    id="input-with-icon-textfield"
                    label="Duration"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                </div>
              </div>

              <div  backgroundColor= "#F5F5F5"  style={{  paddingLeft: '450px' }}>
                <Stack spacing={2} direction="row"  >
                  <Button sx={{
                    marginLeft: "60px",
                    marginRight: "60px",
                    fontSize: "15px",
                    background: "#f5f9f9 ",
                    '&:hover': {
                      background: "#e8e6e5   ",
                    }
                  }}>Create course</Button>
                  <Button sx={{
                    marginLeft: "60px",
                    marginRight: "60px",
                    fontSize: "15px",
                    background: "#f5f9f9 ",
                    '&:hover': {
                      background: "#e8e6e5   ",
                    }
                  }} >cancel</Button>
                </Stack>

              </div>
            </Box>
          </Grid>
          <Grid xs={3} marginLeft={'-10%'} sx={{ paddingTop: "95px", }} style={{ flexGrow: 1 }}  >
            <img src={img1} alt='' />
          </Grid>
        </Grid>
      </Card>
    </>
  );
}



export default Form;