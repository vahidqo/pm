import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput
}
from 'react-admin';
import PersonnelTitle from './PersonnelTitle';
import DepartmentRefrenceInput from './DepartmentRefrenceInput';


const PersonnelEdit = props => (
    <Edit title={<PersonnelTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد پرسنل" textAlgin="right" source="PersonnelCode" />
            <TextInput label="نام نت پرسنل" textAlgin="right" source="PersonnelNetCode" />
            <TextInput label="نام پرسنل" textAlgin="right" source="PersonnelName" />
            <TextInput label="فامیل پرسنل" textAlgin="right" source="PersonnelFamily" />
            <TextInput label="شماره پرسنل" textAlgin="right" source="PersonnelMobile" />
            <DepartmentRefrenceInput label="دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department" perPage={10000} />
        </SimpleForm>
    </Edit>
);


export default PersonnelEdit;
