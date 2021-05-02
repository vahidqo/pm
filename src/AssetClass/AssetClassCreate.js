import * as React from "react";
import {
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create
}
from 'react-admin';


const AssetClassCreate = props => (
    <Create {...props} title="ایجاد کلاس تجهیز">
        <SimpleForm>
            <TextInput label="کد کلاس تجهیز" textAlgin="right" source="AssetClassCode" />
            <TextInput label="نام کلاس تجهیز" textAlgin="right" source="AssetClassName" />
            <ReferenceInput label="خانواده تجهیز" textAlgin="right" source="AssetCategoryID" reference="PMWorks/AssetCategory">
                <SelectInput optionText="AssetCategoryName" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);


export default AssetClassCreate;
