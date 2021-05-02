import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    TextInput
}
from 'react-admin';

const SparePartDimensionFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد سطح" textAlgin="right" source="SparePartDimensionCode" />
        <TextInput label="نام سطح" textAlgin="right" source="SparePartDimensionName" />
    </Filter>
);


export default SparePartDimensionFilter;
