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
    Filter
}
from 'react-admin';


const AssetCategoryTitle = ({ record }) => {
    return <span> {record ? `"${record.AssetCategoryName}"` : ''}</span>;
};

const AssetCategoryFilter = (props) => (
    <Filter {...props}>
        <ReferenceInput label="نام خانواده تجهیز" source="id" reference="PMWorks/AssetCategory" allowEmpty>
            <SelectInput optionText="AssetCategoryName" />
        </ReferenceInput>
    </Filter>
);

export const AssetcategoryList = props => (
    <List filters={<AssetCategoryFilter />} {...props} title="خانواده تجهیز">
        <Datagrid>
            <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
            <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
            <ReferenceField label="خانواده تجهیز پدر" textAlgin="right" source="AssetClassFather" reference="PMWorks/AssetCategory">
                <TextField source="AssetCategoryName" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);


export const AssetcategoryEdit = props => (
    <Edit title={<AssetCategoryTitle />} {...props}>
        <SimpleForm>
            <TextInput label="آی دی" textAlgin="right" disabled source="id" />
            <TextInput label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
            <TextInput label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
            <ReferenceInput label="خانواده تجهیز پدر" textAlgin="right" source="AssetClassFather" reference="PMWorks/AssetCategory">
                <SelectInput optionText="AssetCategoryName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const AssetcategoryCreate = props => (
    <Create {...props} title="ایجاد خانواده تجهیز">
        <SimpleForm>
            <TextInput label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
            <TextInput label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
            <ReferenceInput label="خانواده تجهیز پدر" textAlgin="right" source="AssetClassFather" reference="PMWorks/AssetCategory">
                <SelectInput optionText="AssetCategoryName" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);