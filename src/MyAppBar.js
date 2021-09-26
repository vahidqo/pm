import React from 'react'
import { AppBar } from 'react-admin'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import BackIcon from '@material-ui/icons/ArrowBack'
import BackButton from './Components/BackButton'
import Clock from 'react-live-clock';
import jMoment from 'moment-jalaali';

const styles = {
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
    tim:{
        marginBottom: '4px',
    },
}

const MyAppBar = withStyles(styles)(({ classes, ...props }) => (
    <AppBar {...props}>
        <Typography
            variant="title"
            color="inherit"
            className={classes.title}
            id="react-admin-title"
        />
        <Clock
          filter={date => jMoment(date).locale('fa').format('تاریخ: dddd jD jMMMM jYYYY ساعت: HH:mm')}
          format={'YYYY-M-D HH:mm'}
          ticking={true}
          className={classes.tim}
           />
        <BackButton
        color='inherit'
        >
            <BackIcon/>
        </BackButton>
    </AppBar>
))

export default MyAppBar