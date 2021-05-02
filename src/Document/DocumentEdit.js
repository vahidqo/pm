import * as React from "react";
import {
    Edit,
    SimpleForm,
    FileInput,
    SelectInput,
    TextInput,
}
from 'react-admin';
import DocumentTitle from './DocumentTitle';
import RichTextInput from 'ra-input-rich-text';


const DocumentEdit = props => (
    <Edit title={<DocumentTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد سند" textAlgin="right" source="DocumentCode" />
            <TextInput label="نام سند" textAlgin="right" source="DocumentName" />
            <RichTextInput label="توضیحات سند" textAlgin="right" source="DocumentDescription" toolbar={[ ['bold', 'italic', 'underline', 'link'] ]} />
            <FileInput source="FileAddress" label="فایل سند" placeholder={<p>فایل خود را در اینجا بکشید و رها کنید</p>} />
        </SimpleForm>
    </Edit>
);


export default DocumentEdit;
