import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
}
from 'react-admin';
import SparePartDimensionTitle from './SparePartDimensionTitle';


const SparePartDimensionEdit = props => (
    <Edit title={<SparePartDimensionTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد سطح" textAlgin="right" source="SparePartDimensionCode" />
            <TextInput label="نام سطح" textAlgin="right" source="SparePartDimensionName" />
        </SimpleForm>
    </Edit>
);


export default SparePartDimensionEdit;
