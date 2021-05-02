import * as React from "react";
import {
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create
}
from 'react-admin';


const LocationCreate = props => (
    <Create {...props} title="ایجاد مکان">
        <SimpleForm>
            <TextInput label="کد مکان" textAlgin="right" source="LocationCode" />
            <TextInput label="نام مکان" textAlgin="right" source="LocationName" />
            <ReferenceInput label="مکان پدر" textAlgin="right" source="LocationFatherID" reference="PMWorks/Location">
                <SelectInput optionText="LocationName" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);


export default LocationCreate;
