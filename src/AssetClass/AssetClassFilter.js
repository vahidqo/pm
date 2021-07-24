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

const AssetClassFilter = (props) =>{
    const classes = useStyles();
    return (
    <Filter {...props}>
        <TextInput className={classes.width} source="AssetClassCode" label="کد خانواده تجهیز" textAlgin="right" alwaysOn resettable />
        <TextInput className={classes.width} source="AssetClassName" label="نام خانواده تجهیز" textAlgin="right" textAlgin="right" alwaysOn resettable />
        <TextInput className={classes.width} source="AssetCategoryID__AssetCategoryName" label="گروه خانواده تجهیز" alwaysOn resettable />
    </Filter>
);
};


export default AssetClassFilter;
