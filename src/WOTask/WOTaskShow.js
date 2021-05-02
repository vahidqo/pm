import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    ReferenceField
}
from 'react-admin';
import WOTaskTitle from './WOTaskTitle';


const WOTaskShow = (props) => (
    <Show title={<WOTaskTitle />} {...props}>
        <SimpleShowLayout>
            <ReferenceField label="کد وظیفه" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                <TextField source="TaskCode" />
            </ReferenceField>
            <TextField label="تعداد" textAlgin="right" source="WOTaskSituationOfDo" />
        </SimpleShowLayout>
    </Show>
);


export default WOTaskShow;
