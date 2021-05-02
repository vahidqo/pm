import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    required,
    TextInput,
    SelectInput,
    NumberInput,
    RadioButtonGroupInput
}
from 'react-admin';
import { parse } from 'query-string';
import JobCategoryRefrenceInput from './JobCategoryRefrenceInput';
import TaskTypeRefrenceInput from './TaskTypeRefrenceInput';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    fir: { display: 'inline-block' },
    sec: { display: 'inline-block', marginRight: 120 },
    width: { width: 712 },
    last: { display: 'inline-block', marginRight: 0 },

});

const freq = [
    { _id: 'D', full_name: 'روزانه'},
    { _id: 'W', full_name: 'هفتگی'},
    { _id: 'M', full_name: 'ماهانه'},
    { _id: 'Y', full_name: 'سالانه'},
    { _id: 'F', full_name: 'وظیفه‌ای'},
];

const fun = [
    { _id: 'O', full_name: 'اپراتور'},
    { _id: 'T', full_name: 'تکنسین' },
];

const Separator = () => <Box pt="0em" />;

const AssetClassTaskAddCreate = props => {
    const classes = useStyles();

    const { AssetClassID: AssetClassID_string } = parse(props.location.search);
    const AssetClassID = AssetClassID_string ? parseInt(AssetClassID_string, 10) : '';
    const redirect = AssetClassID ? `/PMWorks/AssetClass/${AssetClassID}/show/PMWorks/AssetClassTask` : false;

    return (
    <Create {...props} title="ایجاد فعالیت">
        <SimpleForm initialValues={{ AssetClassID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <TextInput formClassName={classes.fir} label="کد فعالیت" textAlgin="right" source="TaskCode" />
            <TextInput formClassName={classes.sec} label="نام فعالیت" textAlgin="right" source="TaskName" />
            <TextInput className={classes.width} multiline label="توضیحات فعالیت" textAlgin="right" source="TaskDescription"/>
            <Separator />
            <SelectInput formClassName={classes.fir} label="مقدار تناوب" textAlgin="right" source="FrequencyName" choices={freq} optionText="full_name" optionValue="_id" />
            <NumberInput formClassName={classes.sec} label="مقدار تناوب" textAlgin="right" source="FrequencyAmount" />
            <Separator />
            <NumberInput formClassName={classes.fir} label="مدت زمان انجام" textAlgin="right" source="DurationOfDo" />
            <RadioButtonGroupInput formClassName={classes.sec} label="مسئول" textAlgin="right" source="Functor" choices={fun} optionText="full_name" optionValue="_id" />
            <Separator />
            <TaskTypeRefrenceInput formClassName={classes.fir} label="کد فعالیت" textAlgin="right" source="TaskTypeID" reference="PMWorks/TaskType" allowEmpty validate={required()} perPage={10000} />
            <JobCategoryRefrenceInput formClassName={classes.last} label="کد شغل" textAlgin="right" source="JobCategoryID" reference="PMWorks/JobCategory" allowEmpty validate={required()} perPage={10000} />
        </SimpleForm>
    </Create>
    );
};


export default AssetClassTaskAddCreate;