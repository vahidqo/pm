import * as React from "react";
import {
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create
}
from 'react-admin';


const AssetPriorityCreate = props => (
    <Create {...props} title="ایجاد اولویت">
        <SimpleForm>
            <TextInput label="کد اولویت" textAlgin="right" source="AssetPriorityCode" />
            <TextInput label="نام اولویت" textAlgin="right" source="AssetPriorityName" />
            <TextInput label="نام اولویت" textAlgin="right" source="AssetPriorityValue" />
        </SimpleForm>
    </Create>
);


export default AssetPriorityCreate;
