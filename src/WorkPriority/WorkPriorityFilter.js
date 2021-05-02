import * as React from "react";
import {
    Filter,
    TextInput,
    NumberInput
}
from 'react-admin';

const WorkPriorityFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد اولویت" textAlgin="right" source="WorkPriorityCode" />
        <TextInput label="نام اولویت" textAlgin="right" source="WorkPriorityName" />
        <NumberInput label="مقدار اولویت" textAlgin="right" source="WorkPriorityValue" />
    </Filter>
);


export default WorkPriorityFilter;
