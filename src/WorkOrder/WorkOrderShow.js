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
    Show,
    List,
    NumberField
}
from 'react-admin';
import WorkOrderTitle from './WorkOrderTitle';
import DateField from '../Components/JalaaliDateField';

import AddSupplierButton from './AddSupplierButton';
import AddPersonnelButton from './AddPersonnelButton';
import AddDelayButton from './AddDelayButton';
import AddSparePartButton from './AddSparePartButton';
import AddTaskButton from './AddTaskButton';


const WorkOrderShow = (props) => (
    <Show {...props} title={<WorkOrderTitle />}>
        <TabbedShowLayout>
            <Tab label="تامین کننده" path="PMWorks/WOSupplier">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOSupplier"
                    target="WorkOrderID"
                >
                    <Datagrid>
                        <ReferenceField label="نام تامین کننده" textAlgin="right" source="SupplierID" reference="PMWorks/Supplier">
                            <TextField source="SupplierName" />
                        </ReferenceField>
                        <ReferenceField label="کد تامین کننده" textAlgin="right" source="SupplierID" reference="PMWorks/Supplier">
                            <TextField source="SupplierCode" />
                        </ReferenceField>
                        <DateField label="تاریخ شروع" textAlgin="right" source="WorkStartDate" />
                        <DateField label="تاریخ پایان" textAlgin="right" source="WorkFinishDate" />
                        <ShowButton />
                        <DeleteButton />
                    </Datagrid>
                </ReferenceManyField>
                <AddSupplierButton />
            </Tab>
            <Tab label="پرسنل" path="PMWorks/WOPersonnel">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOPersonnel"
                    target="WorkOrderID"
                >
                    <Datagrid>
                        <ReferenceField label="نام پرسنل" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                            <TextField source="PersonnelName" />
                        </ReferenceField>
                        <ReferenceField label="کد پرسنل" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                            <TextField source="PersonnelCode" />
                        </ReferenceField>
                        <DateField label="تاریخ انجام" textAlgin="right" source="WorkDate"/>
                        <NumberField label="مدت زمان انجام" textAlgin="right" source="WorkTime" />
                        <ShowButton />
                        <DeleteButton />
                    </Datagrid>
                </ReferenceManyField>
                <AddPersonnelButton />         
            </Tab>
            <Tab label="تاخیر ها" path="PMWorks/WODelay">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WODelay"
                    target="WorkOrderID"
                >
                    <Datagrid>
                        <ReferenceField label="نام تاخیر" textAlgin="right" source="DelayID" reference="PMWorks/Delay">
                            <TextField source="DelayName" />
                        </ReferenceField>
                        <ReferenceField label="کد تاخیر" textAlgin="right" source="DelayID" reference="PMWorks/Delay">
                            <TextField source="DelayCode" />
                        </ReferenceField>
                        <NumberField label="روز" textAlgin="right" source="DayAmount" />
                        <NumberField label="ساعت" textAlgin="right" source="HourAmount" />
                        <ShowButton />
                        <DeleteButton />
                    </Datagrid>
                </ReferenceManyField>
                <AddDelayButton />
            </Tab>
            <Tab label="قطعات" path="PMWorks/WOSparePart">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOSparePart"
                    target="WorkOrderID"
                >
                    <Datagrid>
                        <ReferenceField label="نام سند" textAlgin="right" source="SparePartID" reference="PMWorks/SparePart">
                            <TextField source="SparePartName" />
                        </ReferenceField>
                        <ReferenceField label="کد سند" textAlgin="right" source="SparePartID" reference="PMWorks/SparePart">
                            <TextField source="SparePartCode" />
                        </ReferenceField>
                        <NumberField label="تعداد" textAlgin="right" source="SparePartAmount" />
                        <ShowButton />
                        <DeleteButton />
                    </Datagrid>
                </ReferenceManyField>
                <AddSparePartButton />
            </Tab>
            <Tab label="فعالیت ها" path="PMWorks/WOTask">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOTask"
                    target="WorkOrderID"
                >
                    <Datagrid>
                        <ReferenceField label="نام فعالیت" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                            <TextField source="TaskName" />
                        </ReferenceField>
                        <ReferenceField label="کد فعالیت" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                            <TextField source="TaskCode" />
                        </ReferenceField>
                        <TextField label="وضعیت انجام" textAlgin="right" source="WOTaskSituationOfDo" />
                        <ShowButton />
                        <DeleteButton />
                    </Datagrid>
                </ReferenceManyField>
                <AddTaskButton />
            </Tab>
        </TabbedShowLayout>
    </Show>
);


export default WorkOrderShow;
