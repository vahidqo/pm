import * as React from "react";
import {
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Toolbar,
    Create,
    required
}
from 'react-admin';
import { parse } from 'query-string';

const FailureModeCreate = props => {

    const { AssetClassID: AssetClassID_string } = parse(props.location.search);
    const AssetClassID = AssetClassID_string ? parseInt(AssetClassID_string, 10) : '';
    const redirect = AssetClassID ? `/PMWorks/AssetClass/${AssetClassID}/show/PMWorks/FailureMode` : false;

    return (
    <Create {...props} title="ایجاد نوع خرابی">
        <SimpleForm initialValues={{ AssetClassID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <TextInput label="کد نوع خرابی" textAlgin="right" source="FailureModeCode" />
            <TextInput label="نام نام خرابی" textAlgin="right" source="FailureModeName" />
            <TextInput multiline label="توضیحات نوع خرابی" textAlgin="right" source="FailureModeDescription" />
        </SimpleForm>
    </Create>
    );
};


export default FailureModeCreate;
