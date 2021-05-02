import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    Responsive,
    ShowButton,
    SimpleList,
    DateField
}
from 'react-admin';
import AssetFilter from './AssetFilter';
import {JalaliField} from 'ra-hichestan-datetime';

const AssetList = props => (
    <List filters={<AssetFilter />} {...props} title="تجهیز">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.AssetName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد تجهیز" textAlgin="right" source="AssetCode" />
                    <TextField label="نام تجهیز" textAlgin="right" source="AssetName" />
                    <JalaliField label="تاریخ نصب" textAlgin="right" source="InstallationDate" />
                    <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass">
                        <TextField source="AssetClassName" />
                    </ReferenceField>
                    <ReferenceField label="اولویت" textAlgin="right" source="AssetPriorityID" reference="PMWorks/AssetPriority">
                        <TextField source="AssetPriorityName" />
                    </ReferenceField>
                    <ReferenceField label="مکان" textAlgin="right" source="LocationID" reference="PMWorks/Location">
                        <TextField source="LocationName" />
                    </ReferenceField>
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default AssetList;
