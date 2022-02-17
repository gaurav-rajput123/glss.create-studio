import { Grid } from "@mui/material";
import Fstcntnr from "./namrata/Fstcntnr";
import Secndcntnr from "./namrata/Secndcntnr";
import AnimationGrid from "./namrata/AnimationGrid";
import Topbar from "./namrata/Topbar";

// import  from "./namrata/";


export default function Home() {
    return (

        <Grid container>
            <Grid item xs={12} sx={{}}>
                <Topbar />
            </Grid>
            <Grid item xs={12} sx={{}}>
                <Fstcntnr />
            </Grid>
            <Grid item xs={12} sx={{}} >
                <Secndcntnr />
            </Grid>
            <Grid item xs={12} sx={{}}>
                <AnimationGrid />
            </Grid>
            <Grid >

            </Grid>

        </Grid>
    )
}