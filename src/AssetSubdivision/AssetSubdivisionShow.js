import * as React from "react";
import { useShowController } from 'ra-core';

import {
    Datagrid,
    TextField,
    ReferenceField,
    ShowButton,
    ShowView,
    TabbedShowLayout,
    ReferenceManyField,
    Tab,
    DeleteButton,
    EditButton,
    Show,
    List
}
from 'react-admin';
import AddSparePartButton from './AddSparePartButton';


const AssetSubdivisionShow = props => {
    return (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="مشخصات">
                <ReferenceField label="تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                    <TextField source="AssetName" />
                </ReferenceField>
                <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetChildID" reference="PMWorks/AssetClass">
                    <TextField source="AssetClassName" />
                </ReferenceField>
            </Tab>
            <Tab label="ویژگی ها" path="PMWorks/AssetSpecificData">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/AssetSpecificData"
                    target="AssetSubdivisionID"
                >
                    <Datagrid>
                        <ReferenceField label="ویژگی" textAlgin="right" disabled source="SpecificDataID" reference="PMWorks/SpecificData">
                            <TextField source="SpecificDataName" />
                        </ReferenceField>
                        <ReferenceField label="کد ویژگی" textAlgin="right" source="SpecificDataID" reference="PMWorks/SpecificData">
                            <TextField source="SpecificDataCode" />
                        </ReferenceField>
                        <TextField label="مقدار" textAlgin="right" source="SpecificAmount" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
            <Tab label="قطعات" path="PMWorks/AssetSubdivisionSparePart">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/AssetSubdivisionSparePart"
                    target="AssetSubdivisionID"
                >
                    <Datagrid>
                        <ReferenceField label="نام قطعه" textAlgin="right" disabled source="SparePartID" reference="PMWorks/SparePart">
                            <TextField source="SparePartName" />
                        </ReferenceField>
                        <ReferenceField label="کد قطعه" textAlgin="right" disabled source="SparePartID" reference="PMWorks/SparePart">
                            <TextField source="SparePartCode" />
                        </ReferenceField>
                        <ShowButton />
                        <DeleteButton />
                    </Datagrid>
                </ReferenceManyField>
                <AddSparePartButton />         
            </Tab>
        </TabbedShowLayout>
    </Show>
);
    };


export default AssetSubdivisionShow;
