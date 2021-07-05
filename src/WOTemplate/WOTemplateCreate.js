import * as React from "react";
import {
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create,
    NumberInput,
    Toolbar
}
from 'react-admin';
import DepartmentRefrenceInput from './DepartmentRefrenceInput';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { TimeInput } from '../Components/TimeInput';

const useStyles = makeStyles({
    fir: { display: 'inline-block' },
    sec: { display: 'inline-block', marginRight: 60 },
    thi: { display: 'inline' },
});

const Separator = () => <Box pt="0em" />;

const WOTemplateCreate = props => {
    const classes = useStyles();
   
    return (
    <Create {...props} title="ایجاد تناوب دستور کار">
        <SimpleForm toolbar={<Toolbar alwaysEnableSaveButton />}>
            <TextInput formClassName={classes.fir} label="کد" textAlgin="right" source="WOTemplateCode"/>
            <TextInput formClassName={classes.sec} label="نام" textAlgin="right" source="WOTemplateName"/>
            <Separator />
            <NumberInput formClassName={classes.fir} label="روز تناوب" textAlgin="right" source="WOTemplateDurationDay"/>
            <TimeInput formClassName={classes.sec} label="ساعت تناوب" textAlgin="right" source="WOTemplateDurationHour"/>
            <Separator />
            <NumberInput formClassName={classes.fir} label="روز اعلام" textAlgin="right" source="WOTemplateAlarmDay"/>
            <TimeInput formClassName={classes.sec} label="ساعت اعلام" textAlgin="right" source="WOTemplateAlarmHour"/>
            <Separator />
            <ReferenceInput formClassName={classes.thi} label="نوع" textAlgin="right" source="WOTemplateTypeID" reference="PMWorks/WOTemplateType">
                <SelectInput optionText="WOTemplateTypeName" />
            </ReferenceInput>
            <DepartmentRefrenceInput formClassName={classes.sec} label="دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department" perPage={10000} />

        </SimpleForm>
    </Create>
);
};


export default WOTemplateCreate;
