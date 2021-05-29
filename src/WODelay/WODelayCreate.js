import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    required,
    NumberInput,
    TextInput
}
from 'react-admin';
import { parse } from 'query-string';
import DelayRefrenceInput from './DelayRefrenceInput';


const WODelayCreate = props => {

    const { WorkOrderID: WorkOrderID_string } = parse(props.location.search);
    const WorkOrderID = WorkOrderID_string ? parseInt(WorkOrderID_string, 10) : '';
    const redirect = WorkOrderID ? `/PMWorks/WorkOrder/${WorkOrderID}/show/PMWorks/WODelay` : false;

    return (
    <Create {...props} title="ایجاد تاخیر دستور کار">
        <SimpleForm initialValues={{ WorkOrderID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <DelayRefrenceInput label="کد تاخیر" textAlgin="right" source="DelayID" reference="PMWorks/Delay" allowEmpty validate={required()} perPage={10000} />
            <NumberInput textAlgin="right" label="روز" source="DayAmount" />
            <NumberInput textAlgin="right" label="ساعت" source="HourAmount" />
            <TextInput multiline label="توضیحات علت تاخیر" textAlgin="right" source="WODelayDescription"/>
        </SimpleForm>
    </Create>
    );
};


export default WODelayCreate;