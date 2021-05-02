import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';

const TaskTypeFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد کلاس وظیفه" textAlgin="right" source="TaskTypeCode" />
        <TextInput label="نام کلاس وظیفه" textAlgin="right" source="TaskTypeName" />
    </Filter>
);


export default TaskTypeFilter;
