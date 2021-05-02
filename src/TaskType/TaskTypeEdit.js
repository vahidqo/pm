import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
}
from 'react-admin';
import TaskTypeTitle from './TaskTypeTitle';
import RichTextInput from 'ra-input-rich-text';


const TaskTypeEdit = props => (
    <Edit title={<TaskTypeTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد نوع وظیفه" textAlgin="right" source="TaskTypeCode" />
            <TextInput label="نام نوع وظیفه" textAlgin="right" source="TaskTypeName" />
            <RichTextInput label="توضیحات نوع وظیفه" textAlgin="right" source="TaskTypeDescription" toolbar={[ ['bold', 'italic', 'underline', 'link'] ]} />
        </SimpleForm>
    </Edit>
);


export default TaskTypeEdit;
