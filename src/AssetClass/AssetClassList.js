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
import AssetClassFilter from './AssetClassFilter';

const AssetClassList = props => (
    <List filters={<AssetClassFilter />} {...props} title="کلاس تجهیز">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.AssetClassName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد کلاس تجهیز" textAlgin="right" source="AssetClassCode" />
                    <TextField label="نام کلاس تجهیز" textAlgin="right" source="AssetClassName" />
                    <ReferenceField label="خانواده تجهیز" textAlgin="right" source="AssetCategoryID" reference="PMWorks/AssetCategory">
                        <TextField source="AssetCategoryName" />
                    </ReferenceField>
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default AssetClassList;
