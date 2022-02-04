import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import React, { useState } from 'react';

function TextNLabel({ isLabelShown, setIsLabelShown, label, setLabel }) {

    const [labelIn, setLabelIn] = useState(label)

    return (
        isLabelShown ?
            (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Typography fontSize={20} >
                        {labelIn}
                    </Typography>
                </div>
            )
            :
            (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <TextField
                        type='text'
                        placeholder='Add Section'
                        variant="filled"
                        onChange={(e) => setLabelIn(e.target.value)}
                        label="Set Title" />
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
