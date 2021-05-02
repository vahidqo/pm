import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    NumberField
}
from 'react-admin';
import WorkRequestTitle from './WorkRequestTitle';


const WorkRequestShow = (props) => (
    <Show title={<WorkRequestTitle />} {...props}>
        <SimpleShowLayout>
            <TextField label="کد اولویت" textAlgin="right" source="WorkRequestCode" />
            <TextField label="نام اولویت" textAlgin="right" source="WorkRequestName" />
            <NumberField label="مقدار اولویت" textAlgin="right" source="WorkRequestValue" />
        </SimpleShowLayout>
    </Show>
);


export default WorkRequestShow;
