import * as React from "react";
import {
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create
}
from 'react-admin';


const WOTemplateTypeCreate = props => (
    <Create {...props} title="ایجاد نوع برنامه">
        <SimpleForm>
            <TextInput label="کد نوع برنامه" textAlgin="right" source="WOTemplateTypeCode" />
            <TextInput label="نام نوع برنامه" textAlgin="right" source="WOTemplateTypeName" />
            <TextInput multiline label="توضیحات نوع برنامه" textAlgin="right" source="WOTemplateTypeDescription"/>
        </SimpleForm>
    </Create>
);


export default WOTemplateTypeCreate;