import * as React from "react";
import {
    SimpleForm,
    useRedirect,
    useRefresh,
    TextInput,
    Create,
    useNotify,
    ListButton,
    TopToolbar
}
from 'react-admin';

const CreateActions = ({ basePath, record, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);

const validateError = (values) => {
    const errors = {};
    if (!values.TaskTypeCode) {
        errors.TaskTypeCode = 'کد را وارد کنید';
    }
    if (!values.TaskTypeName) {
        errors.TaskTypeName = 'نام را وارد کنید';
    }
    return errors
};

const TaskTypeCreate = props => {

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect('/PMWorks/TaskType/create');
        refresh();
    };
return(
    <Create actions={<CreateActions />} onSuccess={onSuccess} {...props} title="ایجاد وظیفه">
        <SimpleForm validate={validateError}>
            <TextInput label="کد وظیفه" textAlgin="right" source="TaskTypeCode" />
            <TextInput label="نام وظیفه" textAlgin="right" source="TaskTypeName" />
            <TextInput label="توضیحات نوع وظیفه" textAlgin="right" source="TaskTypeDescription" multiline />
        </SimpleForm>
    </Create>
);
};


export default TaskTypeCreate;