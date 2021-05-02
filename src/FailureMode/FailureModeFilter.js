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
        <TextInput label="کد کلاس تجهیز" textAlgin="right" source="FailureModeCode" />
        <TextInput label="نام کلاس تجهیز" textAlgin="right" source="FailureModeName" />
    </Filter>
);


export default FailureModeFilter;
