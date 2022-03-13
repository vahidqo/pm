import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    width: { width: 185 },
});

const SparePartFilter = (props) => {
    const classes = useStyles();
    return(
    <Filter {...props}>
        <TextInput className={classes.width} label="کد قطعه" textAlgin="right" source="SparePartCode__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="نام قطعه" textAlgin="right" source="SparePartName__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="خانواده قطعه" textAlgin="right" source="SparePartCategoryID__SparePartCategoryName__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="سطح قطعه" textAlgin="right" source="SparePartDimensionID__SparePartDimensionName__icontains" alwaysOn resettable/>
    </Filter>
);
    };


export default SparePartFilter;
