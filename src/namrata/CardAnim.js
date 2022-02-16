import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import GroupImg from '../namrata/images/GroupImg.png';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardAnim(props) {
    let { name } = props
    return (
        <div className="container">
            <Card sx={{ maxWidth: 1000, minHeight: 350 }} style={{ display: 'flex', backgroundColor: '#5468E7', borderRadius: '30px' }}>
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
                <div className="group" >
                    <img src={GroupImg} alt="qwerty" style={{ width: '80%', position: 'relative', left: '20%', top: '10%' }} />
                </div>
            </Card>
        </div>
    );
}
