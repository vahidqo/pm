import * as React from "react";
import {
    TextInput,
    Filter
}
from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    width: { width: 205 }
});

const AssetSubdivisionFilter = (props) =>{
    const classes = useStyles();
    return (
    <Filter {...props}>
        <TextInput className={classes.width} source="AssetCode__icontains" label="کد تجهیز" textAlgin="right" alwaysOn resettable />
        <TextInput className={classes.width} source="AssetName__icontains" label="نام تجهیز" textAlgin="right" alwaysOn resettable />
        <TextInput className={classes.width} source="AssetChildID__AssetClassName__icontains" label="کلاس تجهیز" alwaysOn resettable />
    </Filter>
);
};


export default AssetSubdivisionFilter;
