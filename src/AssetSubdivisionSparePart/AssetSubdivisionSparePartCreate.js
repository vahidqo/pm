import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    required
}
from 'react-admin';
import { parse } from 'query-string';
import SparePartRefrenceInput from './SparePartRefrenceInput';


const AssetSubdivisonSparePartCreate = props => {

    const { AssetSubdivisionID: AssetSubdivisionID_string } = parse(props.location.search);
    const AssetSubdivisionID = AssetSubdivisionID_string ? parseInt(AssetSubdivisionID_string, 10) : '';
    const redirect = AssetSubdivisionID ? `/PMWorks/AssetSubdivision/${AssetSubdivisionID}/show/PMWorks/AssetSubdivisionSparePart` : false;

    return (
    <Create {...props} title="ایجاد قطعه تجهیز">
        <SimpleForm initialValues={{ AssetSubdivisionID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <SparePartRefrenceInput label="کد قطعه" textAlgin="right" source="SparePartID" reference="PMWorks/SparePart" allowEmpty validate={required()} perPage={10000} />
        </SimpleForm>
    </Create>
    );
};


export default AssetSubdivisonSparePartCreate;
