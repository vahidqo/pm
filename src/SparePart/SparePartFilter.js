import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';

const SparePartFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد قطعه" textAlgin="right" source="SparePartCode__icontains" alwaysOn resettable/>
        <TextInput label="نام قطعه" textAlgin="right" source="SparePartName__icontains" alwaysOn resettable/>
        <TextInput label="خانواده قطعه" textAlgin="right" source="SparePartCategoryID__SparePartCategoryName__icontains" alwaysOn resettable/>
        <TextInput label="سطح قطعه" textAlgin="right" source="SparePartDimensionID__SparePartDimensionName__icontains" alwaysOn resettable/>
    </Filter>
);


export default SparePartFilter;
