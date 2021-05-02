import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    TextInput
}
from 'react-admin';

const AssetClassSpecificDataFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد کلاس تجهیز" textAlgin="right" source="AssetClassID" />
        <TextInput label="نام کلاس تجهیز" textAlgin="right" source="SpecificDataID" />
    </Filter>
);


export default AssetClassSpecificDataFilter;
