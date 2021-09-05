import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Edit,
    SimpleForm,
    TextInput,
    Create,
    Responsive,
    ShowButton,
    SimpleList,
}
from 'react-admin';
import SpecificDataFilter from './SpecificDataFilter';

const SpecificDataTitle = ({ record }) => {
    return <span> {record ? `"${record.SpecificDataName}"` : ''}</span>;
};


export const SpecificDataList = props => (
    <List {...props} filters={<SpecificDataFilter />} title="ویژگی ها">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.title} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد ویژگی" textAlgin="right" source="SpecificDataCode" />
                    <TextField label="نام ویژگی" textAlgin="right" source="SpecificDataName" />
                    <TextField label="واحد اندازه گیری" textAlgin="right" source="Measurment" />
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
            <TextInput label="واحد اندازه گیری" textAlgin="right" source="Measurment" />
        </SimpleForm>
    </Edit>
);


export const SpecificDataCreate = props => (
    <Create {...props} title="ایجاد ویژگی کلاس تجهیز">
        <SimpleForm>
            <TextInput label="کد ویژگی" textAlgin="right" source="SpecificDataCode" />
            <TextInput label="نام ویژگی" textAlgin="right" source="SpecificDataName" />
            <TextInput label="واحد اندازه گیری" textAlgin="right" source="Measurment" />
        </SimpleForm>
    </Create>
);