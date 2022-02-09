import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import React, { useState } from 'react';

function TextNLabel({ isLabelShown, setIsLabelShown, setLabel, courseArray, courseIndex }) {

    const [labelIn, setLabelIn] = useState(courseArray[courseIndex].name)

    return (
        isLabelShown ?
            (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Typography fontSize={20} >
                        {courseArray[courseIndex].name}
                    </Typography>
                </div>
            )
            :
            (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <TextField
                        placeholder='Add Section'
                        variant="filled"
                        onChange={(e) => setLabelIn(e.target.value)}
                        label="Set Title"
                        value={labelIn} />
                    <Button onClick={() => {
                        setLabel(labelIn)
                        setIsLabelShown(!isLabelShown)
                    }} sx={{ marginLeft: "12px" }} variant='contained'>
                        <Typography>
                            Set Title
                        </Typography>

                    </Button>
                </div>
            )
    )
}

export default TextNLabel;
