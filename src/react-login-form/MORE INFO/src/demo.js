import React from "react";
import { withStyles, MenuItem } from "@material-ui/core";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
// import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import { teal, grey } from "@material-ui/core/colors";

const styles = (theme) => ({
  root: {
    flexGrow: 1
  },
  primaryColor: {
    color: teal[500]
  },
  secondaryColor: {
    color: grey[700]
  },

  padding: {
    padding: 0
  },
  mainHeader: {
    backgroundColor: grey[100],
    padding: 20,
    alignItems: "center"
  },
  mainContent: {
    padding: 40
  },
  secondaryContainer: {
    padding: "20px 25px",
    backgroundColor: grey[200]
  }
});

function WireInfo(props) {
  const { classes, open, onClose } = props;
  const [values, setValues] = React.useState({
    shipping: "Cat in the Hat",
    country: "",
    city: "",
    state: "",
    postalCode: "",
    address: ""
  });

  return (
    <Dialog
      className={classes.root}
      fullWidth
      maxWidth="md"
      open={true}
      onClose={() => onClose("wireModal")}
    >
      <DialogContent className={classes.padding}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container direction="row" className={classes.mainHeader}>
              <Typography className={classes.primaryColor} variant="h5">
                Additional information about you
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              className={classes.mainContent}
              spacing={1}
            >
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  row="2"
                  variant="outlined"
                  label="Qulification"
                  id="qulafication"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Department Name"
                  id="Department"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Email"
                  id="email"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Experience"
                  id="Experienc"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label=" E-Learning Devloper & Publisher Experience"
                  id=" devloper Experienc"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label=" Online Instructor experience"
                  id=" online Experienc"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label=" Industry Experience"
                  id=" Industry Experienc"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  label="Degination"
                  id="Dignation"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  multiline
                  rows="5"
                  variant="outlined"
                  label="Area of specialization"
                  id="speicalization"
                />
                <Grid item xs={12}>
                  <Divider />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  multiline
                  rows="5"
                  variant="outlined"
                  label="No. of book Authored/Co-\Authored"
                  id="Author"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  multiline
                  rows="5"
                  variant="outlined"
                  label="No. of workspace attend"
                  id="Workspace"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  multiline
                  rows="5"
                  variant="outlined"
                  label="No.of research paper published in national journals/international journals(UGC listed/Scopus/SCI etc"
                  id="jounals"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  multiline
                  rows="5"
                  variant="outlined"
                  label="No. of paper present in national/international seminar/conference"
                  id="papers"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  multiline
                  rows="5"
                  variant="outlined"
                  label="No. of book edited"
                  id="Books edited"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ justifyContent: "center" }}>
              <Button
                sx={{
                  // marginLeft: "60px",
                  // marginRight: "60px",
                  fontSize: "15px",
                  background: "#87CEFA ",
                  "&:hover": {
                    background: "#e8e6e5   "
                  },
                  marginX: "auto"
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default withStyles(styles)(WireInfo);
