import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';

const Topbar = () => {
    return <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: '#80808000', color: 'black' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}

                    >

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <Typography sx={{ flexGrow: 1 }} style={{ display: 'flex' }} >
                        <Typography variant="h6" style={{ paddingRight: '30px' }}>
                            <Button sx={{color:"black"}} variant='text'>About</Button>
                        </Typography>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            <Button  sx={{color:"black"}} variant='text'>Create Studio</Button>
                        </Typography>
                    </Typography>
                    <IconButton

                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        // onClick={handleprofile}
                        color="inherit"
                    >
                         <Avatar alt="Gaurav" src="" />
                    </IconButton >
                </Toolbar>
            </AppBar>
        </Box>
    </>;
};

export default Topbar;
