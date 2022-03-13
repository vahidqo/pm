import * as React from "react";
import {
    SimpleForm,
    ReferenceInput,
    Create,
    SelectInput,
    FormDataConsumer,
    TopToolbar,
    ListButton,
    useNotify,
    useRefresh,
    useRedirect,
    TextInput
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
import { TimeInput } from '../Components/TimeInput';
import { TimeInputNow } from '../Components/TimeInputNow';

import moment from "moment";

const CreateActions = ({ basePath, record, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);

const validateError = (values) => {
    const errors = {};
    if (!values.AssetSubdivisionID) {
        errors.AssetSubdivisionID = 'تجهیز را وارد کنید';
    }
    if (!values.AssetSubdivisionID) {
        errors.AssetSubdivisionID = 'کلاس تجهیز را وارد کنید';
    }
    return errors
};

const useStyles = makeStyles({
    fir: { display: 'inline-grid' },
    sec: { display: 'inline-grid', marginRight: 0 },
    thi: { display: 'inline-grid', marginRight: 0 },
    sel: { '& svg': {display: 'none' }},
    width: { display: 'inline-grid', width: 533, '& label': {marginRight: '25px'} },
});

const Separator = () => <Box pt="0em" />;

export const WorkRequestCreate = props => {
    const classes = useStyles();
    var today = new Date();
    var time = moment().format("HH:mm");
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();
    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect('/PMWorks/WorkRequest');
        redirect('/PMWorks/WorkRequest/create');
        refresh();
    };

    return (
        <Create actions={<CreateActions />} onSuccess={onSuccess} {...props} title="ایجاد درخواست کار">
            <SimpleForm validate={validateError} initialValues={{ WRDateOfRegistration: today, WRDate: today, WRTimeOfRegistration: time, WRTime: time}}>
                <DateInputtoday formClassName={classes.fir} label="تاریخ ثبت" source="WRDateOfRegistration" disabled/>
                <TimeInputNow formClassName={classes.sec} label="ساعت ثبت" textAlgin="right" source="WRTimeOfRegistration"/>
                <Separator />
                <DateInput formClassName={classes.fir} label="تاریخ" source="WRDate" />
                <TimeInput formClassName={classes.sec} label="ساعت" textAlgin="right" source="WRTime"/>
                <Separator />
                <ReferenceInput className={classes.sel} disabled formClassName={classes.fir} label="کد تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                    <SelectInput optionText="AssetCode" />
                </ReferenceInput>
                <AssetSubdivisionRefrenceInput formClassName={classes.sec} label="نام تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision" perPage={10000} />
                <Separator />
                <FormDataConsumer className={classes.sel} formClassName={classes.fir}>
                 {({ formData, ...rest }) => formData.AssetSubdivisionID &&
                    <ReferenceInput className={classes.sel} disabled label="کد کلاس تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision" {...rest}>
                        <SelectInput optionText="AssetClassCodeChain" />
                    </ReferenceInput>
                 }
                </FormDataConsumer>
                <FormDataConsumer className={classes.sel} formClassName={classes.sec}>
                 {({ formData, ...rest }) => formData.AssetSubdivisionID &&
                    <ReferenceInput className={classes.sel} disabled label="نام کلاس تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision" {...rest}>
                        <SelectInput optionText="AssetClassNameChain" />
                    </ReferenceInput>
                 }
                </FormDataConsumer>
                <Separator />
                <FormDataConsumer className={classes.sel} formClassName={classes.fir}>
                 {({ formData, ...rest }) => formData.AssetSubdivisionID &&
                    <ReferenceInput className={classes.sel} disabled label="کد خرابی" textAlgin="right" source="FailureModeID" reference="PMWorks/FailureAsset" {...rest}>
                        <SelectInput optionText="FailureModeCode" />
                    </ReferenceInput>
                 }
                </FormDataConsumer>
                <FormDataConsumer formClassName={classes.sec}>
                 {({ formData, ...rest }) => formData.AssetSubdivisionID &&
                    <FailureModeRefrenceInput label="نام خرابی" textAlgin="right" source="FailureModeID" reference="PMWorks/FailureAsset" perPage={10000} filter={{ AssetClassID: formData.AssetSubdivisionID }} {...rest} />
                 }
                </FormDataConsumer>
                <Separator />
                <FormDataConsumer className={classes.sel} formClassName={classes.fir}>
                 {({ formData, ...rest }) => formData.AssetSubdivisionID &&
                    <ReferenceInput className={classes.sel} disabled label="کد اولویت" textAlgin="right" source="WorkPriorityID" reference="PMWorks/WorkPriority" {...rest}>
                        <SelectInput optionText="WorkPriorityCode" />
                    </ReferenceInput>
                 }
                </FormDataConsumer>
                <FormDataConsumer formClassName={classes.sec}>
                 {({ formData, ...rest }) => formData.AssetSubdivisionID &&
                    <WorkPriorityRefrenceInput label="نام اولویت" textAlgin="right" source="WorkPriorityID" reference="PMWorks/WorkPriority" perPage={10000} {...rest} />
                 }
                </FormDataConsumer>
                <Separator />
                <FormDataConsumer className={classes.sel} formClassName={classes.fir}>
                 {({ formData, ...rest }) => formData.AssetSubdivisionID &&
                    <ReferenceInput className={classes.sel} disabled label="کد نوع" textAlgin="right" source="TypeWrID" reference="PMWorks/TypeWr" {...rest}>
                        <SelectInput optionText="TypeWrCode" />
                    </ReferenceInput>
                 }
                </FormDataConsumer>
                <FormDataConsumer formClassName={classes.sec}>
                 {({ formData, ...rest }) => formData.AssetSubdivisionID &&
                    <TypeWrRefrenceInput label="نام نوع" textAlgin="right" source="TypeWrID" reference="PMWorks/TypeWr" perPage={10000} {...rest} />
                 }
                </FormDataConsumer>
                <FormDataConsumer className={classes.width}>
                 {({ formData, ...rest }) => formData.AssetSubdivisionID &&
                    <TextInput multiline className={classes.width} label="توضیحات" textAlgin="right" source="WRDescription" {...rest}/>
                }
                </FormDataConsumer>
            </SimpleForm>
        </Create>
    );
};