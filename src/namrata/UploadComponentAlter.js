import { Button, Grid, Box, Typography, Switch } from '@mui/material'
import React, { useContext, useState } from 'react'
import styled from '@emotion/styled';
import UploadButton from './Button'
// import LinkIcon from 
import LinkIcon from '@mui/icons-material/Link';
import IosShareIcon from '@mui/icons-material/IosShare';
import img from '../resources/Preview.jpg'
import { formContext } from '../Context';

const Input = styled('input')({
    display: 'none',
});
function UploadComponentAlter({ courseArray, courseIndex, topicIndex, subTopicIndex, setInForm, updateCourseArray, handleClose }) {
    const [imageUrl, setImageUrl] = useState(null)
    const [fileObj, setFileObj] = useState(null)
    const formData = useContext(formContext)
    const handleUpload = (file) => {
        console.log(file)
        // setImageUrl(URL.createObjectURL(file))
        let newCourseArray = [...courseArray]
        newCourseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].resource = {}
        if(newCourseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].resource !== undefined)(newCourseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].resource[setInForm] = true) 

        let newName = courseArray[courseIndex].topics[topicIndex].subTopics[subTopicIndex].id + file.name.substring(file.name.lastIndexOf('.'))
        console.log(newName)
        let newFile = new File([file], newName, { type: file.type })
        console.log(newFile)
        formData.append(setInForm, newFile, newName)
        updateCourseArray(newCourseArray)
        handleClose()

    }

    return (
        <div style={{
            // minWidth: "500px",
            // minHeight: "500px"
        }}>
            <Grid container>
                <Grid item xs={1} />
                <Grid item xs={10.5}>
                    <Grid container>

                        <Grid item xs={3} sx={{ direction: "column" }}>
                            <Box sx={{
                                marginY: "12px"
                            }}>
                                <div className="Transcript">
                                    <Typography sx={{ fontWeight: "bold" }}>Transcript<Switch /></Typography>
                                    {/* <UploadButton
                                        name={"Attach Transcript"}
                                        Icon={<LinkIcon className="attach-icon" />}>
                                    </UploadButton> */}
                                    <label htmlFor="contained-button-file">
                                        <Input accept="image/*" id="contained-button-files" multiple type="file" />
                                        <Button className="upload-button" variant="contained" component="span" >
                                            Attach Transcript
                                        </Button>
                                    </label>
                                </div>
                            </Box>
                            <Box sx={{
                                marginY: "12px"
                            }}>
                                <div className="Thumbnail">
                                    <Typography sx={{ fontWeight: "bold" }}>Thumbnail</Typography>
                                    {/* <UploadButton
                                        name={"Upload Thumbnail"}
                                        Icon={<IosShareIcon className="thumb-icon" />} >
                                    </UploadButton> */}
                                    <label htmlFor="contained-button-file">
                                        <Input accept="image/*" id="contained-button-file" multiple type="file"
                                        onChange={e => {
                                            // console.log(e.target.files[0])
                                            // setFileObj(e.target.files[0])
                                            setImageUrl(URL.createObjectURL(e.target.files[0]))
                                            console.log(imageUrl)
                                        }} />
                                        <Button className="upload-button" variant="contained" component="span"
                                         >
                                            Upload Thumbnail
                                        </Button>
                                    </label>
                                </div>
                            </Box>
                            <Box sx={{
                                marginTop: "48px"
                            }}>
                                <div>
                                    <input
                                        accept="image/*"
                                        type="file"
                                        id="select-image"
                                        style={{ display: 'none' }}
                                        onChange={e => {

                                            setFileObj(e.target.files[0])
                                            setImageUrl(URL.createObjectURL(fileObj))
                                        }}
                                    />
                                    <label htmlFor="select-image">
                                        <Button className="upload-image" variant="contained" color="primary" component="span" style={{ marginLeft: "20px", marginTop: "-20px" }}>
                                            Upload
                                        </Button>
                                    </label>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={9} sx={{
                            border: "3px solid black",
                            // maxHeight: "100%"
                        }}>
                            {/* <Box> */}
                            {
                                imageUrl == null ?
                                    (
                                        <img src={img}
                                            alt="asdf"
                                            style={{
                                                maxWidth: "100%",
                                                maxHeight: "100%",
                                                objectFit: "cover"
                                            }} />
                                    )
                                    :
                                    (
                                        <img src={imageUrl}
                                            alt="hello"
                                            style={{
                                                maxWidth: "100%",
                                                maxHeight: "400px",
                                                objectFit: "cover"
                                            }} />
                                    )}
                            {/* </Box> */}
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={0.5} />
                <Grid item xs={12} sx={{
                    // border: "2px black solid",
                    marginTop: "48px",
                    marginX: "48px"
                }}>
                    <Button onClick={() => {
                        console.log(imageUrl)
                        handleUpload(fileObj)
                    }}
                        fullWidth
                        disabled={fileObj == null ? true : false}
                        sx={{
                            padding: "12px",
                            borderRadius: "6px",

                        }}
                        variant='contained'
                    >
                        SAVE

                    </Button>
                </Grid>
            </Grid>


        </div>
    )
}

export default UploadComponentAlter