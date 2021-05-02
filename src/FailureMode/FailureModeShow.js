import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    RichTextField
}
from 'react-admin';
import FailureModeTitle from './FailureModeTitle';


const FailureModeShow = (props) => (
    <Show title={<FailureModeTitle />} {...props}>
        <SimpleShowLayout>
                <TextField label="کد نوع خرابی" textAlgin="right" source="FailureModeCode" />
                <TextField label="نام نوع خرابی" textAlgin="right" source="FailureModeName" />
                <RichTextField label="توضیحات نوع خرابی" textAlgin="right" source="FailureModeDescription" />
                <TextField label="کلاس تجهیز" textAlgin="right" source="AssetClassID" />
        </SimpleShowLayout>
    </Show>
);


export default FailureModeShow;
