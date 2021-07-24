import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Toolbar,
    Create,
    ReferenceInput,
    SelectInput,
    useNotify,
    useRefresh,
    useRedirect
}
from 'react-admin';
import { parse } from 'query-string';
import AssetClassRefrenceInput from './AssetClassRefrenceInput';

const AssetClassSubdivisionCreate = props => {

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();


    const { AssetClassFatherID: AssetClassFatherID_string } = parse(props.location.search);
    const AssetClassFatherID = AssetClassFatherID_string ? parseInt(AssetClassFatherID_string, 10) : '';
    const redirectt = AssetClassFatherID ? `/PMWorks/AssetClass/${AssetClassFatherID}/show/PMWorks/AssetClassSubdivision` : false;

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect(`/PMWorks/AssetClassSubdivision/create?AssetClassFatherID=${AssetClassFatherID}`);
        refresh();
    };

    return (
    <Create onSuccess={onSuccess} {...props} title="ایجاد زیرکلاس">
        <SimpleForm initialValues={{ AssetClassFatherID}} redirect={redirectt} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <AssetClassRefrenceInput label="عناون زیرتجهیز" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass" perPage={10000} />
            <ReferenceInput label="کد زیرنجهیز" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass">
                <SelectInput optionText="AssetClassCode" />
            </ReferenceInput>
            <TextInput label="تعداد" textAlgin="right" source="AssetClassChildNumber" />
        </SimpleForm>
    </Create>
);
};



export default AssetClassSubdivisionCreate;
