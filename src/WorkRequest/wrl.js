import React, { Fragment } from 'react';
import {
    Datagrid,
    List,
    ShowButton,
    ReferenceField,
    TextField,
    TopToolbar,
    CreateButton,
    ExportButton,
    ReferenceManyField,
    Button,
    downloadCSV
} from 'react-admin';
import {
    makeStyles,
    useMediaQuery,
    Divider,
    Tabs,
    Tab,
} from '@material-ui/core';
import  WorkRequestFilter from './WorkRequestFilter';
import AddIcon from '@material-ui/icons/Add';
import jsonExport from 'jsonexport/dist';
import JalaaliDateField  from '../Components/JalaaliDateField';
import { ImportButton } from "react-admin-import-csv";
import { Link } from 'react-router-dom';

const importOptions = {
    parseConfig: {
        encoding: 'ISO-8859-1'
    },
};
  
const exporter = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'WorkRequestList')
  
    })
};

const useStyles = makeStyles({
    ex: {
        fontFamily: 'inherit',
    },
    dis:{
        display: 'none',
    },
});

const ListActions = (props) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
      <CreateButton/>
      <ExportButton className={classes.ex} label="خروجی"/>
      <ImportButton label="ورودی" {...props} {...importOptions}/>
    </TopToolbar>
  );
};

const WorkRequestField = ({ record = {} }) => {
    let str = record ? `${record.id}` : '';
    str = str.padStart(4,0);
    let text = "WR0".concat(str);
    return <span> {text} </span>;
};

const WorkOrderField = ({ record = {} }) => {
    let str = record ? `${record.WorkRequestID}` : '';
    str = str.padStart(4,0);
    let text = "WR0".concat(str);
    let stro = record ? `${record.id}` : '';
    stro = stro.padStart(4,0);
    let texto = "_WO0".concat(stro);
    return <span> {text} {texto} </span>;
};

WorkRequestField.defaultProps = { label: 'کد' };

const WorkOrderList = props => {

    return(
    <ReferenceManyField
                addLabel={false}
                reference="PMWorks/WorkOrder"
                target="WorkRequestID"
                filter={{ WorkRequestID: props.record.id }}
                sort={{ field: 'WODateOfRegistration', order: 'ASC' }}
    >
    <List {...props} actions={null} title=" "  >
        <Datagrid>
            <WorkOrderField textAlgin="right" source="id" />
            <JalaaliDateField label="تاریخ ثبت" textAlgin="right" source="WODateOfRegistration" />
            <JalaaliDateField label="تاریخ شروع" textAlgin="right" source="DateOfPlanStart" />
            <JalaaliDateField label="تاریخ پایان" textAlgin="right" source="DateOfPlanFinish" />
            <ShowButton />
        </Datagrid>
    </List>
    </ReferenceManyField>
);
    };

const WOButton = ({ record }) => {

    const classes = useStyles();
  
  return (
        <Button
            className={{
                [classes.dis]: record.StatusID == 11 || record.StatusID == 12,
            }}
            component={Link}
            to={`/PMWorks/WorkOrder/create?WorkRequestID=${record.id}`}
            label="ایجاد دستورکار"
            title="ایجاد دستورکار"
            color="secondary"
        >
          <AddIcon />
        </Button>
      );
        };

const useDatagridStyles = makeStyles({
    total: { fontWeight: 'bold' },
});

class TabbedDatagrid extends React.Component {
    tabs = [
        { id: '1', name: 'باز' },
        { id: '2', name: 'بایگانی' },
    ];

    state = { op: [], cl: [] };

    static getDerivedStateFromProps(props, state) {
        if (props.ids !== state[props.filterValues.StatusID__OpCl]) {
            return { ...state, [props.filterValues.StatusID__OpCl]: props.ids };
        }
        return null;
    }

    handleChange = (event, value) => {
        const { filterValues, setFilters } = this.props;
        setFilters({ ...filterValues, StatusID__OpCl: value });
    };

    render() {
        const { isXSmall, classes, filterValues, ...props } = this.props;

        return (
            <Fragment>
                <Tabs
                    variant="fullWidth"
                    centered
                    value={filterValues.StatusID__OpCl}
                    indicatorColor="primary"
                    onChange={this.handleChange}
                >
                    {this.tabs.map(choice => (
                        <Tab
                            key={choice.id}
                            label={choice.name}
                            value={choice.id}
                        />
                    ))}
                </Tabs>
                <Divider />
                    <div>
                        {filterValues.StatusID__OpCl === '1' && (
                            <Datagrid
                                {...props}
                                ids={this.state.op}
                                expand={<WorkOrderList />}
                            >
                                <WorkRequestField textAlgin="right" source="id"  label="کد" />
                                <JalaaliDateField textAlgin="right" source="WRDate" label="تاریخ" />
                                <ReferenceField label="کد تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                                    <TextField source="AssetCode" />
                                </ReferenceField>
                                <ReferenceField label="نام تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                                    <TextField source="AssetName" />
                                </ReferenceField>
                                <ReferenceField label="نام کلاس تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                                    <TextField source="AssetClassNameChain" />
                                </ReferenceField>
                                <ReferenceField label="خرابی" textAlgin="right" source="FailureModeID" reference="PMWorks/FailureMode">
                                    <TextField source="FailureModeName" />
                                </ReferenceField>
                                <ReferenceField label="اولویت" textAlgin="right" source="WorkPriorityID" reference="PMWorks/WorkPriority">
                                    <TextField source="WorkPriorityName" />
                                </ReferenceField>
                                <ReferenceField label="نوع" textAlgin="right" source="TypeWrID" reference="PMWorks/TypeWr">
                                    <TextField source="TypeWrName" />
                                </ReferenceField>
                                <WOButton />
                                <ShowButton />
                            </Datagrid>
                        )}
                        {filterValues.StatusID__OpCl === '2' && (
                            <Datagrid {...props} ids={this.state.cl} expand={<WorkOrderList />}>
                                <WorkRequestField textAlgin="right" source="id"  label="کد" />
                                <JalaaliDateField textAlgin="right" source="WRDate" label="تاریخ" />
                                <ReferenceField label="کد تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                                    <TextField source="AssetCode" />
                                </ReferenceField>
                                <ReferenceField label="نام تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                                    <TextField source="AssetName" />
                                </ReferenceField>
                                <ReferenceField label="نام کلاس تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                                    <TextField source="AssetClassNameChain" />
                                </ReferenceField>
                                <ReferenceField label="خرابی" textAlgin="right" source="FailureModeID" reference="PMWorks/FailureMode">
                                    <TextField source="FailureModeName" />
                                </ReferenceField>
                                <ReferenceField label="اولویت" textAlgin="right" source="WorkPriorityID" reference="PMWorks/WorkPriority">
                                    <TextField source="WorkPriorityName" />
                                </ReferenceField>
                                <ReferenceField label="نوع" textAlgin="right" source="TypeWrID" reference="PMWorks/TypeWr">
                                    <TextField source="TypeWrName" />
                                </ReferenceField>
                                <ShowButton />
                            </Datagrid>
                        )}
                    </div>
            </Fragment>
        );
    }
}

const StyledTabbedDatagrid = props => {
    const classes = useDatagridStyles();
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    return <TabbedDatagrid classes={classes} isXSmall={isXSmall} {...props} />;
};

const WorkRequestList = ({ classes, ...props }) => (
    <List
        {...props}
        actions={<ListActions />} exporter={exporter}
        filterDefaultValues={{ StatusID__OpCl: '1' }}
        sort={{ field: 'WRDate', order: 'DESC' }} {...props} title="درخواست کار"
        filters={<WorkRequestFilter />}
    >
        <StyledTabbedDatagrid />
    </List>
);

export default WorkRequestList;