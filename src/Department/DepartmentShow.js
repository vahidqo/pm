import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
}
from 'react-admin';
import DepartmentTitle from './DepartmentTitle';


const DepartmentShow = (props) => (
    <Show title={<DepartmentTitle />} {...props}>
        <SimpleShowLayout>
                <TextField label="کد دپارتمان" textAlgin="right" source="DepartmentCode" />
                <TextField label="نام دپارتمان" textAlgin="right" source="DepartmentName" />
        </SimpleShowLayout>
    </Show>
);


export default DepartmentShow;
