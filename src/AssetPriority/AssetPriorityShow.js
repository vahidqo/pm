import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    ReferenceField
}
from 'react-admin';
import AssetPriorityTitle from './AssetPriorityTitle';


const AssetPriorityShow = (props) => (
    <Show title={<AssetPriorityTitle />} {...props}>
        <SimpleShowLayout>
            <TextField label="کد اولویت" textAlgin="right" source="AssetPriorityCode" />
            <TextField label="نام اولویت" textAlgin="right" source="AssetPriorityName" />
            <TextField label="نام اولویت" textAlgin="right" source="AssetPriorityValue" />
        </SimpleShowLayout>
    </Show>
);


export default AssetPriorityShow;
