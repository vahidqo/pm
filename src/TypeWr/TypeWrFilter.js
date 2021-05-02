import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';

const TypeWrFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد کلاس" textAlgin="right" source="TypeWrCode" />
        <TextInput label="نام کلاس" textAlgin="right" source="TypeWrName" />
    </Filter>
);


export default TypeWrFilter;
