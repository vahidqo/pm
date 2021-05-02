import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Create
}
from 'react-admin';

const SupplierSpecificCreate = props => (
    <Create {...props} title="ایجاد ویژگی تامین کننده">
        <SimpleForm>
            <TextInput label="کد ویژگی تامین کننده" textAlgin="right" source="SupplierSpecificCode" />
            <TextInput label="نام ویژگی تامین کننده" textAlgin="right" source="SupplierSpecificName" />
        </SimpleForm>
    </Create>
);


export default SupplierSpecificCreate;