import * as React from "react";
import {
    Filter,
    TextInput,
    SelectInput,
    NumberInput
}
from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    width: { width: 135 },
});

const freq = [
    { _id: 'D', full_name: 'روزانه'},
    { _id: 'W', full_name: 'هفتگی'},
    { _id: 'M', full_name: 'ماهانه'},
    { _id: 'Y', full_name: 'سالانه'},
    { _id: 'F', full_name: 'وظیفه‌ای'},
];


const AssetClassTaskFilter = (props) => {
    const classes = useStyles();
    return(
    <Filter {...props}>
        <TextInput className={classes.width} label="نام فعالیت" textAlgin="right" source="TaskName__icontains" alwaysOn resettable />
        <SelectInput className={classes.width} label="تناوب" textAlgin="right" source="FrequencyName_exact" choices={freq} optionText="full_name" optionValue="_id" alwaysOn resettable/>
        <NumberInput className={classes.width} label="مقدار تناوب" textAlgin="right" source="FrequencyAmount_exact" alwaysOn resettable/>
        <TextInput className={classes.width} label="نوع فعالیت" textAlgin="right" source="TaskTypeID__TaskTypeName__icontains" alwaysOn resettable />
        <TextInput className={classes.width} label="شغل" textAlgin="right" source="JobCategoryID__JobCategoryName__icontains" alwaysOn resettable />
    </Filter>
);
    };


export default AssetClassTaskFilter;
