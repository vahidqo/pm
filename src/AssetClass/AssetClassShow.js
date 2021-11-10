import * as React from "react";
import {
    Datagrid,
    TextField,
    ReferenceField,
    ListButton,
    TabbedShowLayout,
    ReferenceManyField,
    Tab,
    CardActions,
    Show,
    List,
    NumberField,
    downloadCSV,
    TopToolbar,
    useShowController,
    ExportButton,
    EditButton
}
from 'react-admin';
import AssetClassTitle from './AssetClassTitle';
import AddSpecificDataButton from './AddSpecificDataButton';
import AddAssetClassSubdivisionButton from './AddAssetClassSubdivisionButton';
import AddDocumentButton from './AddDocumentButton';
import AddTaskButton from './AddTaskButton';
import AddFailureModeButton from './AddFailureModeButton';
import { makeStyles } from '@material-ui/core';
import { ImportButton } from "react-admin-import-csv";
import AssetClassSubdivisionFilter from '../AssetClassSubdivision/AssetClassSubdivisionFilter';
import AssetClassSpecificDataFilter from '../AssetClassSpecificData/AssetClassSpecificDataFilter';
import FailureModeFilter from '../FailureMode/FailureModeFilter';
import AssetClassDocumentFilter from '../AssetClassDocument/AssetClassDocumentFilter';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import jsonExport from 'jsonexport/dist';

const exporterAssetClassSubdivision = (data) => {
  const BOM = '\uFEFF'

  jsonExport(data, (err, csv) => {
    downloadCSV(`${BOM} ${csv}`, 'AssetClassSubdivisionList')

  })
};

const exporterAssetClassSpecificData = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'AssetClassSpecificDataList')
  
    })
};

const exporterFailureMode = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'FailureModeList')
  
    })
};

const exporterAssetClassDocument = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'AssetClassDocumentList')
  
    })
};

const exporterAssetClassTask = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'AssetClassTaskList')
  
    })
};

const ShowActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data}/>
    </TopToolbar>
);

const SpecificActions = ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddSpecificDataButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
    </TopToolbar>
);
};

const SubdivisionActions =  ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddAssetClassSubdivisionButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
    </TopToolbar>
);
};

const FailureActions = ({ basePath, data }) =>{

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddFailureModeButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
    </TopToolbar>
);
};

const DocumentActions = ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddDocumentButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
    </TopToolbar>
);
};

const TaskActions = ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddTaskButton record={data} />
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

const NoneActions = props => (
    <CardActions />
);

const AssetClassChildShow5 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title=" "
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetClassFatherID: props.record.AssetClassChildID }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }}>
                            <ReferenceField label="کد زیرنجهیز" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass" link="show">
                                <TextField source="AssetClassCode" />
                            </ReferenceField>
                            <ReferenceField label="عنوان زیرتجهیز" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass" link="show">
                                <TextField source="AssetClassName" />
                            </ReferenceField>
                            <TextField label="تعداد" textAlgin="right" source="AssetClassChildNumber" />
                            <CreateChildButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetClassChildShow4 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title=" "
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetClassFatherID: props.record.AssetClassChildID }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetClassChildShow5 />}>
                            <ReferenceField label="کد زیرنجهیز" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass" link="show">
                                <TextField source="AssetClassCode" />
                            </ReferenceField>
                            <ReferenceField label="عنوان زیرتجهیز" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass" link="show">
                                <TextField source="AssetClassName" />
                            </ReferenceField>
                            <TextField label="تعداد" textAlgin="right" source="AssetClassChildNumber" />
                            <CreateChildButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetClassChildShow3 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title=" "
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetClassFatherID: props.record.AssetClassChildID }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetClassChildShow4 />}>
                            <ReferenceField label="کد زیرنجهیز" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass" link="show">
                                <TextField source="AssetClassCode" />
                            </ReferenceField>
                            <ReferenceField label="عنوان زیرتجهیز" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass" link="show">
                                <TextField source="AssetClassName" />
                            </ReferenceField>
                            <TextField label="تعداد" textAlgin="right" source="AssetClassChildNumber" />
                            <CreateChildButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetClassChildShow2 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title=" "
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetClassFatherID: props.record.AssetClassChildID }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetClassChildShow3 />}>
                            <ReferenceField label="کد زیرنجهیز" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass" link="show">
                                <TextField source="AssetClassCode" />
                            </ReferenceField>
                            <ReferenceField label="عنوان زیرتجهیز" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass" link="show">
                                <TextField source="AssetClassName" />
                            </ReferenceField>
                            <TextField label="تعداد" textAlgin="right" source="AssetClassChildNumber" />
                            <CreateChildButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetClassChildShow = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title=" "
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetClassFatherID: props.record.AssetClassChildID }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetClassChildShow2 />}>
                            <ReferenceField label="کد زیرنجهیز" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass" link="show">
                                <TextField source="AssetClassCode" />
                            </ReferenceField>
                            <ReferenceField label="عنوان زیرتجهیز" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass" link="show">
                                <TextField source="AssetClassName" />
                            </ReferenceField>
                            <TextField label="تعداد" textAlgin="right" source="AssetClassChildNumber" />
                            <CreateChildButton />
            </Datagrid>
        </List>
    </Show>
);
};

const CreateChildButton = ({ record }) => (
    <Button
        component={Link}
        to={{
            pathname: '/PMWorks/AssetClassSubdivision/create',
            state: { record: { AssetClassFatherID: record.id } },
        }}
        label="اضافه کردن زیرمجموعه"
        title="اضافه کردن زیرمجموعه"
        color="secondary"
    >
        <AddIcon color="secondary" />
        زیرمجموعه
    </Button>
);


const AssetClassShow = props => {

    const {
        record
    } = useShowController(props);

    const classes = useStyles();

    return(
    <Show {...props} actions={<ShowActions/>} title={<AssetClassTitle />}>
        <TabbedShowLayout>
            <Tab label="مشخصات">
                <TextField className={classes.sho} label="کد خانواده تجهیز" textAlgin="right" source="AssetClassCode" />
                <TextField className={classes.sho} label="نام خانواده تجهیز" textAlgin="right" source="AssetClassName" />
                <ReferenceField className={classes.sho} label="گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryID" reference="PMWorks/AssetCategory">
                    <TextField source="AssetCategoryName" />
                </ReferenceField>
            </Tab>
            <Tab label="درخت خانواده تجهیز" path="PMWorks/AssetClassSubdivision">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/AssetClassSubdivision"
                    target="AssetClassFatherID"
                    filter={{ AssetClassFatherID: record.id }}
                >
                    <List empty={false} exporter={exporterAssetClassSubdivision} filters={<AssetClassSubdivisionFilter />} actions={<SubdivisionActions data={record}/>}>
                        <Datagrid expand={<AssetClassChildShow/>}>
                            <ReferenceField label="کد زیرنجهیز" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass" link="show">
                                <TextField source="AssetClassCode" />
                            </ReferenceField>
                            <ReferenceField label="عنوان زیرتجهیز" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass" link="show">
                                <TextField source="AssetClassName" />
                            </ReferenceField>
                            <TextField label="تعداد" textAlgin="right" source="AssetClassChildNumber" />
                            <CreateChildButton />
                        </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="پروفایل" path="PMWorks/AssetClassSpecificData">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/AssetClassSpecificData"
                    target="AssetClassID"
                    filter={{ AssetClassID: record.id }}
                >
                    <List empty={false} exporter={exporterAssetClassSpecificData} filters={<AssetClassSpecificDataFilter />} actions={<SpecificActions data={record}/>}>
                        <Datagrid>
                            <ReferenceField label="نام ویژگی" textAlgin="right" source="SpecificDataID" reference="PMWorks/SpecificData">
                                <TextField source="SpecificDataName" />
                            </ReferenceField>
                            <ReferenceField label="کد ویژگی" textAlgin="right" source="SpecificDataID" reference="PMWorks/SpecificData">
                                <TextField source="SpecificDataCode" />
                            </ReferenceField>
                            <ReferenceField label="واحد اندازه‌گیری" textAlgin="right" source="SpecificDataID" reference="PMWorks/SpecificData">
                                <TextField source="Measurment" />
                            </ReferenceField>
                        </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="استاندارسازی خرابی" path="PMWorks/FailureMode">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/FailureMode"
                    target="AssetClassID"
                    filter={{ AssetClassID: record.id }}
                >
                    <List empty={false} exporter={exporterFailureMode} filters={<FailureModeFilter />} actions={<FailureActions data={record}/>}>
                        <Datagrid>
                            <ReferenceField label="کد نوع خرابی" textAlgin="right" source="id" reference="PMWorks/FailureMode" sortBy="FailureModeCode">
                                <TextField source="FailureModeCode" />
                            </ReferenceField>
                            <ReferenceField label="نام نوع خرابی" textAlgin="right" source="id" reference="PMWorks/FailureMode" sortBy="FailureModeName">
                                <TextField source="FailureModeName" />
                            </ReferenceField>
                        </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="آرشیو فنی" path="PMWorks/AssetClassDocument">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/AssetClassDocument"
                    target="AssetClassID"
                    filter={{ AssetClassID: record.id }}
                >
                    <List empty={false} exporter={exporterAssetClassDocument} filters={<AssetClassDocumentFilter />} actions={<DocumentActions data={record}/>}>
                        <Datagrid>
                            <ReferenceField label="نام سند" textAlgin="right" source="DocumentID" reference="PMWorks/Document">
                                <TextField source="DocumentName" />
                            </ReferenceField>
                            <ReferenceField label="کد سند" textAlgin="right" source="DocumentID" reference="PMWorks/Document">
                                <TextField source="DocumentCode" />
                            </ReferenceField>
                        </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="فعالیت های نگهداشت" path="PMWorks/AssetClassTask">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/AssetClassTask"
                    target="AssetClassID"
                    filter={{ AssetClassID: record.id }}
                >
                    <List empty={false} exporter={exporterAssetClassTask} actions={<TaskActions data={record}/>}>
                        <Datagrid>
                            <TextField label="کد فعالیت" textAlgin="right" source="TaskCode" />
                            <TextField label="نام فعالیت" textAlgin="right" source="TaskName" />
                            <TextField label="تناوب" textAlgin="right" source="FrequencyName" />
                            <NumberField label="مقدار تناوب" textAlgin="right" source="FrequencyAmount" />
                            <NumberField label="مدت زمان انجام" textAlgin="right" source="DurationOfDo" />
                            <TextField label="مسئول" textAlgin="right" source="Functor" />
                            <ReferenceField label="نوع فعالیت" textAlgin="right" source="TaskTypeID" reference="PMWorks/TaskType">
                                <TextField source="TaskTypeName" />
                            </ReferenceField>
                            <ReferenceField label="شغل" textAlgin="right" source="JobCategoryID" reference="PMWorks/JobCategory">
                                <TextField source="JobCategoryName" />
                            </ReferenceField>
                        </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);
    };

export default AssetClassShow;
