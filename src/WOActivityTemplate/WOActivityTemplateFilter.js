import * as React from "react";
import {
    Filter,
    NumberInput
}
from 'react-admin';
import TaskRefrenceInput from './TaskRefrenceInput';

const WOActivityTemplateFilter = (props) => (
    <Filter {...props}>
        <TaskRefrenceInput label="کد فعالیت" textAlgin="right" source="WOActivityTemplateID" reference="PMWorks/WOActivityTemplate" perPage={10000} />
    </Filter>
);


export default WOActivityTemplateFilter;
