import * as React from "react";
import {
    TextField,
    Tab,
    Show,
    ReferenceField,
    ReferenceManyField,
    TabbedShowLayout,
    Datagrid,
    TopToolbar,
    ListButton,
    EditButton,
    useShowController,
    useRecordContext,
    ExportButton,
    List
}
from 'react-admin';
import WorkRequestTitle from './WorkRequestTitle';
import JalaaliDateField  from '../Components/JalaaliDateField';
import AddFailureCauseButton from './AddFailureCauseButton';
import DateField from '../Components/JalaaliDateField';
import AddWorkOrderButton from './AddWorkOrderButton';
import { makeStyles } from '@material-ui/core';
import FailureCauseFilter from '../FailureCause/FailureCauseFilter';
import WorkOrderFilter from '../WorkOrder/WorkOrderFilter';

const ShowActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data}/>
    </TopToolbar>
);

const FailureCauseActions = ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddFailureCauseButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
    </TopToolbar>
);
};

const WorkOrderActions = ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddWorkOrderButton record={data}/>
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

const WorkRequestField  = (props) => {
    const record = useRecordContext(props);
    let str = record ? `${record.id}` : '';
    str = str.padStart(4,0);
    let text = "WR0".concat(str);
    return <span> {text} </span>;
};
WorkRequestField.defaultProps = { label: 'کد' , addLabel: true};
JalaaliDateField.defaultProps = { addLabel: true};

const WorkOrderField = ({ record = {} }) => {
    let str = record ? `${record.WorkRequestID}` : '';
    str = str.padStart(4,0);
    let text = "WR0".concat(str);
    let stro = record ? `${record.id}` : '';
    stro = stro.padStart(4,0);
    let texto = "_WO0".concat(stro);
    return <span> {text} {texto} </span>;
};

WorkOrderField.defaultProps = { label: 'کد دستور کار' };

const WorkRequestShow = (props) =>  {

    const {
        record
    } = useShowController(props);

    const classes = useStyles();

    return(
    <Show actions={<ShowActions/>} title={<WorkRequestTitle />} {...props}>
        <TabbedShowLayout>
            <Tab label="مشخصات">
                <WorkRequestField className={classes.sho} source="id"/>
                <JalaaliDateField className={classes.sho} textAlgin="right" source="WRDateOfRegistration" label="تاریخ ثبت" />
                <JalaaliDateField className={classes.sho} textAlgin="right" source="WRDate" label="تاریخ" />
                <ReferenceField className={classes.sho} label="تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                    <TextField source="AssetID__AssetName" />
                </ReferenceField>
                <ReferenceField className={classes.sho} label="نوع خرابی" textAlgin="right" source="FailureModeID" reference="PMWorks/FailureMode">
                    <TextField source="FailureModeCode" />
                </ReferenceField>
                <ReferenceField className={classes.sho} label="اولویت" textAlgin="right" source="WorkPriorityID" reference="PMWorks/WorkPriority">
                    <TextField source="WorkPriorityCode" />
                </ReferenceField>
                <ReferenceField className={classes.sho} label="نوع" textAlgin="right" source="TypeWrID" reference="PMWorks/TypeWr">
                    <TextField source="TypeWrName" />
                </ReferenceField>
            </Tab>
            <Tab label="علل خرابی" path="PMWorks/WorkRequestFailureCause">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WorkRequestFailureCause"
                    target="WorkRequestID"
                    filter={{ WorkRequestID: record.id }}
                >
                <List empty={false} filters={<FailureCauseFilter />} actions={<FailureCauseActions data={record}/>}>
                    <Datagrid>
                        <ReferenceField label="نام علت" textAlgin="right" source="FailureCauseID" reference="PMWorks/FailureCause">
                            <TextField source="FailureCauseName" />
                        </ReferenceField>
                        <ReferenceField label="کد علت" textAlgin="right" source="FailureCauseID" reference="PMWorks/FailureCause">
                            <TextField source="FailureCauseCode" />
                        </ReferenceField>
                    </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="دستور کارها" path="PMWorks/WorkOrder">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WorkOrder"
                    target="WorkRequestID"
                    filter={{ WorkRequestID: record.id }}
                >
                <List empty={false} filters={<WorkOrderFilter />} actions={<WorkOrderActions data={record}/>}>
                    <Datagrid>
                        <WorkOrderField textAlgin="right" source="id" />
                        <DateField label="تاریخ ثبت" textAlgin="right" source="WODateOfRegistration" />
                        <DateField label="تاریخ شروع" textAlgin="right" source="DateOfPlanStart" />
                        <DateField label="تاریخ پایان" textAlgin="right" source="DateOfPlanFinish" />
                    </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);
    };

export default WorkRequestShow;
