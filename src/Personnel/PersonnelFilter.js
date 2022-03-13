import * as React from "react";
import {
    Filter,
    TextInput,
}
from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    width: { width: 180 },
});

const PersonnelFilter = (props) => {
    const classes = useStyles();
    return(
    <Filter {...props}>
        <TextInput className={classes.width} label="کد پرسنلی" textAlgin="right" source="PersonnelCode__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="کد نت نیروی انسانی" textAlgin="right" source="PersonnelNetCode__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="نام نیروی انسانی" textAlgin="right" source="PersonnelName__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="نام خانوادگی نیروی انسانی" textAlgin="right" source="PersonnelFamily__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="شماره نیروی انسانی" textAlgin="right" source="PersonnelMobile__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="دپارتمان" textAlgin="right" source="DepartmentID__DepartmentName__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="کاربر" source="user__username__icontains" alwaysOn resettable />
    </Filter>
);
    };


export default PersonnelFilter;
