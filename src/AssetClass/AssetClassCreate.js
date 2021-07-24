import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Create,
    ListButton,
    TopToolbar,
    useNotify,
    useRefresh,
    useRedirect
}
from 'react-admin';
import AssetCategoryRefrenceInput from './AssetCategoryRefrenceInput';

const CreateActions = ({ basePath, record, resource }) => (
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



const AssetClassCreate = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect('/PMWorks/AssetClass/create');
        refresh();
    };
return(
    <Create actions={<CreateActions />} onSuccess={onSuccess} {...props} title="ایجاد خانواده تجهیز">
        <SimpleForm validate={validateError}>
            <TextInput label="کد خانواده تجهیز" textAlgin="right" source="AssetClassCode" />
            <TextInput label="نام خانواده تجهیز" textAlgin="right" source="AssetClassName" />
            <AssetCategoryRefrenceInput label="گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryID" reference="PMWorks/AssetCategory" perPage={10000} />
        </SimpleForm>
    </Create>
);
}


export default AssetClassCreate;
