import * as React from "react";
import {
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create,
    Toolbar
}
from 'react-admin';
import { parse } from 'query-string';
import { DateInput } from '../Components/JalaliDatePicker';
import { DateInputtoday } from '../Components/JalaliDatePickertoday';

const WorkOrderCreate = props => {
    var today = new Date();

    const { WorkRequestID: WorkRequestID_string } = parse(props.location.search);
    const WorkRequestID = WorkRequestID_string ? parseInt(WorkRequestID_string, 10) : '';
    const redirect = WorkRequestID ? `/PMWorks/WorkRequest/${WorkRequestID}/show/PMWorks/WordOrder` : false;

    return (
    <Create {...props} title="ایجاد دستور کار">
        <SimpleForm initialValues={{ WODateOfRegistration: today, WorkRequestID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <DateInputtoday label="تاریخ ثبت" source="WODateOfRegistration" disabled/>
            <DateInput label="تاریخ شروع" source="DateOfPlanStart" />
            <DateInput label="تاریخ پایان" source="DateOfPlanFinish" />
            <TextInput multiline label="توضیحات" textAlgin="right" source="WODescription"/>
        </SimpleForm>
    </Create>
);
};


export default WorkOrderCreate;
