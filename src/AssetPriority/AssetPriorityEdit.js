import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
}
from 'react-admin';
import AssetPriorityTitle from './AssetPriorityTitle';


const AssetPriorityEdit = props => (
    <Edit title={<AssetPriorityTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد اولویت" textAlgin="right" source="AssetPriorityCode" />
            <TextInput label="نام اولویت" textAlgin="right" source="AssetPriorityName" />
            <TextInput label="نام اولویت" textAlgin="right" source="AssetPriorityValue" />
        </SimpleForm>
    </Edit>
);


export default AssetPriorityEdit;
