import * as React from "react";
import {
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Toolbar,
    Create,
    required,
    useNotify,
    useRefresh,
    useRedirect
}
from 'react-admin';
import { parse } from 'query-string';

const FailureModeCreate = props => {

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const { AssetClassID: AssetClassID_string } = parse(props.location.search);
    const AssetClassID = AssetClassID_string ? parseInt(AssetClassID_string, 10) : '';
    const redirectt = AssetClassID ? `/PMWorks/AssetClass/${AssetClassID}/show/PMWorks/FailureMode` : false;

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect(`/PMWorks/FailureMode/create?AssetClassID=${AssetClassID}`);
        refresh();
    };

    return (
    <Create onSuccess={onSuccess} {...props} title="ایجاد نوع خرابی">
        <SimpleForm initialValues={{ AssetClassID}} redirect={redirectt} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <TextInput label="کد نوع خرابی" textAlgin="right" source="FailureModeCode" />
            <TextInput label="نام نام خرابی" textAlgin="right" source="FailureModeName" />
            <TextInput multiline label="توضیحات نوع خرابی" textAlgin="right" source="FailureModeDescription" />
        </SimpleForm>
    </Create>
    );
};


export default FailureModeCreate;
