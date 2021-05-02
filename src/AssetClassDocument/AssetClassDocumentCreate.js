import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    required
}
from 'react-admin';
import { parse } from 'query-string';
import AssetClassDocumentRefrenceInput from './AssetClassDocumentRefrenceInput';


const AssetClassDocumentCreate = props => {

    const { AssetClassID: AssetClassID_string } = parse(props.location.search);
    const AssetClassID = AssetClassID_string ? parseInt(AssetClassID_string, 10) : '';
    const redirect = AssetClassID ? `/PMWorks/AssetClass/${AssetClassID}/show/PMWorks/AssetClassDocument` : false;

    return (
    <Create {...props} title="ایجاد سند تجهیز">
        <SimpleForm initialValues={{ AssetClassID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <AssetClassDocumentRefrenceInput label="کد سند" textAlgin="right" source="DocumentID" reference="PMWorks/Document" allowEmpty validate={required()} perPage={10000} />
        </SimpleForm>
    </Create>
    );
};


export default AssetClassDocumentCreate;
