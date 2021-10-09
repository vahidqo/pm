import * as React from "react";
import {
    Filter,
    TextInput,
    NumberInput
}
from 'react-admin';

const  WorkRequestFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد اولویت" textAlgin="right" source=" WorkRequestCode" />
        <TextInput label="نام اولویت" textAlgin="right" source=" WorkRequestName" />
        <NumberInput label="مقدار اولویت" textAlgin="right" source=" WorkRequestValue" />
    </Filter>
);


export default  WorkRequestFilter;
