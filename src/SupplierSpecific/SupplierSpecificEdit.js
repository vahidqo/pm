import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
}
from 'react-admin';
import SupplierSpecificTitle from './SupplierSpecificTitle';

const SupplierSpecificEdit = props => (
    <Edit title={<SupplierSpecificTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد ویژگی تامین کننده" textAlgin="right" source="SupplierSpecificCode" />
            <TextInput label="نام ویژگی تامین کننده" textAlgin="right" source="SupplierSpecificName" />
        </SimpleForm>
    </Edit>
);


export default SupplierSpecificEdit;
