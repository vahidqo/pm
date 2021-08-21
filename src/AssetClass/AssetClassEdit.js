import * as React from "react";
import { useState } from 'react';
import {
    Edit,
    SimpleForm,
    TopToolbar,
    ListButton,
    TextInput,
    ShowButton,
    Toolbar,
    useEditController,
    
}
from 'react-admin';
import AssetClassTitle from './AssetClassTitle';
import AssetCategoryRefrenceInput from './AssetCategoryRefrenceInput';
import CodeInput from '../Components/CodeInput';

const EditActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <ShowButton basePath={basePath} record={data} />
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

const AssetClassEdit = props => {
    const {source, ...rest} = props;

    const controllerProps = useEditController(props);
    const {
        record, // record fetched via dataProvider.getOne() based on the id from the location
    } = controllerProps;
    const [Value, setValue] = useState(record.AssetClassCode);

    return(
    <Edit actions={<EditActions />} title={<AssetClassTitle />} {...props}>
        <SimpleForm  validate={validateError} toolbar={<Toolbar alwaysEnableSaveButton />} redirect="show">
            <CodeInput value={Value}  onChange={event => { let val = event.target.value;
                                                    val = val.replace(/[^\x00-\x7F]/ig, "");
                                                    setValue(val)
                                                    }}
                label="کد کلاس تجهیز"
                source="AssetClassCode" {...rest}/>
            <TextInput label="نام کلاس تجهیز" textAlgin="right" source="AssetClassName" />
            <AssetCategoryRefrenceInput label="خانواده تجهیز" textAlgin="right" source="AssetClassFather" reference="PMWorks/AssetCategory" perPage={10000} />
        </SimpleForm>
    </Edit>
);
};


export default AssetClassEdit;
