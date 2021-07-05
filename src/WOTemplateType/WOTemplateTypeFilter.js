import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';

const WOTemplateTypeFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد کلاس برنامه" textAlgin="right" source="WOTemplateTypeCode" />
        <TextInput label="نام کلاس برنامه" textAlgin="right" source="WOTemplateTypeName" />
    </Filter>
);


export default WOTemplateTypeFilter;
