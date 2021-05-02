import React from 'react';
import { Paper, withStyles, Grid, Button, FormControlLabel, Checkbox } from '@material-ui/core';

import MyPassField from "./MyPassField";
import MyUserField from "./MyUserField";
import MyCarousel from './CarouselNew';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    },
     root: {
        margin: '50px 225px 0 0',
    display: 'flex',
    height: '530px',
    '& > *': {
      margin: theme.spacing(0.1),
    },
  },
  Paper1: {
    width: '554px',
  },
  Paper2: {
    width: '323px',
  },
    img1:{
        height: '50px',
        margin: '5px 70px 0 0',
    },
    h3:{
        margin: '5px 5px 0 5px',
    },
    p:{
        margin: '5px 5px 0 5px',
    },
});

class MyLoginPage extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} dir="rtl">
                <Paper className={classes.Paper2}>
                    <div>
                            <Grid container direction={"column"} spacing={2} >
                                <Grid item >
                                    <img className={classes.img1} src="http://uupload.ir/files/5pq3_لوگوی_شرکت.png" alt="شرکت مشاوان تدبیرپرداز" />
                                </Grid>
                                <Grid item>
                                    <h3 className={classes.h3}>ورود به نرم افزار نگهداری و تعمیرات شرکت مشاوران تدبیرپرداز آویژه</h3>
                                </Grid>
                                <Grid item>
                                    <p className={classes.p}>برای ورود لطفا نام کاربری و رمز عبور خود را وارد کنید.</p>
                                </Grid>
                                        <Grid item>
                                            <MyUserField />
                                        </Grid>
                                        <Grid item >
                                            <MyPassField />
                                        </Grid>
                            </Grid>
                                    <Grid container alignItems="center" justify="space-between">
                                        <Grid item>
                                            <FormControlLabel className={classes.label} control={
                                                <Checkbox
                                                    color="primary"
                                                />
                                            } label="یادآوری" />
                                        </Grid>
                                    </Grid>
                                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>ورود</Button>
                                    </Grid>
                    </div>
                </Paper>
                <Paper className={classes.Paper1}>
                    <box>
                    </box>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(MyLoginPage);