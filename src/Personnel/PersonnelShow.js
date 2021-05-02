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
import AddJobButton from './AddJobButton';


const PersonnelShow = props => {
    const controllerProps = useShowController(props);
    return (
    <ShowView {...controllerProps}>
        <TabbedShowLayout>
            <Tab label="مشخصات">
                <TextField label="کد پرسنل" textAlgin="right" source="PersonnelCode" />
                <TextField label="نام نت پرسنل" textAlgin="right" source="PersonnelNetCode" />
                <TextField label="نام پرسنل" textAlgin="right" source="PersonnelName" />
                <TextField label="فامیل پرسنل" textAlgin="right" source="PersonnelFamily" />
                <TextField label="شماره پرسنل" textAlgin="right" source="PersonnelMobile" />
                <ReferenceField label="دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department">
                    <TextField source="DepartmentName" />
                </ReferenceField>
            </Tab>
            <Tab label="شغل ها" path="PMWorks/PersonnelJobCategory">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/PersonnelJobCategory"
                    target="PersonnelID"
                >
                    <Datagrid>
                        <ReferenceField label="نام شغل" textAlgin="right" disabled source="JobCategoryID" reference="PMWorks/JobCategory">
                            <TextField source="JobCategoryName" />
                        </ReferenceField>
                        <ReferenceField label="کد شغل" textAlgin="right" source="JobCategoryID" reference="PMWorks/JobCategory">
                            <TextField source="JobCategoryCode" />
                        </ReferenceField>
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
                <AddJobButton />      
            </Tab>
        </TabbedShowLayout>
    </ShowView>
);
    };


export default PersonnelShow;
