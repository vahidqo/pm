import * as React from "react";
import {
    TextInput,
    Filter,
}
from 'react-admin';

const AssetCategoryFilter = (props) => (
    <Filter {...props}>
        <TextInput source="AssetCategoryCode__icontains" label="کد کلاس تجهیز" textAlgin="right" alwaysOn resettable />
        <TextInput source="AssetCategoryName__icontains" label="نام کلاس تجهیز" textAlgin="right" alwaysOn resettable />
    </Filter>
);


export default AssetCategoryFilter;
