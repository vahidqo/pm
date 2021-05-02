import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    required
}
from 'react-admin';
import { parse } from 'query-string';
import SpecificDataRefrenceInput from './SpecificDataRefrenceInput';


const AssetClassSpecificDataCreate = props => {

    const { AssetClassID: AssetClassID_string } = parse(props.location.search);
    const AssetClassID = AssetClassID_string ? parseInt(AssetClassID_string, 10) : '';
    const redirect = AssetClassID ? `/PMWorks/AssetClass/${AssetClassID}/show/PMWorks/AssetClassSpecificData` : false;

    return (
    <Create {...props} title="ایجاد کلاس تجهیز">
        <SimpleForm initialValues={{ AssetClassID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <SpecificDataRefrenceInput label="کد ویژگی" textAlgin="right" source="SpecificDataID" reference="PMWorks/SpecificData" allowEmpty validate={required()} perPage={10000} />
        </SimpleForm>
    </Create>
    );
};


export default AssetClassSpecificDataCreate;
