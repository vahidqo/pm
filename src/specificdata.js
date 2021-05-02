import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create,
    ReferenceField,
    Filter,
    Responsive,
    ShowButton,
    SimpleList,
    Show,
    TabbedShowLayout,
    ReferenceManyField,
    Tab
}
from 'react-admin';

const SpecificDataTitle = ({ record }) => {
    return <span> {record ? `"${record.SpecificDataName}"` : ''}</span>;
};


export const SpecificDataList = props => (
    <List {...props} title="ویژگی ها">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.title} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد ویژگی" textAlgin="right" source="SpecificDataCode" />
                    <TextField label="نام ویژگی" textAlgin="right" source="SpecificDataName" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export const SpecificDataEdit = props => (
    <Edit title={<SpecificDataTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد ویژگی" textAlgin="right" source="SpecificDataCode" />
            <TextInput label="نام ویژگی" textAlgin="right" source="SpecificDataName" />
        </SimpleForm>
    </Edit>
);


export const SpecificDataCreate = props => (
    <Create {...props} title="ایجاد کلاس تجهیز">
        <SimpleForm>
            <TextInput label="کد ویژگی" textAlgin="right" source="SpecificDataCode" />
            <TextInput label="نام ویژگی" textAlgin="right" source="SpecificDataName" />
        </SimpleForm>
    </Create>
);