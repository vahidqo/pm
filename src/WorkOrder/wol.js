import React, { Fragment } from 'react';
import {
    Datagrid,
    List,
    ShowButton,
    ReferenceField,
    TextField,
    TopToolbar,
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
import  WorkOrderFilter from './WorkOrderFilter';
import jsonExport from 'jsonexport/dist';
import JalaaliDateField  from '../Components/JalaaliDateField';
import { ImportButton } from "react-admin-import-csv";

const importOptions = {
    parseConfig: {
        encoding: 'ISO-8859-1'
    },
};
  
const exporter = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'WorkOrderList')
  
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
      <ExportButton className={classes.ex} label="خروجی"/>
      <ImportButton label="ورودی" {...props} {...importOptions}/>
    </TopToolbar>
  );
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

WorkOrderField.defaultProps = { label: 'کد دستور کار' };

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
                            >
                                <WorkOrderField textAlgin="right" source="id" />
                                <JalaaliDateField label="تاریخ ثبت" textAlgin="right" source="WODateOfRegistration" />
                                <JalaaliDateField label="تاریخ شروع" textAlgin="right" source="DateOfPlanStart" />
                                <JalaaliDateField label="تاریخ پایان" textAlgin="right" source="DateOfPlanFinish" />
                                <ShowButton />
                            </Datagrid>
                        )}
                        {filterValues.StatusID__OpCl === '2' && (
                            <Datagrid {...props} ids={this.state.cl}>
                                <WorkOrderField textAlgin="right" source="id" />
                                <JalaaliDateField label="تاریخ ثبت" textAlgin="right" source="WODateOfRegistration" />
                                <JalaaliDateField label="تاریخ شروع" textAlgin="right" source="DateOfPlanStart" />
                                <JalaaliDateField label="تاریخ پایان" textAlgin="right" source="DateOfPlanFinish" />
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

const WorkOrderList = ({ classes, ...props }) => (
    <List
        {...props}
        actions={<ListActions />} exporter={exporter}
        filterDefaultValues={{ StatusID__OpCl: '1' }}
        sort={{ field: 'WODateOfRegistration', order: 'DESC' }} {...props} title="دستور کار"
        filters={<WorkOrderFilter />}
    >
        <StyledTabbedDatagrid />
    </List>
);

export default WorkOrderList;