import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    TextInput
}
from 'react-admin';

const SparePartFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد قطعه" textAlgin="right" source="SparePartCode" />
        <TextInput label="نام قطعه" textAlgin="right" source="SparePartName" />
        <ReferenceInput label="خانواده قطعه" textAlgin="right" source="SparePartCategoryID" reference="PMWorks/SparePartCategory">
            <SelectInput optionText="SparePartCategoryName" />
        </ReferenceInput>
        <ReferenceInput label="سطح قطعه" textAlgin="right" source="SparePartDimensionID" reference="PMWorks/SparePartDimension">
            <SelectInput optionText="SparePartDimensionName" />
        </ReferenceInput>
    </Filter>
);


export default SparePartFilter;
