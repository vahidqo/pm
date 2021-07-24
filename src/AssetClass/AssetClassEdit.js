import * as React from "react";
import {
    Edit,
    SimpleForm,
    TopToolbar,
    ListButton,
    TextInput,
    ShowButton
}
from 'react-admin';
import AssetClassTitle from './AssetClassTitle';
import AssetCategoryRefrenceInput from './AssetCategoryRefrenceInput';

const EditActions = ({ basePath, record, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);

const validateError = (values) => {
    const errors = {};
    if (!values.AssetClassCode) {
        errors.AssetClassCode = 'کد را وارد کنید';
    }
    if (!values.AssetClassName) {
        errors.AssetClassName = 'نام را وارد کنید';
    }
    return errors
};

const AssetClassEdit = props => (
    <Edit actions={<EditActions />} title={<AssetClassTitle />} {...props}>
        <SimpleForm  validate={validateError} redirect="show">
            <TextInput label="کد کلاس تجهیز" textAlgin="right" source="AssetClassCode" />
            <TextInput label="نام کلاس تجهیز" textAlgin="right" source="AssetClassName" />
            <AssetCategoryRefrenceInput label="خانواده تجهیز" textAlgin="right" source="AssetClassFather" reference="PMWorks/AssetCategory" perPage={10000} />
        </SimpleForm>
    </Edit>
);


export default AssetClassEdit;
