import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
}
from 'react-admin';
import DepartmentTitle from './DepartmentTitle';


const DepartmentEdit = props => (
    <Edit title={<DepartmentTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد دپارتمان" textAlgin="right" source="DepartmentCode" />
            <TextInput label="نام دپارتمان" textAlgin="right" source="DepartmentName" />
        </SimpleForm>
    </Edit>
);


export default DepartmentEdit;
