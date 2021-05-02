import * as React from "react";
import {
    Filter,
    TextInput,
    ReferenceInput,
    SelectInput
}
from 'react-admin';

const PersonnelFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد پرسنل" textAlgin="right" source="PersonnelCode" />
        <TextInput label="نام نت پرسنل" textAlgin="right" source="PersonnelNetCode" />
        <TextInput label="نام پرسنل" textAlgin="right" source="PersonnelName" />
        <TextInput label="فامیل پرسنل" textAlgin="right" source="PersonnelFamily" />
        <TextInput label="شماره پرسنل" textAlgin="right" source="PersonnelMobile" />
        <ReferenceInput label="دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department">
            <SelectInput source="DepartmentName" />
        </ReferenceInput>
    </Filter>
);


export default PersonnelFilter;
