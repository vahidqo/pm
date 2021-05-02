import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
    NumberInput
}
from 'react-admin';
import WorkRequestTitle from './WorkRequestTitle';

const WorkRequestEdit = props => (
    <Edit title={<WorkRequestTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد اولویت" textAlgin="right" source="WorkRequestCode" />
            <TextInput label="نام اولویت" textAlgin="right" source="WorkRequestName" />
            <NumberInput label="مقدار اولویت" textAlgin="right" source="WorkRequestValue" />
        </SimpleForm>
    </Edit>
);


export default WorkRequestEdit;
