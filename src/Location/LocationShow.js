import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    ReferenceField
}
from 'react-admin';
import LocationTitle from './LocationTitle';


const LocationShow = (props) => (
    <Show title={<LocationTitle />} {...props}>
        <SimpleShowLayout>
                <TextField label="کد مکان" textAlgin="right" source="LocationCode" />
                <TextField label="نام مکان" textAlgin="right" source="LocationName" />
                <ReferenceField label="مکان پدر" textAlgin="right" source="LocationFatherID" reference="PMWorks/Location">
                    <TextField source="LocationName" />
                </ReferenceField>
        </SimpleShowLayout>
    </Show>
);


export default LocationShow;
