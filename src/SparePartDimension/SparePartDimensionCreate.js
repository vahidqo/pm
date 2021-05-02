import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Create
}
from 'react-admin';


const SparePartDimensionCreate = props => (
    <Create {...props} title="ایجاد سطح">
        <SimpleForm>
            <TextInput label="کد سطح" textAlgin="right" source="SparePartDimensionCode" />
            <TextInput label="نام سطح" textAlgin="right" source="SparePartDimensionName" />
        </SimpleForm>
    </Create>
);


export default SparePartDimensionCreate;
