import React, { useState } from 'react';
import {
    List,
    Datagrid,
    TextField,
    Show,
    CardActions,
}
from 'react-admin';
import { makeStyles } from '@material-ui/core';
import Button from "@material-ui/core/Button";


const SelectButton = ({ record, setId }) =>{
    
    return(
    <Button onClick={() => setId(record.id)} color="secondary">
     انتخاب
    </Button>
  );
    };


const useStyles = makeStyles({
    head: {
        display: 'none',
    },
    list:{
        width: 700,
    },
});

const NoneActions = props => (
    <CardActions />
); 

const AssetCategoryTitle = ({...props}) => {
    return <span>زیر مجموعه {props ? `"${props.record.id}"` : ''}</span>;
};

const AssetCategory5 = ({ setId, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetCategoryTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} {...props} filter={{ AssetClassFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }}>
                <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                <SelectButton setId={setId} />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetCategory4 = ({ setId, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetCategoryTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} {...props} filter={{ AssetClassFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetCategory5 setId={setId} />}>
                <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                <SelectButton setId={setId} />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetCategory3 = ({ setId, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetCategoryTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} {...props} filter={{ AssetClassFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetCategory4 setId={setId} />}>
                <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                <SelectButton setId={setId} />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetCategory2 = ({ setId, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetCategoryTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} {...props} filter={{ AssetClassFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetCategory3 setId={setId} />}>
                <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                <SelectButton setId={setId} />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetCategory = ({ setId, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetCategoryTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} {...props} filter={{ AssetClassFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetCategory2 setId={setId} />}>
                <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                <SelectButton setId={setId} />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetCategoryList = ({ setId, ...props }) => {
    const classes = useStyles();

return(
    <List className={classes.list} {...props} actions={<NoneActions />} filter={{ AssetClassFather__isnull: true }} title="تجهیزات ">
        <Datagrid expand={<AssetCategory setId={setId} />}>
            <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
            <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
            <SelectButton setId={setId} />
        </Datagrid>
    </List>
);
};

export default AssetCategoryList;
