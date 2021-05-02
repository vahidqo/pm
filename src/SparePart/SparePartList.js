import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Responsive,
    ShowButton,
    SimpleList,
    ReferenceField
}
from 'react-admin';
import SparePartFilter from './SparePartFilter';

const SparePartList = props => (
    <List filters={<SparePartFilter />} {...props} title="قطعات">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.SparePartName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد قطعه" textAlgin="right" source="SparePartCode" />
                    <TextField label="نام قطعه" textAlgin="right" source="SparePartName" />
                    <ReferenceField label="خانواده قطعه" textAlgin="right" source="SparePartCategoryID" reference="PMWorks/SparePartCategory">
                        <TextField source="SparePartCategoryName" />
                    </ReferenceField>
                    <ReferenceField label="سطح قطعه" textAlgin="right" source="SparePartDimensionID" reference="PMWorks/SparePartDimension">
                        <TextField source="SparePartDimensionName" />
                    </ReferenceField>
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default SparePartList;
