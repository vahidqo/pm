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
import ScrollDialog from './NewSpareTask';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import WOAssetSubdivisionFilter from '../WOAssetSubdivision/WOAssetSubdivisionFilter';
import JalaaliTimeField  from '../Components/JalaaliTimeField';
import ReactToPrint from 'react-to-print';
import PrintIcon from '@material-ui/icons/Print';
import IconButton from '@material-ui/core/IconButton';
import jMoment from 'moment-jalaali';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

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
        notify('??????????????????? ?????????? ????????');
        unselectAll('PMWorks/WOTask');
    };

    const toggleDrawer = () => {{selectedIds.map(selectedId => mutate({ type: 'update', resource: 'PMWorks/WOTask', payload: { id: selectedId, data: { WOTaskSituationOfDo: 'D',}} } )) }; onSuccess()};

    return (
        <Button
            label='?????????? ????????????'
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
                label="???????????? ?????????? ????????????"
                onClick={handleClickOpen()}
            >
                <PermIdentityOutlinedIcon />
            </Button>
            {open ? <ScrollDialogP open={open} setOpen={setOpen} taskSelectedIds={selectedIds} /> : null}
        </Fragment>
    );
};

const AddTaskSpareButton = ({ record }) => {
    const [opens, setOpens] = React.useState(false);

    const handleClickOpen = () => () => {
        setOpens(true);
    };

    return (
        <Fragment>
            <Button
                label="????????????"
                onClick={handleClickOpen()}
            >
                <TouchAppIcon />
            </Button>
            {opens ? <ScrollDialog open={opens} setOpen={setOpens} record={record} /> : null}
        </Fragment>
    );
};

const TaskBulkActionButtons = props => (
    <Fragment>
        <AddTaskPersonnelButton {...props} />
        <CustomTaskButton label="?????????? ????????????" {...props} />
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
        <ExportButton className={classes.ex} label="??????????" basePath={basePath} />
        <ImportButton label="??????????" resource="PMWorks/WOSupplier" {...props} {...importOptions}/>
    </TopToolbar>
);
};

const WOPersonnelActions = ({ basePath, data }, props) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <ExportButton className={classes.ex} label="??????????" basePath={basePath} />
        <ImportButton label="??????????" resource="PMWorks/WOPersonnel" {...props} {...importOptions}/>
    </TopToolbar>
);
};

const WOAssetSubdivisionActions = ({ basePath, data }, props) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <ExportButton className={classes.ex} label="??????????" basePath={basePath} />
        <ImportButton label="??????????" resource="PMWorks/WOAssetSubdivision" {...props} {...importOptions}/>
    </TopToolbar>
);
};

const WODelayActions = ({ basePath, data }, props) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddDelayButton record={data}/>
        <ExportButton className={classes.ex} label="??????????" basePath={basePath} />
        <ImportButton label="??????????" resource="PMWorks/WODelay" {...props} {...importOptions}/>
    </TopToolbar>
);
};

const WOSparePartActions = ({ basePath, data }, props) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <ExportButton className={classes.ex} label="??????????" basePath={basePath} />
        <ImportButton label="??????????" resource="PMWorks/WOSparePart" {...props} {...importOptions}/>
    </TopToolbar>
);
};

const WOTaskActions = ({ basePath, data }, props) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <QuickSelectTaskButton record={data}/>        
        <AddTaskButton record={data}/>
        <ExportButton className={classes.ex} label="??????????" basePath={basePath} />
        <ImportButton label="??????????" resource="PMWorks/WOTask" {...props} {...importOptions}/>
    </TopToolbar>
);
};

const WOTaskListActions = ({ basePath, data }, props) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <ExportButton className={classes.ex} label="??????????" basePath={basePath} />
        <ImportButton label="??????????" resource="PMWorks/WOTask" {...props} {...importOptions}/>
    </TopToolbar>
);
};

const WOStatusActions = ({ basePath, data }, props) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddWOStatusButton record={data}/>
        <ExportButton className={classes.ex} label="??????????" basePath={basePath} />
        <ImportButton label="??????????" resource="PMWorks/WOStatus" {...props} {...importOptions}/>
    </TopToolbar>
);
};

const useStyles = makeStyles({
    head: {
        display: 'none',
    },
    sho: {'& label': { fontSize: '20px', color:'rgb(36 50 97)' }, display: 'inline-block'},
    ex: {
        fontFamily: 'inherit',
    },
    page:{
        direction: 'rtl',
        backgroundColor: 'white',
    },
    fir: { display: 'inline-block', verticalAlign: 'top' },
    sec: { display: 'inline-block', marginRight: '50px', textAlignLast: 'left' },
});

const freq = [
    { _id: 'D', full_name: '?????????? ??????'},
    { _id: 'ND', full_name: '?????????? ????????'},
    { _id: 'N', full_name: '???????? ???? ?????????? ?????????????????'}
];

JalaaliDateField.defaultProps = { addLabel: true};

const WOoSparePartActions = ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddTaskSpareButton record={data}/>
        <ExportButton className={classes.ex} label="??????????" basePath={basePath} />
    </TopToolbar>
);
};

const WOoPersonnelActions = ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddPersonnelButton record={data}/>
        <ExportButton className={classes.ex} label="??????????" basePath={basePath} />
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
                <Tab label="?????????? ????????" path="PMWorks/WOSparePart">
                    <ReferenceManyField
                        addLabel={false}
                        reference="PMWorks/WOSparePart"
                        target="WOTaskID"
                        filter={{ WOTaskID: record.id }}
                    >
                    <List syncWithLocation exporter={exporterSparePart} empty={false} filters={<WOSparePartFilter />} actions={<WOoSparePartActions data={record}/>}>
                        <Datagrid>
                            <ReferenceField label="???? ????????" textAlgin="right" source="SparePartID" reference="PMWorks/SparePart">
                                <TextField source="SparePartCode" />
                            </ReferenceField>
                            <ReferenceField label="?????? ????????" textAlgin="right" source="SparePartID" reference="PMWorks/SparePart">
                                <TextField source="SparePartName" />
                            </ReferenceField>
                            <NumberField label="??????????" textAlgin="right" source="SparePartAmount" />
                        </Datagrid>
                        </List>
                    </ReferenceManyField>
                </Tab>
                <Tab label="??????????" path="PMWorks/WOPersonnel">
                    <ReferenceManyField
                        addLabel={false}
                        reference="PMWorks/WOPersonnel"
                        target="WOTaskID"
                        filter={{ WOTaskID: record.id }}
                    >
                    <List syncWithLocation exporter={exporterPersonnel} empty={false} filters={<WOPersonnelFilter />} actions={<WOoPersonnelActions data={record}/>}>
                        <Datagrid>
                            <ReferenceField label="?????? ??????????" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                                <TextField source="PersonnelName" />
                            </ReferenceField>
                            <ReferenceField label="?????????? ??????????" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                                <TextField source="PersonnelFamily" />
                            </ReferenceField>
                            <ReferenceField label="???? ??????????" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                                <TextField source="PersonnelCode" />
                            </ReferenceField>
                            <JalaaliDateField label="?????????? ??????????" textAlgin="right" source="WorkDate"/>
                            <NumberField label="?????? ???????? ??????????" textAlgin="right" source="WorkTime" />
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
            <ReferenceField label="???? ????????????" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                <TextField source="TaskCode" />
            </ReferenceField>
            <ReferenceField label="?????????? ????????????" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
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
              trigger={() => <IconButton style={{color: '#243261', paddingTop: '2px', paddingLeft: '10px'}}><PrintIcon/></IconButton>}
              content={() =>  componentRef.current}
            />
            <ListButton basePath={basePath} />
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

    WorkOrderField.defaultProps = { label: '???? ?????????? ??????', addLabel: true };

    const Empty = () => {
   
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };};

    const rows = [
            createData(' ',' ',' ',' ',' '),
            createData(' ',' ',' ',' ',' '),
            createData(' ',' ',' ',' ',' '),
            createData(' ',' ',' ',' ',' '),
          ];
    return (
        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">???? ????????</TableCell>
            <TableCell align="right">?????? ????????</TableCell>
            <TableCell align="right">??????????</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

const EmptyP = () => {
   
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };};

    const rows = [
            createData(' ',' ',' ',' ',' '),
            createData(' ',' ',' ',' ',' '),
            createData(' ',' ',' ',' ',' '),
            createData(' ',' ',' ',' ',' '),
          ];
    return (
        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">??????</TableCell>
            <TableCell align="right">?????? ????????????????</TableCell>
            <TableCell align="right">????</TableCell>
            <TableCell align="right">???? ????</TableCell>
            <TableCell align="right">?????????? ??????????</TableCell>
            <TableCell align="right">?????? ???????? ??????????</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

    const classes = useStyles();
    
    return(
    <Show actions={<ShowActions/>} {...props} title={<WorkOrderTitle />}>
        <TabbedShowLayout syncWithLocation={false}>
            <Tab label="????????????">
            <div ref={componentRef} className={classes.page}>
            <SimpleShowLayout>
                <Typography variant="h4" style={{marginRight: '40%'}}>
                ?????? ?????????? ??????
                </Typography>
                <Divider style={{marginRight: '30%', width: '50%'}}/>
                <WorkOrderField data={data} className={classes.sho} textAlgin="right" source="id" />
                <FunctionField className={classes.sec} render={record => jMoment(data.WODateOfRegistration).locale('fa').format('jD jMMMM jYYYY')} className={classes.sho} label="?????????? ??????" textAlgin="right" source="WODateOfRegistration" />
                <FunctionField className={classes.sec} render={record => jMoment(data.DateOfPlanStart).locale('fa').format('jD jMMMM jYYYY')} className={classes.sho} label="?????????? ????????" textAlgin="right" source="DateOfPlanStart" />
                <FunctionField className={classes.sec} render={record => jMoment(data.DateOfPlanFinish).locale('fa').format('jD jMMMM jYYYY')} className={classes.sho} label="?????????? ??????????" textAlgin="right" source="DateOfPlanFinish" />                
                <ReferenceField className={classes.sec} label="??????????" textAlgin="right" source="WorkRequestID__FailureModeID" reference="PMWorks/FailureMode">
                    <TextField source="FailureModeName" />
                </ReferenceField>
                <ReferenceField className={classes.sec} label="??????????" textAlgin="right" source="StatusID" reference="PMWorks/Status">
                    <TextField source="StatusName" />
                </ReferenceField>
                <TextField className={classes.sho} label="??????????????" textAlgin="right" source="WODescription"/>
                <Divider />
                <Grid container spacing={1}>
                <Grid item xs={12}>
                <Typography variant="h7" style={{marginRight: '40%'}}>
                ???????? ???????????????????
                </Typography>
                </Grid>
                <Divider style={{marginRight: '30%', width: '50%'}}/>
                <Grid item xs={12}>
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOTaskOrder"
                    target="WOAssetSubdivisionID__WorkOrderID"
                    filter={{ WOAssetSubdivisionID__WorkOrderID: record }}
                >
                <ResourceContextProvider value="PMWorks/WOTaskOrder">
                <List perPage={1000} syncWithLocation basePath="PMWorks/WOTaskOrder" filterDefaultValues={{ WOAssetSubdivisionID__WorkOrderID: record }} empty={false} actions={null} pagination={null}>
                    <Datagrid>
                        <ReferenceField label="???? ??????????" textAlgin="right" source="WOAssetSubdivisionID__AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetCode" />
                        </ReferenceField>
                        <ReferenceField label="?????????? ??????????" textAlgin="right" source="WOAssetSubdivisionID__AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetName" />
                        </ReferenceField>
                        <ReferenceField label="????????" textAlgin="right" source="WOAssetSubdivisionID__AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetID__LocationID__LocationNameChain" />
                        </ReferenceField>
                        <ReferenceField label="?????? ????????????" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                            <TextField source="TaskName" />
                        </ReferenceField>
                        <ReferenceField label="???? ????????????" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                            <TextField source="TaskCode" />
                        </ReferenceField>
                        <SelectField label="?????????? ??????????" textAlgin="right" source="WOTaskSituationOfDo" choices={freq} optionText="full_name" optionValue="_id" />
                    </Datagrid>
                </List>
                </ResourceContextProvider>
                </ReferenceManyField>
                <Divider />
                </Grid>
                <Divider />
                <Grid item xs={6}>
                <Typography variant="h7" style={{marginRight: '40%'}}>
                ???????? ?????????? ????????
                </Typography>
                <Divider style={{marginRight: '30%', width: '50%'}}/>
                </Grid>
                <Grid item xs={6}>
                <Typography variant="h7" style={{marginRight: '40%'}}>
                ???????? ?????????? ????????????
                </Typography>
                <Divider style={{marginRight: '30%', width: '50%'}}/>
                </Grid>
                <Grid item xs={6}>
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOSparePart"
                    target="WOTaskID__WOAssetSubdivisionID__WorkOrderID"
                    filter={{ WOTaskID__WOAssetSubdivisionID__WorkOrderID: record }}
                >
                <List empty={<Empty />} actions={null} pagination={null}>
                    <Datagrid>
                        <ReferenceField label="???? ????????" textAlgin="right" source="SparePartID" reference="PMWorks/SparePart">
                            <TextField source="SparePartCode" />
                        </ReferenceField>
                        <ReferenceField label="?????? ????????" textAlgin="right" source="SparePartID" reference="PMWorks/SparePart">
                            <TextField source="SparePartName" />
                        </ReferenceField>
                        <NumberField label="??????????" textAlgin="right" source="SparePartAmount" />
                    </Datagrid>
                </List>
                </ReferenceManyField>
                </Grid>
                <Grid item xs={6}>
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOPersonnel"
                    target="WOTaskID__WOAssetSubdivisionID__WorkOrderID"
                    filter={{ WOTaskID__WOAssetSubdivisionID__WorkOrderID: record }}
                >
                <List empty={<EmptyP />} actions={null} pagination={null}>
                    <Datagrid>
                        <ReferenceField label="??????" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                            <TextField source="PersonnelName" />
                        </ReferenceField>
                        <ReferenceField label="?????????????????????????" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                                <TextField source="PersonnelFamily" />
                        </ReferenceField>
                        <ReferenceField label="????" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                            <TextField source="PersonnelCode" />
                        </ReferenceField>
                        <ReferenceField label="???? ????" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                            <TextField source="PersonnelNetCode" />
                        </ReferenceField>
                        <JalaaliDateField label="?????????? ??????????" textAlgin="right" source="WorkDate"/>
                        <NumberField label="?????? ???????? ??????????" textAlgin="right" source="WorkTime" />
                    </Datagrid>
                </List>
                </ReferenceManyField>
                </Grid>
                </Grid>
            </SimpleShowLayout>
            </div>
            </Tab>
            <Tab label="??????????" path="PMWorks/WOStatus">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOStatus"
                    target="WorkOrderID"
                    filter={{ WorkOrderID: record }}
                >
                <List exporter={exporterWOStatus} empty={false} filters={<WOStatusFilter />} actions={<WOStatusActions data={record}/>}>
                    <Datagrid>
                        <ReferenceField label="???? ??????????" textAlgin="right" source="StatusID" reference="PMWorks/Status">
                            <TextField source="StatusCode" />
                        </ReferenceField>
                        <ReferenceField label="?????? ??????????" textAlgin="right" source="StatusID" reference="PMWorks/Status">
                            <TextField source="StatusName" />
                        </ReferenceField>
                        <JalaaliDateField label="?????????? ??????" textAlgin="right" source="StatusDate" />
                        <JalaaliTimeField label="???????? ??????" textAlgin="right" source="StatusTime" />
                    </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="??????????????" path="PMWorks/WOAssetSubdivision">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOAssetSubdivision"
                    target="WorkOrderID"
                    filter={{ WorkOrderID: record }}
                >
                    <List empty={false} exporter={exporterWOAssetSubdivision} filters={<WOAssetSubdivisionFilter />} actions={<WOAssetSubdivisionActions data={record}/>}>
                    <Datagrid expand={<WOTask/>}>
                        <ReferenceField label="???? ??????????" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetCode" />
                        </ReferenceField>
                        <ReferenceField label="?????????? ??????????" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetName" />
                        </ReferenceField>
                        <ReferenceField label="?????????????? ??????????" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetClassNameChain" />
                        </ReferenceField>
                        <ReferenceField label="????????" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetID__LocationID__LocationNameChain" />
                        </ReferenceField>
                    </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="???????????? ????" path="PMWorks/WOTaskOrder">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOTaskOrder"
                    target="WOAssetSubdivisionID__WorkOrderID"
                    filter={{ WOAssetSubdivisionID__WorkOrderID: record }}
                >
                <ResourceContextProvider value="PMWorks/WOTaskOrder">
                <List syncWithLocation basePath="PMWorks/WOTaskOrder" filterDefaultValues={{ WOAssetSubdivisionID__WorkOrderID: record }} exporter={exporterTask} bulkActionButtons={<TaskBulkActionButtons />} empty={false} filters={<WOTaskFilter />} actions={<WOTaskListActions data={record}/>}>
                    <Datagrid expand={<WOTaskList />}>
                        <ReferenceField label="???? ??????????" textAlgin="right" source="WOAssetSubdivisionID__AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetCode" />
                        </ReferenceField>
                        <ReferenceField label="?????????? ??????????" textAlgin="right" source="WOAssetSubdivisionID__AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetName" />
                        </ReferenceField>
                        <ReferenceField label="????????" textAlgin="right" source="WOAssetSubdivisionID__AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetID__LocationID__LocationNameChain" />
                        </ReferenceField>
                        <ReferenceField label="?????? ????????????" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                            <TextField source="TaskName" />
                        </ReferenceField>
                        <ReferenceField label="???? ????????????" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                            <TextField source="TaskCode" />
                        </ReferenceField>
                        <SelectField label="?????????? ??????????" textAlgin="right" source="WOTaskSituationOfDo" choices={freq} optionText="full_name" optionValue="_id" />
                    </Datagrid>
                </List>
                </ResourceContextProvider>
                </ReferenceManyField>
            </Tab>
            <Tab label="?????????? ??????????" path="PMWorks/WOSupplier">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOSupplier"
                    target="WorkOrderID"
                    filter={{ WorkOrderID: record }}
                >
                <List exporter={exporterSupplier} empty={false} filters={<WOSupplierFilter />} actions={<WOSupplierActions data={record}/>}>
                    <Datagrid>
                        <ReferenceField label="?????? ?????????? ??????????" textAlgin="right" source="SupplierID" reference="PMWorks/Supplier">
                            <TextField source="SupplierName" />
                        </ReferenceField>
                        <ReferenceField label="???? ?????????? ??????????" textAlgin="right" source="SupplierID" reference="PMWorks/Supplier">
                            <TextField source="SupplierCode" />
                        </ReferenceField>
                        <JalaaliDateField label="?????????? ????????" textAlgin="right" source="WorkStartDate" />
                        <JalaaliDateField label="?????????? ??????????" textAlgin="right" source="WorkFinishDate" />
                    </Datagrid>
                </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="?????????? ????" path="PMWorks/WODelay">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WODelay"
                    target="WorkOrderID"
                    filter={{ WorkOrderID: record }}
                >
                <List exporter={exporterDelay} empty={false} filters={<WODelayFilter />} actions={<WODelayActions data={record}/>}>
                    <Datagrid>
                        <ReferenceField label="?????? ??????????" textAlgin="right" source="DelayID" reference="PMWorks/Delay">
                            <TextField source="DelayName" />
                        </ReferenceField>
                        <ReferenceField label="???? ??????????" textAlgin="right" source="DelayID" reference="PMWorks/Delay">
                            <TextField source="DelayCode" />
                        </ReferenceField>
                        <NumberField label="??????" textAlgin="right" source="DayAmount" />
                        <NumberField label="????????" textAlgin="right" source="HourAmount" />
                    </Datagrid>
                </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="??????????" path="PMWorks/WOSparePart">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOSparePart"
                    target="WOTaskID__WOAssetSubdivisionID__WorkOrderID"
                    filter={{ WOTaskID__WOAssetSubdivisionID__WorkOrderID: record }}
                >
                <List exporter={exporterSparePart} empty={false} filters={<WOSparePartFilter />} actions={<WOSparePartActions data={record}/>}>
                    <Datagrid>
                        <ReferenceField label="???? ????????" textAlgin="right" source="SparePartID" reference="PMWorks/SparePart">
                            <TextField source="SparePartCode" />
                        </ReferenceField>
                        <ReferenceField label="?????? ????????" textAlgin="right" source="SparePartID" reference="PMWorks/SparePart">
                            <TextField source="SparePartName" />
                        </ReferenceField>
                        <NumberField label="??????????" textAlgin="right" source="SparePartAmount" />
                    </Datagrid>
                </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="?????????? ????????????" path="PMWorks/WOPersonnel">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOPersonnel"
                    target="WOTaskID__WOAssetSubdivisionID__WorkOrderID"
                    filter={{ WOTaskID__WOAssetSubdivisionID__WorkOrderID: record }}
                >
                <List exporter={exporterPersonnel} empty={false} filters={<WOPersonnelFilter />} actions={<WOPersonnelActions data={record}/>}>
                    <Datagrid>
                        <ReferenceField label="??????" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                            <TextField source="PersonnelName" />
                        </ReferenceField>
                        <ReferenceField label="?????????????????????????" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                                <TextField source="PersonnelFamily" />
                        </ReferenceField>
                        <ReferenceField label="????" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                            <TextField source="PersonnelCode" />
                        </ReferenceField>
                        <ReferenceField label="???? ????" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                            <TextField source="PersonnelNetCode" />
                        </ReferenceField>
                        <JalaaliDateField label="?????????? ??????????" textAlgin="right" source="WorkDate"/>
                        <NumberField label="?????? ???????? ??????????" textAlgin="right" source="WorkTime" />
                    </Datagrid>
                </List>
                </ReferenceManyField>
            </Tab>   
        </TabbedShowLayout>
    </Show>
);
};

export default WorkOrderShow;
