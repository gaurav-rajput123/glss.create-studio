import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import GroupImg from '../namrata/images/GroupImg.png';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Modal } from '@mui/material';
import Form from '../vikram/Form';

export default function CardAnim({name, toShow}) {
    const [open, setOpen] = useState(false)
    const showModal = ( arg) => {
        setOpen(arg)
    }
    const [isDis, setIsDis] = useState(false)
    // let { name } = props
    return (
        <div className="container">
            <Modal open={open} onClose={()=>{
                setOpen(false)
                console.log(open)
            }} >
            <Form  closeModal={showModal}/>
            </Modal>
            <Card sx={{ maxWidth: 1000, minHeight: 300 ,}} style={{ display: 'flex', backgroundColor: '#5468E7', borderRadius: '30px', position: 'relative',margin: "6px 2px 6px 10px" }}>
                <div className="text" style={{ margin: '0 5% 0 0', width: '110%', paddingLeft: "14px" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Montserrat', fontSize: '40px', fontWeight: '600', color: 'white' }}>
                            Welcome {name}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '500', color: 'white'}}>
                            { !isDis ? <>Start making your first Course or Program by <br/> clicking on the button below.</> : <>Add your modules and content for your course</>}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button 
                        onClick={()=>{
                            setIsDis(true)
                            showModal(true)}} disabled={isDis}   
                             
                        size="large" variant="outlined" style={{ fontFamily: 'Montserrat', fontSize: '14px', color: '#334155', borderRadius: '25px', backgroundColor: !isDis ? 'white' : "gray", position: 'absolute', bottom: '10%', display: isDis ? "none" : 'block' }}><b>{!isDis ? <>NEW COURSE</> : <>ADD MODULES</>}</b></Button>
                    </CardActions>
                </div>
                {/* <div className="group" > */}
                    <img src={GroupImg} alt="qwerty" style={{  position: 'absolute', right: '05%', bottom: '0%', width: "330px", height: "260px" }} />
                {/* </div> */}
            </Card>
        </div>
    );
}
