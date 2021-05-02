import * as React from "react";
import {
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create
}
from 'react-admin';
import RichTextInput from 'ra-input-rich-text';


const TaskTypeCreate = props => (
    <Create {...props} title="ایجاد وظیفه">
        <SimpleForm>
            <TextInput label="کد وظیفه" textAlgin="right" source="TaskTypeCode" />
            <TextInput label="نام وظیفه" textAlgin="right" source="TaskTypeName" />
            <RichTextInput label="توضیحات نوع خرابی" textAlgin="right" source="TaskTypeDescription" toolbar={[ ['bold', 'italic', 'underline', 'link'] ]} />
        </SimpleForm>
    </Create>
);


export default TaskTypeCreate;