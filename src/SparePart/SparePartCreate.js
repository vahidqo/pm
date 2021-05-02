import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Create,
    ReferenceInput,
    SelectInput
}
from 'react-admin';
import SparePartCategoryRefrenceInput from './SparePartCategoryRefrenceInput';
import SparePartDimensionRefrenceInput from './SparePartDimensionRefrenceInput';


const SparePartCreate = props => (
    <Create {...props} title="ایجاد قطعه">
        <SimpleForm>
            <TextInput label="کد قطعه" textAlgin="right" source="SparePartCode" />
            <TextInput label="نام قطعه" textAlgin="right" source="SparePartName" />
            <SparePartCategoryRefrenceInput label="خانواده قطعه" textAlgin="right" source="SparePartCategoryID" reference="PMWorks/SparePartCategory" perPage={10000} />
            <SparePartDimensionRefrenceInput label="سطح قطعه" textAlgin="right" source="SparePartDimensionID" reference="PMWorks/SparePartDimension" perPage={10000} />
        </SimpleForm>
    </Create>
);


export default SparePartCreate;
