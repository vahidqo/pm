import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Responsive,
    ShowButton,
    SimpleList,
    ReferenceField,
    ReferenceManyField,
    ChipField,
    SingleFieldList
}
from 'react-admin';
import PersonnelFilter from './PersonnelFilter';

const PersonnelList = props => (
    <List filters={<PersonnelFilter />} {...props} title="پرسنل">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.PersonnelName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد پرسنل" textAlgin="right" source="PersonnelCode" />
                    <TextField label="نام نت پرسنل" textAlgin="right" source="PersonnelNetCode" />
                    <TextField label="نام پرسنل" textAlgin="right" source="PersonnelName" />
                    <TextField label="فامیل پرسنل" textAlgin="right" source="PersonnelFamily" />
                    <TextField label="شماره پرسنل" textAlgin="right" source="PersonnelMobile" />
                    <ReferenceField label="دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department">
                        <TextField source="DepartmentName" />
                    </ReferenceField>
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default PersonnelList;
