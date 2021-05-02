import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    Responsive,
    ShowButton,
    SimpleList,
}
from 'react-admin';
import AssetPriorityFilter from './AssetPriorityFilter';

const AssetPriorityList = props => (
    <List filters={<AssetPriorityFilter />} {...props} title="اولویت ها">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.AssetPriorityName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد اولویت" textAlgin="right" source="AssetPriorityCode" />
                    <TextField label="نام اولویت" textAlgin="right" source="AssetPriorityName" />
                    <TextField label="نام اولویت" textAlgin="right" source="AssetPriorityValue" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default AssetPriorityList;
