import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    RichTextField
}
from 'react-admin';
import WOTemplateTypeTitle from './WOTemplateTypeTitle';


const WOTemplateTypeShow = (props) => (
    <Show title={<WOTemplateTypeTitle />} {...props}>
        <SimpleShowLayout>
                <TextField label="کد نوع برنامه" textAlgin="right" source="WOTemplateTypeCode" />
                <TextField label="نام نوع برنامه" textAlgin="right" source="WOTemplateTypeName" />
                <TextField label="توضیحات نوع برنامه" textAlgin="right" source="WOTemplateTypeDescription" />
        </SimpleShowLayout>
    </Show>
);


export default WOTemplateTypeShow;
