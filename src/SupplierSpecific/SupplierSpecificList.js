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
import SupplierSpecificFilter from './SupplierSpecificFilter';

const SupplierSpecificList = props => (
    <List filters={<SupplierSpecificFilter />} {...props} title="ویژگی تامیین کنندگان">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.SupplierSpecificName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد ویژگی تامین کننده" textAlgin="right" source="SupplierSpecificCode" />
                    <TextField label="نام ویژگی تامین کننده" textAlgin="right" source="SupplierSpecificName" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default SupplierSpecificList;
