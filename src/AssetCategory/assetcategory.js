import * as React from "react";
import { useState } from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    Create,
    TopToolbar,
    ListButton,
    useNotify,
    useRefresh,
    useRedirect,
    ShowButton,
    useEditController,
    Toolbar,
}
from 'react-admin';
import AssetCategoryRefrenceInput from './AssetCategoryRefrenceInput';
import CodeInput from '../Components/CodeInput';


const EditActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <ShowButton basePath={basePath} record={data} />
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


export const AssetcategoryEdit = props => {
    const {source, ...rest} = props;

    const controllerProps = useEditController(props);
    const {
        record, // record fetched via dataProvider.getOne() based on the id from the location
    } = controllerProps;
    const [Value, setValue] = useState(record.AssetCategoryCode);

    return(
    <Edit actions={<EditActions />} title={<AssetCategoryTitle />} {...props}>
        <SimpleForm validate={validateError} toolbar={<Toolbar alwaysEnableSaveButton />} redirect="show">
            <CodeInput value={Value}  onChange={event => { let val = event.target.value;
                                                    val = val.replace(/[^\x00-\x7F]/ig, "");
                                                    setValue(val)
                                                    }}
                label="کد خانواده تجهیز"
                source="AssetCategoryCode" {...rest}/>
            <TextInput label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
            <AssetCategoryRefrenceInput label="خانواده تجهیز" textAlgin="right" source="AssetClassFather" reference="PMWorks/AssetCategory" perPage={10000} />
        </SimpleForm>
    </Edit>
);
};

export const AssetcategoryCreate = props => {
    const {source, ...rest} = props;

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();
    const [Value, setValue] = useState('');

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`);
        redirect('/PMWorks/AssetCategory');
        redirect('/PMWorks/AssetCategory/create');
        refresh();
    };
return(
    <Create actions={<CreateActions />} onSuccess={onSuccess} {...props} title="ایجاد خانواده تجهیز">
        <SimpleForm validate={validateError}>
        <CodeInput value={Value}  onChange={event => { let val = event.target.value;
                                                    val = val.replace(/[^\x00-\x7F]/ig, "");
                                                    setValue(val)
                                                    }}
                label="کد خانواده تجهیز"
                source="AssetCategoryCode" {...rest}/>
            <TextInput label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
            <AssetCategoryRefrenceInput label="خانواده تجهیز" textAlgin="right" source="AssetClassFather" reference="PMWorks/AssetCategory" perPage={10000} allowEmpty/>
        </SimpleForm>
    </Create>
);
};