import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';

const SupplierSpecificFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد ویژگی تامین کننده" textAlgin="right" source="SupplierSpecificCode" />
        <TextInput label="نام ویژگی تامین کننده" textAlgin="right" source="SupplierSpecificName" />
    </Filter>
);


export default SupplierSpecificFilter;
