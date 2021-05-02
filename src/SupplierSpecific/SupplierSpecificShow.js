import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
}
from 'react-admin';
import SupplierSpecificTitle from './SupplierSpecificTitle';


const SupplierSpecificShow = (props) => (
    <Show title={<SupplierSpecificTitle />} {...props}>
        <SimpleShowLayout>
                <TextField label="کد ویژگی تامیین کننده" textAlgin="right" source="SupplierSpecificCode" />
                <TextField label="نام ویژگی تامین کننده" textAlgin="right" source="SupplierSpecificName" />
        </SimpleShowLayout>
    </Show>
);


export default SupplierSpecificShow;
