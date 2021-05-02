import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Show,
    EditButton,
    CardActions 
}
from 'react-admin';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    head: {
        display: 'none',
    },
});

const CreateChildButton = ({ record }) => (
    <Button
        component={Link}
        to={{
            pathname: '/PMWorks/AssetCategory/create',
            state: { record: { AssetClassFather: record.id } },
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


const AssetcategoryTitle = ({...props}) => {
    return <span>زیر مجموعه {props ? `"${props.record.AssetCategoryName}"` : ''}</span>;
};

const AssetcategoryShow5 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetcategoryTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetClassFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }}>
                <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                <CreateChildButton />
                <EditButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetcategoryShow4 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetcategoryTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetClassFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetcategoryShow5 />}>
                <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                <CreateChildButton />
                <EditButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetcategoryShow3 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetcategoryTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetClassFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetcategoryShow4 />}>
                <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                <CreateChildButton />
                <EditButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetcategoryShow2 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetcategoryTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetClassFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetcategoryShow3 />}>
                <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                <CreateChildButton />
                <EditButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetcategoryShow = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetcategoryTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetClassFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetcategoryShow2 />}>
                <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                <CreateChildButton />
                <EditButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetcategoryList = props => (
    <List {...props} filter={{ AssetClassFather__isnull: true }} title="خانواده تجهیز ">
        <Datagrid expand={<AssetcategoryShow />}>
            <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
            <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
            <CreateChildButton />
            <EditButton />
        </Datagrid>
    </List>
);

export default AssetcategoryList;
