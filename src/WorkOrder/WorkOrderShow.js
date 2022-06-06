import React, { useEffect, useContext, useRef, forwardRef } from 'react';
import { Fragment } from 'react';
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
    SelectField,
    useMutation,
    useRefresh,
    useNotify,
    useUnselectAll,
    BulkDeleteButton,
    Button,
    ResourceContextProvider,
    SimpleShowLayout,
    useGetOne,
    FunctionField
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
import QuickSelectTaskButton from './QuickSelectTaskButton';
import DoneIcon from '@material-ui/icons/Done';
import { ImportButton } from "react-admin-import-csv";
import ScrollDialogP from './NewPersonTask';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import WOAssetSubdivisionFilter from '../WOAssetSubdivision/WOAssetSubdivisionFilter';
import JalaaliTimeField  from '../Components/JalaaliTimeField';
import ReactToPrint from 'react-to-print';
import PrintIcon from '@material-ui/icons/Print';
import IconButton from '@material-ui/core/IconButton';
import jMoment from 'moment-jalaali';

const importOptions = {
    parseConfig: {
        encoding: 'ISO-8859-1'
    },
};

const CustomTaskButton = ({ selectedIds }) => {
    const refresh = useRefresh();
    const notify = useNotify();
    const unselectAll = useUnselectAll();
    const [mutate] = useMutation();

    const onSuccess = () => {
        refresh();
        notify('فعالیت‌ها تایید شدند');
        unselectAll('PMWorks/WOTask');
    };

    const toggleDrawer = () => {{selectedIds.map(selectedId => mutate({ type: 'update', resource: 'PMWorks/WOTask', payload: { id: selectedId, data: { WOTaskSituationOfDo: 'D',}} } )) }; onSuccess()};

    return (
        <Button
            label='تایید فعالیت'
            onClick={toggleDrawer}
        >
            <DoneIcon />
        </Button>
    );
};

const AddTaskPersonnelButton = ({ selectedIds }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => () => {
        setOpen(true);
    };

    return (
        <Fragment>
            <Button
                label="افزودن پرسنل"
                onClick={handleClickOpen()}
            >
                <PermIdentityOutlinedIcon />
            </Button>
            {open ? <ScrollDialogP open={open} setOpen={setOpen} taskSelectedIds={selectedIds} /> : null}
        </Fragment>
    );
};

const TaskBulkActionButtons = props => (
    <Fragment>
        <AddTaskPersonnelButton {...props} />
        <CustomTaskButton label="تایید فعالیت" {...props} />
        <BulkDeleteButton {...props} />
    </Fragment>
);

const exporterSupplier = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'SupplierList')
  
    })
};

const exporterWOAssetSubdivision = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'WOAssetSubdivisionList')
  
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

const WOSupplierActions = ({ basePath, data }, props) => {
    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddSupplierButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
        <ImportButton label="ورودی" resource="PMWorks/WOSupplier" {...props} {...importOptions}/>
    </TopToolbar>
);
};

const WOPersonnelActions = ({ basePath, data }, props) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
        <ImportButton label="ورودی" resource="PMWorks/WOPersonnel" {...props} {...importOptions}/>
    </TopToolbar>
);
};

const WOAssetSubdivisionActions = ({ basePath, data }, props) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
        <ImportButton label="ورودی" resource="PMWorks/WOAssetSubdivision" {...props} {...importOptions}/>
    </TopToolbar>
);
};

const WODelayActions = ({ basePath, data }, props) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddDelayButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
        <ImportButton label="ورودی" resource="PMWorks/WODelay" {...props} {...importOptions}/>
    </TopToolbar>
);
};

const WOSparePartActions = ({ basePath, data }, props) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
        <ImportButton label="ورودی" resource="PMWorks/WOSparePart" {...props} {...importOptions}/>
    </TopToolbar>
);
};

const WOTaskActions = ({ basePath, data }, props) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <QuickSelectTaskButton record={data}/>        
        <AddTaskButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
        <ImportButton label="ورودی" resource="PMWorks/WOTask" {...props} {...importOptions}/>
    </TopToolbar>
);
};

const WOTaskListActions = ({ basePath, data }, props) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
        <ImportButton label="ورودی" resource="PMWorks/WOTask" {...props} {...importOptions}/>
    </TopToolbar>
);
};

const WOStatusActions = ({ basePath, data }, props) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddWOStatusButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
        <ImportButton label="ورودی" resource="PMWorks/WOStatus" {...props} {...importOptions}/>
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
    },
    page:{
        direction: 'rtl',
    },
});

const freq = [
    { _id: 'D', full_name: 'انجام شده'},
    { _id: 'ND', full_name: 'انجام نشده'},
    { _id: 'N', full_name: 'نیاز به انجام نمی‌باشد'}
];

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
                    <List syncWithLocation exporter={exporterSparePart} empty={false} filters={<WOSparePartFilter />} actions={<WOoSparePartActions data={record}/>}>
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
                    <List syncWithLocation exporter={exporterPersonnel} empty={false} filters={<WOPersonnelFilter />} actions={<WOoPersonnelActions data={record}/>}>
                        <Datagrid>
                            <ReferenceField label="نام پرسنل" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                                <TextField source="PersonnelName" />
                            </ReferenceField>
                            <ReferenceField label="فامیل پرسنل" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                                <TextField source="PersonnelFamily" />
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

const WOTask = props => {

    return(
    <ReferenceManyField
                addLabel={false}
                reference="PMWorks/WOTask"
                target="WOAssetSubdivisionID"
                filter={{ WOAssetSubdivisionID: props.record.id }}
    >
    <List {...props} empty={false} filters={<WOTaskFilter />} actions={<WOTaskActions data={props.record.id}/>} basePath="PMWorks/WOTask" title=" "  >
        <Datagrid>
            <ReferenceField label="کد فعالیت" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                <TextField source="TaskCode" />
            </ReferenceField>
            <ReferenceField label="عنوان فعالیت" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                <TextField source="TaskName" />
            </ReferenceField>
        </Datagrid>
    </List>
    </ReferenceManyField>
);
};


const WorkOrderShow = (props) => {

    const componentRef = useRef();

    const ShowActions = ({ basePath, data }) => (
        <TopToolbar>
            <ReactToPrint
              trigger={() => <IconButton><PrintIcon/></IconButton>}
              content={() =>  componentRef.current}
            />
            <ListButton basePath={basePath} />
            <EditButton basePath={basePath} record={data}/>
        </TopToolbar>
    );

    const record = props.id;

    const { data } = useGetOne('PMWorks/WorkOrder', record);

    const WorkOrderField = ({ data }) => {
        let str = data.WorkRequestID ? `${data.WorkRequestID}` : `${data.WOTemplateCode}`;
        str = data.WorkRequestID ? str.padStart(4,0) : str;
        let text = data.WorkRequestID ? "WR0".concat(str) : "PM".concat(str);
        let stro = data ? `${data.id}` : '';
        stro = stro.padStart(4,0);
        let texto = "_WO0".concat(stro);
        return <span> {text} {texto} </span>;
    };

    WorkOrderField.defaultProps = { label: 'کد دستور کار', addLabel: true };

    const classes = useStyles();
    return(
    <Show actions={<ShowActions/>} {...props} title={<WorkOrderTitle />}>
        <TabbedShowLayout syncWithLocation={false}>
            <Tab label="مشخصات">
            <div ref={componentRef} className={classes.page}>
            <SimpleShowLayout>
                <WorkOrderField data={data} className={classes.sho} textAlgin="right" source="id" />
                <FunctionField render={record => jMoment(data.WODateOfRegistration).locale('fa').format('jD jMMMM jYYYY')} className={classes.sho} label="تاریخ ثبت" textAlgin="right" source="WODateOfRegistration" />
                <FunctionField render={record => jMoment(data.DateOfPlanStart).locale('fa').format('jD jMMMM jYYYY')} className={classes.sho} label="تاریخ شروع" textAlgin="right" source="DateOfPlanStart" />
                <FunctionField render={record => jMoment(data.DateOfPlanFinish).locale('fa').format('jD jMMMM jYYYY')} className={classes.sho} label="تاریخ پایان" textAlgin="right" source="DateOfPlanFinish" />                
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
                <ReferenceManyField
                    label="لیست وضعیت"
                    reference="PMWorks/WOStatus"
                    target="WorkOrderID"
                    filter={{ WorkOrderID: record }}
                >
                    <Datagrid>
                        <ReferenceField label="کد وضعیت" textAlgin="right" source="StatusID" reference="PMWorks/Status">
                            <TextField source="StatusCode" />
                        </ReferenceField>
                        <ReferenceField label="نام وضعیت" textAlgin="right" source="StatusID" reference="PMWorks/Status">
                            <TextField source="StatusName" />
                        </ReferenceField>
                        <JalaaliDateField label="تاریخ ثبت" textAlgin="right" source="StatusDate" />
                        <JalaaliTimeField label="زمان ثبت" textAlgin="right" source="StatusTime" />
                    </Datagrid>
                </ReferenceManyField>
                <ReferenceManyField
                    label="لیست تجهیزات"
                    reference="PMWorks/WOAssetSubdivision"
                    target="WorkOrderID"
                    filter={{ WorkOrderID: record }}
                >
                    <List empty={false} actions={null} pagination={null}>
                    <Datagrid>
                        <ReferenceField label="کد تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetCode" />
                        </ReferenceField>
                        <ReferenceField label="عنوان تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetName" />
                        </ReferenceField>
                        <ReferenceField label="خانواده تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetClassNameChain" />
                        </ReferenceField>
                        <ReferenceField label="مکان" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetID__LocationID__LocationNameChain" />
                        </ReferenceField>
                    </Datagrid>
                    </List>
                </ReferenceManyField>
                <ReferenceManyField
                    label="لیست فعالیت‌ها"
                    reference="PMWorks/WOTaskOrder"
                    target="WOAssetSubdivisionID__WorkOrderID"
                    filter={{ WOAssetSubdivisionID__WorkOrderID: record }}
                >
                <ResourceContextProvider value="PMWorks/WOTaskOrder">
                <List syncWithLocation basePath="PMWorks/WOTaskOrder" filterDefaultValues={{ WOAssetSubdivisionID__WorkOrderID: record }} empty={false} actions={null} pagination={null}>
                    <Datagrid>
                        <ReferenceField label="کد تجهیز" textAlgin="right" source="WOAssetSubdivisionID__AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetCode" />
                        </ReferenceField>
                        <ReferenceField label="عنوان تجهیز" textAlgin="right" source="WOAssetSubdivisionID__AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetName" />
                        </ReferenceField>
                        <ReferenceField label="مکان" textAlgin="right" source="WOAssetSubdivisionID__AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetID__LocationID__LocationNameChain" />
                        </ReferenceField>
                        <ReferenceField label="نام فعالیت" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                            <TextField source="TaskName" />
                        </ReferenceField>
                        <ReferenceField label="کد فعالیت" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                            <TextField source="TaskCode" />
                        </ReferenceField>
                        <SelectField label="وضعیت انجام" textAlgin="right" source="WOTaskSituationOfDo" choices={freq} optionText="full_name" optionValue="_id" />
                    </Datagrid>
                </List>
                </ResourceContextProvider>
                </ReferenceManyField>
                <ReferenceManyField
                    label="لیست قطعات یدکی"
                    reference="PMWorks/WOSparePart"
                    target="WOTaskID__WOAssetSubdivisionID__WorkOrderID"
                    filter={{ WOTaskID__WOAssetSubdivisionID__WorkOrderID: record }}
                >
                <List empty={false} actions={null} pagination={null}>
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
                <ReferenceManyField
                    label="لیست نیروی انسانی"
                    reference="PMWorks/WOPersonnel"
                    target="WOTaskID__WOAssetSubdivisionID__WorkOrderID"
                    filter={{ WOTaskID__WOAssetSubdivisionID__WorkOrderID: record }}
                >
                <List empty={false} actions={null} pagination={null}>
                    <Datagrid>
                        <ReferenceField label="نام" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                            <TextField source="PersonnelName" />
                        </ReferenceField>
                        <ReferenceField label="نام‌خانوادگی" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                                <TextField source="PersonnelFamily" />
                        </ReferenceField>
                        <ReferenceField label="کد" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                            <TextField source="PersonnelCode" />
                        </ReferenceField>
                        <ReferenceField label="کد نت" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                            <TextField source="PersonnelNetCode" />
                        </ReferenceField>
                        <JalaaliDateField label="تاریخ انجام" textAlgin="right" source="WorkDate"/>
                        <NumberField label="مدت زمان انجام" textAlgin="right" source="WorkTime" />
                    </Datagrid>
                </List>
                </ReferenceManyField>
            </SimpleShowLayout>
            </div>
            </Tab>
            <Tab label="وضعیت" path="PMWorks/WOStatus">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOStatus"
                    target="WorkOrderID"
                    filter={{ WorkOrderID: record }}
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
                        <JalaaliTimeField label="زمان ثبت" textAlgin="right" source="StatusTime" />
                    </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="تجهیزات" path="PMWorks/WOAssetSubdivision">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOAssetSubdivision"
                    target="WorkOrderID"
                    filter={{ WorkOrderID: record }}
                >
                    <List empty={false} exporter={exporterWOAssetSubdivision} filters={<WOAssetSubdivisionFilter />} actions={<WOAssetSubdivisionActions data={record}/>}>
                    <Datagrid expand={<WOTask/>}>
                        <ReferenceField label="کد تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetCode" />
                        </ReferenceField>
                        <ReferenceField label="عنوان تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetName" />
                        </ReferenceField>
                        <ReferenceField label="خانواده تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetClassNameChain" />
                        </ReferenceField>
                        <ReferenceField label="مکان" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetID__LocationID__LocationNameChain" />
                        </ReferenceField>
                    </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="فعالیت ها" path="PMWorks/WOTaskOrder">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOTaskOrder"
                    target="WOAssetSubdivisionID__WorkOrderID"
                    filter={{ WOAssetSubdivisionID__WorkOrderID: record }}
                >
                <ResourceContextProvider value="PMWorks/WOTaskOrder">
                <List syncWithLocation basePath="PMWorks/WOTaskOrder" filterDefaultValues={{ WOAssetSubdivisionID__WorkOrderID: record }} exporter={exporterTask} bulkActionButtons={<TaskBulkActionButtons />} empty={false} filters={<WOTaskFilter />} actions={<WOTaskListActions data={record}/>}>
                    <Datagrid expand={<WOTaskList />}>
                        <ReferenceField label="کد تجهیز" textAlgin="right" source="WOAssetSubdivisionID__AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetCode" />
                        </ReferenceField>
                        <ReferenceField label="عنوان تجهیز" textAlgin="right" source="WOAssetSubdivisionID__AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetName" />
                        </ReferenceField>
                        <ReferenceField label="مکان" textAlgin="right" source="WOAssetSubdivisionID__AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetID__LocationID__LocationNameChain" />
                        </ReferenceField>
                        <ReferenceField label="نام فعالیت" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                            <TextField source="TaskName" />
                        </ReferenceField>
                        <ReferenceField label="کد فعالیت" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                            <TextField source="TaskCode" />
                        </ReferenceField>
                        <SelectField label="وضعیت انجام" textAlgin="right" source="WOTaskSituationOfDo" choices={freq} optionText="full_name" optionValue="_id" />
                    </Datagrid>
                </List>
                </ResourceContextProvider>
                </ReferenceManyField>
            </Tab>
            <Tab label="تامین کننده" path="PMWorks/WOSupplier">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOSupplier"
                    target="WorkOrderID"
                    filter={{ WorkOrderID: record }}
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
                    filter={{ WorkOrderID: record }}
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
                    target="WOTaskID__WOAssetSubdivisionID__WorkOrderID"
                    filter={{ WOTaskID__WOAssetSubdivisionID__WorkOrderID: record }}
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
            <Tab label="نیروی انسانی" path="PMWorks/WOPersonnel">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOPersonnel"
                    target="WOTaskID__WOAssetSubdivisionID__WorkOrderID"
                    filter={{ WOTaskID__WOAssetSubdivisionID__WorkOrderID: record }}
                >
                <List exporter={exporterPersonnel} empty={false} filters={<WOPersonnelFilter />} actions={<WOPersonnelActions data={record}/>}>
                    <Datagrid>
                        <ReferenceField label="نام" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                            <TextField source="PersonnelName" />
                        </ReferenceField>
                        <ReferenceField label="نام‌خانوادگی" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                                <TextField source="PersonnelFamily" />
                        </ReferenceField>
                        <ReferenceField label="کد" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                            <TextField source="PersonnelCode" />
                        </ReferenceField>
                        <ReferenceField label="کد نت" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                            <TextField source="PersonnelNetCode" />
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
