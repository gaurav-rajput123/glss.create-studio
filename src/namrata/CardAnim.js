import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import GroupImg from '../namrata/images/GroupImg.png';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardAnim({name}) {
    // let { name } = props
    return (
        <div className="container">
            <Card sx={{ maxWidth: 1000, minHeight: 300 }} style={{ display: 'flex', backgroundColor: '#5468E7', borderRadius: '30px', position: 'relative' }}>
                <div className="text" style={{ margin: '0 5% 0 0', width: '110%' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Montserrat', fontSize: '40px', fontWeight: '600', color: 'white' }}>
                            Welcome Back, {name}!
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500', color: 'white' }}>
                            Start making your first Course or Program by clicking on the button below.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="large" variant="outlined" style={{ fontFamily: 'Montserrat', fontSize: '20px', color: '#334155', borderRadius: '25px', backgroundColor: 'white' }}><b>NEW COURSE</b></Button>
                    </CardActions>
                </div>
                {/* <div className="group" > */}
                    <img src={GroupImg} alt="qwerty" style={{  position: 'absolute', right: '05%', bottom: '0%', width: "300px", height: "240px" }} />
                {/* </div> */}
            </Card>
        </div>
    );
}
