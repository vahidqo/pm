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
import DepartmentFilter from './DepartmentFilter';

const DepartmentList = props => (
    <List filters={<DepartmentFilter />} {...props} title="دپارتمان">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.DepartmentName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد دپارتمان" textAlgin="right" source="DepartmentCode" />
                    <TextField label="نام دپارتمان" textAlgin="right" source="DepartmentName" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default DepartmentList;
