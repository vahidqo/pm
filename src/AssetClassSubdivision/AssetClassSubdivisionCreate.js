import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Toolbar,
    Create,
    required
}
from 'react-admin';
import { parse } from 'query-string';
import AssetClassSubdivisionRefrenceInput from './AssetClassSubdivisionRefrenceInput';

const AssetClassSubdivisionCreate = props => {

    const { AssetClassFatherID: AssetClassFatherID_string } = parse(props.location.search);
    const AssetClassFatherID = AssetClassFatherID_string ? parseInt(AssetClassFatherID_string, 10) : '';
    const redirect = AssetClassFatherID ? `/PMWorks/AssetClass/${AssetClassFatherID}/show/PMWorks/AssetClassSubdivision` : false;

    return (
    <Create {...props} title="ایجاد زیرکلاس">
        <SimpleForm initialValues={{ AssetClassFatherID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <AssetClassSubdivisionRefrenceInput label="کلاس تجهیز" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass" allowEmpty validate={required()} perPage={10000} />
            <TextInput label="تعداد" textAlgin="right" source="AssetClassChildNumber" />
        </SimpleForm>
    </Create>
);
};



export default AssetClassSubdivisionCreate;
