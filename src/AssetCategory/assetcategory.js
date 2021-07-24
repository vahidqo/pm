import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create,
    TopToolbar,
    ListButton,
    ShowButton,
    useNotify,
    useRefresh,
    useRedirect
}
from 'react-admin';
import AssetCategoryRefrenceInput from './AssetCategoryRefrenceInput';


const EditActions = ({ basePath, record, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);

const CreateActions = ({ basePath, record, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);


const validateError = (values) => {
    const errors = {};
    if (!values.AssetCategoryCode) {
        errors.AssetCategoryCode = 'کد را وارد کنید';
    }
    if (!values.AssetCategoryName) {
        errors.AssetCategoryName = 'نام را وارد کنید';
    }
    return errors
};


const AssetCategoryTitle = ({ record }) => {
    return <span> {record ? `"${record.AssetCategoryName}"` : ''}</span>;
};


export const AssetcategoryEdit = props => (
    <Edit actions={<EditActions />} title={<AssetCategoryTitle />} {...props}>
        <SimpleForm validate={validateError} redirect="show">
            <TextInput label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
            <TextInput label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
            <AssetCategoryRefrenceInput label="خانواده تجهیز" textAlgin="right" source="AssetClassFather" reference="PMWorks/AssetCategory" perPage={10000} />
        </SimpleForm>
    </Edit>
);

export const AssetcategoryCreate = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect('/PMWorks/AssetCategory/create');
        refresh();
    };
return(
    <Create actions={<CreateActions />} onSuccess={onSuccess} {...props} title="ایجاد خانواده تجهیز">
        <SimpleForm validate={validateError}>
            <TextInput label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
            <TextInput label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
            <AssetCategoryRefrenceInput label="خانواده تجهیز" textAlgin="right" source="AssetClassFather" reference="PMWorks/AssetCategory" perPage={10000} />
        </SimpleForm>
    </Create>
);
}