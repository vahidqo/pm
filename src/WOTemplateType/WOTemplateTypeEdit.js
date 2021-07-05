import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
}
from 'react-admin';
import WOTemplateTypeTitle from './WOTemplateTypeTitle';


const WOTemplateTypeEdit = props => (
    <Edit title={<WOTemplateTypeTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد نوع برنامه" textAlgin="right" source="WOTemplateTypeCode" />
            <TextInput label="نام نوع برنامه" textAlgin="right" source="WOTemplateTypeName" />
            <TextInput multiline label="توضیحات نوع برنامه" textAlgin="right" source="WOTemplateTypeDescription"/>
        </SimpleForm>
    </Edit>
);


export default WOTemplateTypeEdit;
