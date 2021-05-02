import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    TextInput
}
from 'react-admin';

const AssetPriorityFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد اولویت" textAlgin="right" source="AssetPriorityCode" />
        <TextInput label="نام اولویت" textAlgin="right" source="AssetPriorityName" />
    </Filter>
);


export default AssetPriorityFilter;
