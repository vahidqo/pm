import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';

const DepartmentFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد دپارتمان" textAlgin="right" source="DepartmentCode" />
        <TextInput label="نام دپارتمان" textAlgin="right" source="DepartmentName" />
    </Filter>
);


export default DepartmentFilter;
