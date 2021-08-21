import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    TextInput
}
from 'react-admin';

const FailureModeFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد نوع خرابی" textAlgin="right" source="FailureModeCode__icontains" alwaysOn resettable/>
        <TextInput label="نام نوع خرابی" textAlgin="right" source="FailureModeName__icontains" alwaysOn resettable/>
    </Filter>
);


export default FailureModeFilter;
