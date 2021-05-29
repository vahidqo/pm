import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    required,
    NumberInput 
}
from 'react-admin';
import { parse } from 'query-string';
import PersonnelRefrenceInput from './PersonnelRefrenceInput';
import { DateInput } from '../Components/JalaliDatePicker';


const WOPersonnelCreate = props => {

    const { WorkOrderID: WorkOrderID_string } = parse(props.location.search);
    const WorkOrderID = WorkOrderID_string ? parseInt(WorkOrderID_string, 10) : '';
    const redirect = WorkOrderID ? `/PMWorks/WorkOrder/${WorkOrderID}/show/PMWorks/WOPersonnel` : false;

    return (
    <Create {...props} title="ایجاد پرسنل دستور کار">
        <SimpleForm initialValues={{ WorkOrderID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <PersonnelRefrenceInput label="کد پرسنل" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel" allowEmpty validate={required()} perPage={10000} />
            <DateInput label="تاریخ انجام" source="WorkDate" />
            <NumberInput textAlgin="right" label="مدت زمان انجام" source="WorkTime" />
        </SimpleForm>
    </Create>
    );
};


export default WOPersonnelCreate;