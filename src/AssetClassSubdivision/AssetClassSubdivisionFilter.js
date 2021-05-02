import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    TextInput
}
from 'react-admin';

const AssetClassSubdivisionFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کلاس تجهیز پدر" textAlgin="right" source="AssetClassFatherID" />
        <TextInput label="کلاس تجهیز فرزند" textAlgin="right" source="AssetClassChildID" />
    </Filter>
);


export default AssetClassSubdivisionFilter;
