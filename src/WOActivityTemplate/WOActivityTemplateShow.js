import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    ReferenceField
}
from 'react-admin';
import WOActivityTemplateTitle from './WOActivityTemplateTitle';


const WOActivityTemplateShow = (props) => (
    <Show title={<WOActivityTemplateTitle />} {...props}>
        <SimpleShowLayout>
            <ReferenceField label="نام فعالیت" textAlgin="right" source="AssetClassTaskID" reference="PMWorks/AssetClassTask">
                <TextField source="TaskName" />
            </ReferenceField>
            <ReferenceField label="کد فعالیت" textAlgin="right" source="AssetClassTaskID" reference="PMWorks/AssetClassTask">
                <TextField source="TaskCode" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);

export default WOActivityTemplateShow;
