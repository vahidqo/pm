import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
}
from 'react-admin';
import LocationTitle from './LocationTitle';


const LocationEdit = props => (
    <Edit title={<LocationTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد مکان" textAlgin="right" source="LocationCode" />
            <TextInput label="نام مکان" textAlgin="right" source="LocationName" />
            <ReferenceInput label="مکان پدر" textAlgin="right" source="LocationFatherID" reference="PMWorks/Location">
                <SelectInput optionText="LocationName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);


export default LocationEdit;
