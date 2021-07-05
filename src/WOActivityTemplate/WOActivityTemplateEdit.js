import * as React from "react";
import {
    Edit,
    SimpleForm,
    NumberInput,
}
from 'react-admin';
import WOActivityTemplateTitle from './WOActivityTemplateTitle';
import TaskRefrenceInput from './TaskRefrenceInput';


const WOActivityTemplateEdit = props => (
    <Edit title={<WOActivityTemplateTitle />} {...props}>
        <SimpleForm>
            <TaskRefrenceInput label="کد فعالیت" textAlgin="right" source="WOActivityTemplateID" reference="PMWorks/WOActivityTemplate" perPage={10000} />
        </SimpleForm>
    </Edit>
);


export default WOActivityTemplateEdit;
