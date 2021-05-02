import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    ReferenceField
}
from 'react-admin';
import SparePartTitle from './SparePartTitle';


const SparePartShow = (props) => (
    <Show title={<SparePartTitle />} {...props}>
        <SimpleShowLayout>
            <TextField label="کد قطعه" textAlgin="right" source="SparePartCode" />
            <TextField label="نام قطعه" textAlgin="right" source="SparePartName" />
            <ReferenceField label="خانواده قطعه" textAlgin="right" source="SparePartCategoryID" reference="PMWorks/SparePartCategory">
                <TextField source="SparePartCategoryName" />
            </ReferenceField>
            <ReferenceField label="سطح قطعه" textAlgin="right" source="SparePartDimensionID" reference="PMWorks/SparePartDimension">
                <TextField source="SparePartDimensionName" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);


export default SparePartShow;
