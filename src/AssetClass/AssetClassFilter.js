import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
}
from 'react-admin';

const AssetClassFilter = (props) => (
    <Filter {...props}>
        <ReferenceInput label="نام خانواده تجهیز" source="id" reference="PMWorks/AssetCategory" allowEmpty>
            <SelectInput optionText="AssetCategoryName" />
        </ReferenceInput>
    </Filter>
);


export default AssetClassFilter;
