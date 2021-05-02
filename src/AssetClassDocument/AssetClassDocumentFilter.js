import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    TextInput
}
from 'react-admin';

const AssetClassDocumentFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد تجهیز" textAlgin="right" source="AssetClassID" />
        <TextInput label="کد سند" textAlgin="right" source="DocumentID" />
    </Filter>
);


export default AssetClassDocumentFilter;
