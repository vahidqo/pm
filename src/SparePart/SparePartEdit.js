import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput
}
from 'react-admin';
import SparePartTitle from './SparePartTitle';
import SparePartCategoryRefrenceInput from './SparePartCategoryRefrenceInput';
import SparePartDimensionRefrenceInput from './SparePartDimensionRefrenceInput';

const SparePartEdit = props => (
    <Edit title={<SparePartTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد قطعه" textAlgin="right" source="SparePartCode" />
            <TextInput label="نام قطعه" textAlgin="right" source="SparePartName" />
            <SparePartCategoryRefrenceInput label="خانواده قطعه" textAlgin="right" source="SparePartCategoryID" reference="PMWorks/SparePartCategory" perPage={10000} />
            <SparePartDimensionRefrenceInput label="سطح قطعه" textAlgin="right" source="SparePartDimensionID" reference="PMWorks/SparePartDimension" perPage={10000} />
        </SimpleForm>
    </Edit>
);


export default SparePartEdit;
