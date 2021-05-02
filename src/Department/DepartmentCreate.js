import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Create
}
from 'react-admin';


const DepartmentCreate = props => (
    <Create {...props} title="ایجاد دپارتمان">
        <SimpleForm>
            <TextInput label="کد دپارتمان" textAlgin="right" source="DepartmentCode" />
            <TextInput label="نام دپارتمان" textAlgin="right" source="DepartmentName" />
        </SimpleForm>
    </Create>
);


export default DepartmentCreate;