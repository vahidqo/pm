import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
}
from 'react-admin';
import AssetClassTitle from './AssetClassTitle';


const AssetClassEdit = props => (
    <Edit title={<AssetClassTitle />} {...props}>
        <SimpleForm>
            <TextInput label="آی دی" textAlgin="right" disabled source="id" />
            <TextInput label="کد کلاس تجهیز" textAlgin="right" source="AssetClassCode" />
            <TextInput label="نام کلاس تجهیز" textAlgin="right" source="AssetClassName" />
            <ReferenceInput label="خانواده تجهیز" textAlgin="right" source="AssetCategoryID" reference="PMWorks/AssetCategory">
                <SelectInput optionText="AssetCategoryName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);


export default AssetClassEdit;
