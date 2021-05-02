import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
}
from 'react-admin';
import AssetSpecificDataTitle from './AssetSpecificDataTitle';


const AssetSpecificDataEdit = props => (
    <Edit title={<AssetSpecificDataTitle />} {...props}>
        <SimpleForm>
            <TextInput label="آی دی" textAlgin="right" disabled source="id" />
            <ReferenceInput label="تجهیز" textAlgin="right" disabled source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                <SelectInput source="id" />
            </ReferenceInput>
            <ReferenceInput label="ویژگی" textAlgin="right" disabled source="SpecificDataID" reference="PMWorks/SpecificData">
                <SelectInput source="SpecificDataName" />
            </ReferenceInput>
            <TextInput label="مقدار" textAlgin="right" source="SpecificAmount" />
        </SimpleForm>
    </Edit>
);


export default AssetSpecificDataEdit;
