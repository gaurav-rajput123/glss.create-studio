import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import React, { useState } from 'react';

function TextNLabel() {
    const [title, setTitle] = useState('Section')
    const [isLabel, setIsLabel] = useState(false)
    const [label, setLabel] = useState("Title")

    return (
        isLabel ?
            (
                <div onClick={()=>setIsLabel(!isLabel)}>
                    <Typography >
                    {label}
                </Typography>
                </div>
            )
            :
            (
                <div>
                    <TextField
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        label="Section 1" />
                    <Button onClick={() => setIsLabel(!isLabel)}>
                        <Typography>
                            Set Title
                        </Typography>
                    
                    </Button>
                </div>
            )
    )
}

export default TextNLabel;
