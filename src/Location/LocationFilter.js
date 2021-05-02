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
        <TextInput label="کد مکان" textAlgin="right" source="LocationCode" />
        <TextInput label="نام مکان" textAlgin="right" source="LocationName" />
    </Filter>
);


export default LocationFilter;
