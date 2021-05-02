import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Responsive,
    ShowButton,
    SimpleList,
}
from 'react-admin';
import SparePartDimensionFilter from './SparePartDimensionFilter';

const SparePartDimensionList = props => (
    <List filters={<SparePartDimensionFilter />} {...props} title="سطح قطعات">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.SparePartDimensionName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد سطح" textAlgin="right" source="SparePartDimensionCode" />
                    <TextField label="نام سطح" textAlgin="right" source="SparePartDimensionName" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default SparePartDimensionList;
