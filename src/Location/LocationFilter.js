import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    TextInput
}
from 'react-admin';

const LocationFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد مکان" textAlgin="right" source="LocationCode__icontains" alwaysOn resettable/>
        <TextInput label="نام مکان" textAlgin="right" source="LocationName__icontains" alwaysOn resettable/>
    </Filter>
);


export default LocationFilter;
