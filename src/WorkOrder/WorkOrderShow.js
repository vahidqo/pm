import * as React from "react";
import {
    Datagrid,
    TextField,
    ReferenceField,
    useShowController,
    TabbedShowLayout,
    ReferenceManyField,
    Tab,
    Show,
    TopToolbar,
    NumberField,
    EditButton,
    ExportButton,
    ListButton,
    List
}
from 'react-admin';
import WorkOrderTitle from './WorkOrderTitle';
import JalaaliDateField  from '../Components/JalaaliDateField';

import AddSupplierButton from './AddSupplierButton';
import AddPersonnelButton from './AddPersonnelButton';
import AddDelayButton from './AddDelayButton';
import AddSparePartButton from './AddSparePartButton';
import AddTaskButton from './AddTaskButton';
import { makeStyles } from '@material-ui/core';
import WOSupplierFilter from '../WOSupplier/WOSupplierFilter';
import WOPersonnelFilter from '../WOPersonnel/WOPersonnelFilter';
import WODelayFilter from '../WODelay/WODelayFilter';
import WOSparePartFilter from '../WOSparePart/WOSparePartFilter';
import WOTaskFilter from '../WOTask/WOTaskFilter';

const ShowActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data}/>
    </TopToolbar>
);

const WOSupplierActions = ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddSupplierButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
    </TopToolbar>
);
};

const WOPersonnelActions = ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddPersonnelButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
    </TopToolbar>
);
};

const WODelayActions = ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddDelayButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
    </TopToolbar>
);
};

const WOSparePartActions = ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddSparePartButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
    </TopToolbar>
);
};

const WOTaskActions = ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddTaskButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
    </TopToolbar>
);
};

const useStyles = makeStyles({
    head: {
        display: 'none',
    },
    sho: {'& label': { fontSize: '20px', color:'rgb(36 50 97)' }},
    ex: {
        fontFamily: 'inherit',
    }
});

const WorkOrderField = ({ record = {} }) => {
    let str = record ? `${record.WorkRequestID}` : '';
    str = str.padStart(4,0);
    let text = "WR0".concat(str);
    let stro = record ? `${record.id}` : '';
    stro = stro.padStart(4,0);
    let texto = "_WO0".concat(stro);
    return <span> {text} {texto} </span>;
};

WorkOrderField.defaultProps = { label: 'کد دستور کار', addLabel: true };

JalaaliDateField.defaultProps = { addLabel: true};

const WorkOrderShow = (props) => {

    const {
        record
    } = useShowController(props);

    const classes = useStyles();
    return(
    <Show actions={<ShowActions/>} {...props} title={<WorkOrderTitle />}>
        <TabbedShowLayout>
            <Tab label="مشخصات">
                <WorkOrderField className={classes.sho} textAlgin="right" source="id" />
                <JalaaliDateField className={classes.sho} label="تاریخ ثبت" textAlgin="right" source="WODateOfRegistration" />
                <JalaaliDateField className={classes.sho} label="تاریخ شروع" textAlgin="right" source="DateOfPlanStart" />
                <JalaaliDateField className={classes.sho} label="تاریخ پایان" textAlgin="right" source="DateOfPlanFinish" />
                <TextField className={classes.sho} label="توضیحات" textAlgin="right" source="WODescription"/>
            </Tab>
            <Tab label="تامین کننده" path="PMWorks/WOSupplier">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOSupplier"
                    target="WorkOrderID"
                    filter={{ WorkOrderID: record.id }}
                >
                <List empty={false} filters={<WOSupplierFilter />} actions={<WOSupplierActions data={record}/>}>
                    <Datagrid>
                        <ReferenceField label="نام تامین کننده" textAlgin="right" source="SupplierID" reference="PMWorks/Supplier">
                            <TextField source="SupplierName" />
                        </ReferenceField>
                        <ReferenceField label="کد تامین کننده" textAlgin="right" source="SupplierID" reference="PMWorks/Supplier">
                            <TextField source="SupplierCode" />
                        </ReferenceField>
                        <JalaaliDateField label="تاریخ شروع" textAlgin="right" source="WorkStartDate" />
                        <JalaaliDateField label="تاریخ پایان" textAlgin="right" source="WorkFinishDate" />
                    </Datagrid>
                </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="پرسنل" path="PMWorks/WOPersonnel">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOPersonnel"
                    target="WorkOrderID"
                    filter={{ WorkOrderID: record.id }}
                >
                <List empty={false} filters={<WOPersonnelFilter />} actions={<WOPersonnelActions data={record}/>}>
                    <Datagrid>
                        <ReferenceField label="نام پرسنل" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                            <TextField source="PersonnelName" />
                        </ReferenceField>
                        <ReferenceField label="کد پرسنل" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                            <TextField source="PersonnelCode" />
                        </ReferenceField>
                        <JalaaliDateField label="تاریخ انجام" textAlgin="right" source="WorkDate"/>
                        <NumberField label="مدت زمان انجام" textAlgin="right" source="WorkTime" />
                    </Datagrid>
                </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="تاخیر ها" path="PMWorks/WODelay">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WODelay"
                    target="WorkOrderID"
                    filter={{ WorkOrderID: record.id }}
                >
                <List empty={false} filters={<WODelayFilter />} actions={<WODelayActions data={record}/>}>
                    <Datagrid>
                        <ReferenceField label="نام تاخیر" textAlgin="right" source="DelayID" reference="PMWorks/Delay">
                            <TextField source="DelayName" />
                        </ReferenceField>
                        <ReferenceField label="کد تاخیر" textAlgin="right" source="DelayID" reference="PMWorks/Delay">
                            <TextField source="DelayCode" />
                        </ReferenceField>
                        <NumberField label="روز" textAlgin="right" source="DayAmount" />
                        <NumberField label="ساعت" textAlgin="right" source="HourAmount" />
                    </Datagrid>
                </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="قطعات" path="PMWorks/WOSparePart">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOSparePart"
                    target="WorkOrderID"
                    filter={{ WorkOrderID: record.id }}
                >
                <List empty={false} filters={<WOSparePartFilter />} actions={<WOSparePartActions data={record}/>}>
                    <Datagrid>
                        <ReferenceField label="کد قطعه" textAlgin="right" source="SparePartID" reference="PMWorks/SparePart">
                            <TextField source="SparePartCode" />
                        </ReferenceField>
                        <ReferenceField label="نام قطعه" textAlgin="right" source="SparePartID" reference="PMWorks/SparePart">
                            <TextField source="SparePartName" />
                        </ReferenceField>
                        <NumberField label="تعداد" textAlgin="right" source="SparePartAmount" />
                    </Datagrid>
                </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="فعالیت ها" path="PMWorks/WOTask">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOTask"
                    target="WorkOrderID"
                    filter={{ WorkOrderID: record.id }}
                >
                <List empty={false} filters={<WOTaskFilter />} actions={<WOTaskActions data={record}/>}>
                    <Datagrid>
                        <ReferenceField label="نام فعالیت" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                            <TextField source="TaskName" />
                        </ReferenceField>
                        <ReferenceField label="کد فعالیت" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                            <TextField source="TaskCode" />
                        </ReferenceField>
                        <TextField label="وضعیت انجام" textAlgin="right" source="WOTaskSituationOfDo" />
                    </Datagrid>
                </List>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);
};

export default WorkOrderShow;
