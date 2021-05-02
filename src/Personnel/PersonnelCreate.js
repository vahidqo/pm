import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Create,
    SelectInput,
    ReferenceInput
}
from 'react-admin';
import DepartmentRefrenceInput from './DepartmentRefrenceInput';


const PersonnelCreate = props => (
    <Create {...props} title="ایجاد پرسنل">
        <SimpleForm>
            <TextInput label="کد پرسنل" textAlgin="right" source="PersonnelCode" />
            <TextInput label="کد نت پرسنل" textAlgin="right" source="PersonnelNetCode" />
            <TextInput label="نام پرسنل" textAlgin="right" source="PersonnelName" />
            <TextInput label="فامیل پرسنل" textAlgin="right" source="PersonnelFamily" />
            <TextInput label="شماره پرسنل" textAlgin="right" source="PersonnelMobile" />
            <DepartmentRefrenceInput label="دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department" perPage={10000} />
        </SimpleForm>
    </Create>
);


export default PersonnelCreate;