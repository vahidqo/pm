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
    List,
    downloadCSV,
    ShowButton,
    SelectField
}
from 'react-admin';
import WorkOrderTitle from './WorkOrderTitle';
import JalaaliDateField  from '../Components/JalaaliDateField';

import AddSupplierButton from './AddSupplierButton';
import AddDelayButton from './AddDelayButton';
import AddTaskButton from './AddTaskButton';
import { makeStyles } from '@material-ui/core';
import WOSupplierFilter from '../WOSupplier/WOSupplierFilter';
import WOPersonnelFilter from '../WOPersonnel/WOPersonnelFilter';
import WODelayFilter from '../WODelay/WODelayFilter';
import WOSparePartFilter from '../WOSparePart/WOSparePartFilter';
import WOTaskFilter from '../WOTask/WOTaskFilter';
import jsonExport from 'jsonexport/dist';
import WOStatusFilter from '../WOStatus/WOStatusFilter';
import AddWOStatusButton from './AddWOStatusButton';
import AddPersonnelButton from '../WOTask/AddPersonnelButton';
import AddSparePartButton from '../WOTask/AddSparePartButton';

const exporterSupplier = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'SupplierList')
  
    })
};

const exporterPersonnel = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'PersonnelList')
  
    })
};

const exporterDelay = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'DelayList')
  
    })
};

const exporterSparePart = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'SparePartList')
  
    })
};

const exporterTask = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'TaskList')
  
    })
};

const exporterWOStatus = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'WOStatusList')
  
    })
};

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

const WOStatusActions = ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddWOStatusButton record={data}/>
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

const freq = [
    { _id: 'D', full_name: 'انجام شده'},
    { _id: 'ND', full_name: 'انجام نشده'},
    { _id: 'N', full_name: 'نیاز به انجام نمی‌باشد'}
];

WorkOrderField.defaultProps = { label: 'کد دستور کار', addLabel: true };

JalaaliDateField.defaultProps = { addLabel: true};

const WOoSparePartActions = ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddSparePartButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
    </TopToolbar>
);
};

const WOoPersonnelActions = ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddPersonnelButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
    </TopToolbar>
);
};

const WOTaskList = (props) => {

    const {
        record
    } = useShowController(props);

    const classes = useStyles();

    return(
        <Show actions={null} {...props} title={false}>
            <TabbedShowLayout syncWithLocation={false}>
                <Tab label="قطعات یدکی" path="PMWorks/WOSparePart">
                    <ReferenceManyField
                        addLabel={false}
                        reference="PMWorks/WOSparePart"
                        target="WOTaskID"
                        filter={{ WOTaskID: record.id }}
                    >
                    <List exporter={exporterSparePart} empty={false} filters={<WOSparePartFilter />} actions={<WOoSparePartActions data={record}/>}>
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
                <Tab label="پرسنل" path="PMWorks/WOPersonnel">
                    <ReferenceManyField
                        addLabel={false}
                        reference="PMWorks/WOPersonnel"
                        target="WOTaskID"
                        filter={{ WOTaskID: record.id }}
                    >
                    <List exporter={exporterPersonnel} empty={false} filters={<WOPersonnelFilter />} actions={<WOoPersonnelActions data={record}/>}>
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
            </TabbedShowLayout>
        </Show>
    );
};


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
                <ReferenceField label="کد تجهیز" textAlgin="right" source="WorkRequestID__AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                    <TextField source="AssetCode" />
                </ReferenceField>
                <ReferenceField label="نام تجهیز" textAlgin="right" source="WorkRequestID__AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                    <TextField source="AssetName" />
                </ReferenceField>
                <ReferenceField label="خرابی" textAlgin="right" source="WorkRequestID__FailureModeID" reference="PMWorks/FailureMode">
                    <TextField source="FailureModeName" />
                </ReferenceField>
                <ReferenceField label="وضعیت" textAlgin="right" source="StatusID" reference="PMWorks/Status">
                    <TextField source="StatusName" />
                </ReferenceField>
                <TextField className={classes.sho} label="توضیحات" textAlgin="right" source="WODescription"/>
            </Tab>
            <Tab label="وضعیت" path="PMWorks/WOStatus">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOStatus"
                    target="WorkOrderID"
                    filter={{ WorkOrderID: record.id }}
                >
                <List exporter={exporterWOStatus} empty={false} filters={<WOStatusFilter />} actions={<WOStatusActions data={record}/>}>
                    <Datagrid>
                        <ReferenceField label="کد وضعیت" textAlgin="right" source="StatusID" reference="PMWorks/Status">
                            <TextField source="StatusCode" />
                        </ReferenceField>
                        <ReferenceField label="نام وضعیت" textAlgin="right" source="StatusID" reference="PMWorks/Status">
                            <TextField source="StatusName" />
                        </ReferenceField>
                        <JalaaliDateField label="تاریخ ثبت" textAlgin="right" source="StatusDate" />
                        <NumberField label="زمان ثبت" textAlgin="right" source="StatusTime" />
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
                <List exporter={exporterTask} empty={false} filters={<WOTaskFilter />} actions={<WOTaskActions data={record}/>}>
                    <Datagrid expand={<WOTaskList />}>
                        <ReferenceField label="نام فعالیت" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                            <TextField source="TaskName" />
                        </ReferenceField>
                        <ReferenceField label="کد فعالیت" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                            <TextField source="TaskCode" />
                        </ReferenceField>
                        <SelectField label="وضعیت انجام" textAlgin="right" source="WOTaskSituationOfDo" choices={freq} optionText="full_name" optionValue="_id" />
                        <ShowButton/>
                    </Datagrid>
                </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="تامین کننده" path="PMWorks/WOSupplier">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOSupplier"
                    target="WorkOrderID"
                    filter={{ WorkOrderID: record.id }}
                >
                <List exporter={exporterSupplier} empty={false} filters={<WOSupplierFilter />} actions={<WOSupplierActions data={record}/>}>
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
            <Tab label="تاخیر ها" path="PMWorks/WODelay">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WODelay"
                    target="WorkOrderID"
                    filter={{ WorkOrderID: record.id }}
                >
                <List exporter={exporterDelay} empty={false} filters={<WODelayFilter />} actions={<WODelayActions data={record}/>}>
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
                    filter={{ WOTask__WorkOrderID: record.id }}
                >
                <List exporter={exporterSparePart} empty={false} filters={<WOSparePartFilter />} actions={<WOSparePartActions data={record}/>}>
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
            <Tab label="پرسنل" path="PMWorks/WOPersonnel">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOPersonnel"
                    target="WorkOrderID"
                    filter={{ WOTask__WorkOrderID: record.id }}
                >
                <List exporter={exporterPersonnel} empty={false} filters={<WOPersonnelFilter />} actions={<WOPersonnelActions data={record}/>}>
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
        </TabbedShowLayout>
    </Show>
);
};

export default WorkOrderShow;
