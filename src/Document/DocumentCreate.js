import * as React from "react";
import {
    SimpleForm,
    FileInput,
    FileField,
    TextInput,
    Create
}
from 'react-admin';
import RichTextInput from 'ra-input-rich-text';


const DocumentCreate = props => (
    <Create {...props} title="ایجاد سند">
        <SimpleForm>
            <TextInput label="کد سند" textAlgin="right" source="DocumentCode" />
            <TextInput label="نام سند" textAlgin="right" source="DocumentName" />
            <RichTextInput label="توضیحات سند" textAlgin="right" source="DocumentDescription" toolbar={[ ['bold', 'italic', 'underline', 'link'] ]} />
            <FileInput source="FileAddress" label="فایل سند" accept=".pdf" placeholder={<p>فایل خود را در اینجا بکشید و رها کنید</p>} >
                <FileField source="src" title="title" />
            </FileInput>
        </SimpleForm>
    </Create>
);


export default DocumentCreate;
