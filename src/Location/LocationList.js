import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Show,
    ShowButton,
    CardActions,
    TopToolbar,
    ExportButton,
    CreateButton
}
from 'react-admin';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core';
import LocationFilter from './LocationFilter';
import { ImportButton } from "react-admin-import-csv";

const ListActions = (props) => {
    const classes = useStyles();
  
  return (
    <TopToolbar>
      <CreateButton/>
      <ExportButton className={classes.ex} label="خروجی"/>
      <ImportButton label="ورودی" {...props}/>
    </TopToolbar>
  );
};

const useStyles = makeStyles({
    head: {
        display: 'none',
    },
    ex: {
        fontFamily: 'inherit',
    }
});

const CreateChildButton = ({ record }) => (
    <Button
        component={Link}
        to={{
            pathname: '/PMWorks/Location/create',
            state: { record: { LocationFatherID: record.id } },
        }}
        label="اضافه کردن زیرمجموعه"
        title="اضافه کردن زیرمجموعه"
        color="secondary"
    >
        <AddIcon color="secondary" />
        زیرمجموعه
    </Button>
);


const NoneActions = props => (
    <CardActions />
);


const LocationTitle = ({...props}) => {
    return <span>زیر مجموعه {props ? `"${props.record.LocationName}"` : ''}</span>;
};

const LocationShow5 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<LocationTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ LocationFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }}>
                <TextField label="کد مکان" textAlgin="right" source="LocationCode" />
                <TextField label="نام مکان" textAlgin="right" source="LocationName" />
                <ShowButton />
            </Datagrid>
        </List>
    </Show>
);
};

const LocationShow4 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<LocationTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ LocationFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<LocationShow5 />}>
                <TextField label="کد مکان" textAlgin="right" source="LocationCode" />
                <TextField label="نام مکان" textAlgin="right" source="LocationName" />
                <CreateChildButton />
                <ShowButton />
            </Datagrid>
        </List>
    </Show>
);
};

const LocationShow3 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<LocationTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ LocationFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<LocationShow4 />}>
                <TextField label="کد مکان" textAlgin="right" source="LocationCode" />
                <TextField label="نام مکان" textAlgin="right" source="LocationName" />
                <CreateChildButton />
                <ShowButton />
            </Datagrid>
        </List>
    </Show>
);
};

const LocationShow2 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<LocationTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ LocationFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<LocationShow3 />}>
                <TextField label="کد مکان" textAlgin="right" source="LocationCode" />
                <TextField label="نام مکان" textAlgin="right" source="LocationName" />
                <CreateChildButton />
                <ShowButton />
            </Datagrid>
        </List>
    </Show>
);
};

const LocationShow = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<LocationTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ LocationFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<LocationShow2 />}>
                <TextField label="کد مکان" textAlgin="right" source="LocationCode" />
                <TextField label="نام مکان" textAlgin="right" source="LocationName" />
                <CreateChildButton />
                <ShowButton />
            </Datagrid>
        </List>
    </Show>
);
};

const LocationList = props => (
    <List {...props} actions={<ListActions />} filters={<LocationFilter />} filter={{ LocationFatherID__isnull: true }} title="مکان">
        <Datagrid expand={<LocationShow />}>
            <TextField label="کد مکان" textAlgin="right" source="LocationCode" />
            <TextField label="نام مکان" textAlgin="right" source="LocationName" />
            <CreateChildButton />
            <ShowButton />
        </Datagrid>
    </List>
);

export default LocationList;
