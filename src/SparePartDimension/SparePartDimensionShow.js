import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    ReferenceField
}
from 'react-admin';
import SparePartDimensionTitle from './SparePartDimensionTitle';


const SparePartDimensionShow = (props) => (
    <Show title={<SparePartDimensionTitle />} {...props}>
        <SimpleShowLayout>
            <TextField label="کد سطح" textAlgin="right" source="SparePartDimensionCode" />
            <TextField label="نام سطح" textAlgin="right" source="SparePartDimensionName" />
        </SimpleShowLayout>
    </Show>
);


export default SparePartDimensionShow;
