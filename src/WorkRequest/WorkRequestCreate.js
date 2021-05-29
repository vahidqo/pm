import * as React from "react";
import {
    SimpleForm,
    ReferenceInput,
    Create,
    SelectInput,
    FormDataConsumer,
}
from 'react-admin';
import AssetSubdivisionRefrenceInput from './AssetSubdivisionRefrenceInput';
import FailureModeRefrenceInput from './FailureModeRefrenceInput';
import WorkPriorityRefrenceInput from './WorkPriorityRefrenceInput';
import TypeWrRefrenceInput from './TypeWrRefrenceInput';

import { DateInput } from '../Components/JalaliDatePicker';
import { DateInputtoday } from '../Components/JalaliDatePickertoday';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    fir: { display: 'inline-grid' },
    sec: { display: 'inline-grid', marginRight: 0 },
    thi: { display: 'inline-grid', marginRight: 0 },

});

const Separator = () => <Box pt="0em" />;
const Separator2 = () => <Box pt="1.5em" />;

export const WorkRequestCreate = props => {
    const classes = useStyles();
    var today = new Date();

    return (
        <Create {...props} title="ایجاد درخواست کار">
            <SimpleForm initialValues={{ WRDateOfRegistration: today}}>
                <DateInputtoday formClassName={classes.fir} label="تاریخ ثبت" source="WRDateOfRegistration" disabled/>
                <DateInput formClassName={classes.sec} label="تاریخ" source="WRDate" />
                <Separator />
                <AssetSubdivisionRefrenceInput formClassName={classes.fir} label="نام تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision" perPage={10000} />
                <Separator />
                <FormDataConsumer formClassName={classes.fir}>
                 {({ formData, ...rest }) => formData.AssetSubdivisionID &&
                    <ReferenceInput  label="کد تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision" {...rest}>
                        <SelectInput optionText="AssetCode" />
                    </ReferenceInput>
                 }
                </FormDataConsumer>
                <FormDataConsumer formClassName={classes.sec}>
                 {({ formData, ...rest }) => formData.AssetSubdivisionID &&
                    <FailureModeRefrenceInput label="خرابی" textAlgin="right" source="FailureModeID" reference="PMWorks/FailureAsset" perPage={10000} filter={{ AssetClassID: formData.AssetSubdivisionID }} {...rest} />
                 }
                </FormDataConsumer>
                <Separator />
                <FormDataConsumer formClassName={classes.fir}>
                 {({ formData, ...rest }) => formData.AssetSubdivisionID &&
                    <ReferenceInput label="کد کلاس تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision" {...rest}>
                        <SelectInput optionText="AssetClassCodeChain" />
                    </ReferenceInput>
                 }
                </FormDataConsumer>
                <FormDataConsumer formClassName={classes.sec}>
                 {({ formData, ...rest }) => formData.AssetSubdivisionID &&
                    <WorkPriorityRefrenceInput label="اولویت" textAlgin="right" source="WorkPriorityID" reference="PMWorks/WorkPriority" perPage={10000} {...rest} />
                 }
                </FormDataConsumer>
                <Separator />
                <FormDataConsumer formClassName={classes.fir}>
                 {({ formData, ...rest }) => formData.AssetSubdivisionID &&
                    <ReferenceInput label="نام کلاس تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision" {...rest}>
                        <SelectInput optionText="AssetClassNameChain" />
                    </ReferenceInput>
                 }
                </FormDataConsumer>
                <FormDataConsumer formClassName={classes.sec}>
                 {({ formData, ...rest }) => formData.AssetSubdivisionID &&
                    <TypeWrRefrenceInput label="نوع" textAlgin="right" source="TypeWrID" reference="PMWorks/TypeWr" perPage={10000} {...rest} />
                 }
                </FormDataConsumer>
                
                
            </SimpleForm>
        </Create>
    );
};