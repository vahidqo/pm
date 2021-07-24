import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    Responsive,
    ShowButton,
    SimpleList,
    EditButton
}
from 'react-admin';
import AssetClassFilter from './AssetClassFilter';

const AssetClassList = props => (
    <List filters={<AssetClassFilter />} {...props} title="خانواده تجهیز">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.AssetClassName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetClassCode" />
                    <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetClassName" />
                    <ReferenceField label="گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryID" reference="PMWorks/AssetCategory" sortBy="AssetCategoryID__AssetCategoryName">
                        <TextField source="AssetCategoryName" />
                    </ReferenceField>
                    <ShowButton />
                    <EditButton />
                </Datagrid>
            }
         />
    </List>
);


export default AssetClassList;
