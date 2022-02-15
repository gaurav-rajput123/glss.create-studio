import { Grid } from "@mui/material";
import Middle from "./namrata/Middle";

export default function Home(){
    return (
        <Grid container>
            <Grid item xs={1}/>
            <Grid item xs={6}></Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={1}/>
            <Grid item xs={12}>
                <Middle/>
            </Grid>
        </Grid>
    )
}