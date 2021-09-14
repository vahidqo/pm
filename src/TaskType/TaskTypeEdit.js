import * as React from "react";
import {
    Edit,
    SimpleForm,
    Toolbar,
    ShowButton,
    TextInput,
    ListButton,
    TopToolbar
}
from 'react-admin';
import TaskTypeTitle from './TaskTypeTitle';

const EditActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <ShowButton basePath={basePath} record={data} />
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


const TaskTypeEdit = props => (
    <Edit actions={<EditActions />} title={<TaskTypeTitle />} {...props}>
        <SimpleForm validate={validateError} toolbar={<Toolbar alwaysEnableSaveButton />} redirect="show">
            <TextInput label="کد نوع وظیفه" textAlgin="right" source="TaskTypeCode" />
            <TextInput label="نام نوع وظیفه" textAlgin="right" source="TaskTypeName" />
            <TextInput label="توضیحات نوع وظیفه" textAlgin="right" source="TaskTypeDescription" multiline />
        </SimpleForm>
    </Edit>
);


export default TaskTypeEdit;
