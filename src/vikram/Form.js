import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import TextBox from './TextComponent';
import { Card, Grid, Typography } from '@mui/material';
import img1 from './Image/img1.png'

function Form() {
  return (
    <>
      <Card>
        <Grid container >
          <Grid xs={12} textAlign={'center'}>
            <Typography variant='h4'>Course Detail</Typography>
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

              <div style={{ display: 'block', }}>
                <div >
                  <TextBox
                    heading="Course Name*"
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
                  /></div>
              </div>

              <div style={{ display: 'block' }}>
                <div>
                  <TextBox
                    heading="Organisation*"
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
                  /></div>
              </div>

              <div style={{ display: 'block' }}>
                <div>
                  <TextBox
                    heading="Course Number*"
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
                  /></div>
              </div>

              {/* <div style={{ display: 'block' }}>
                <div>
                  <TextBox
                    heading="Course Semester*"
                    InputLabelProps={{
                      sx: {
                        color: "Black !important",
                        fontSize: '20px',
                      }
                    }}
                    error
                    id="outlined-error"
                    variant='standard'
                    label="Eg. 2022_s1"
                  />
                </div>
              </div> */}
              <div style={{ position: 'absolute', left: '8%' }}>
                <Stack spacing={2} direction="row">
                  <Button variant="contained">Create course</Button>
                  <Button variant="contained">cancel</Button>
                </Stack>

              </div>




            </Box>
          </Grid>
          <Grid xs={4} marginLeft={'-10%'}>
            <img src={img1} alt='' />
          </Grid>
        </Grid>
      </Card>
    </>
  );
}



export default Form;