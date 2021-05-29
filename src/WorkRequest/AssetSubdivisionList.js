import React, { useState } from 'react';
import { cloneElement } from 'react';
import {
    List,
    Datagrid,
    TextField,
    Show,
    EditButton,
    CardActions,
    ReferenceField,
    useListContext,
    TopToolbar,
    CreateButton,
    ExportButton,
    sanitizeListRestProps,
    ShowButton,
}
from 'react-admin';
import { makeStyles } from '@material-ui/core';
import { useForm } from 'react-final-form';
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
});

const NoneActions = props => (
    <CardActions />
); 

const AssetSubdivisionTitle = ({...props}) => {
    return <span>زیر مجموعه {props ? `"${props.record.id}"` : ''}</span>;
};

const AssetSubdivision5 = ({ setId, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetSubdivisionTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetSubdivisionFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }}>
                <ReferenceField label="تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                    <TextField source="AssetName" />
                </ReferenceField>
                <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetChildID" reference="PMWorks/AssetClass">
                    <TextField source="AssetClassName" />
                </ReferenceField>
                <SelectButton setId={setId} />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetSubdivision4 = ({ setId, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetSubdivisionTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetSubdivisionFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetSubdivision5 setId={setId} />}>
                <ReferenceField label="تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                    <TextField source="AssetName" />
                </ReferenceField>
                <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetChildID" reference="PMWorks/AssetClass">
                    <TextField source="AssetClassName" />
                </ReferenceField>
                <SelectButton setId={setId} />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetSubdivision3 = ({ setId, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetSubdivisionTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetSubdivisionFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetSubdivision4 setId={setId} />}>
                <ReferenceField label="تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                    <TextField source="AssetName" />
                </ReferenceField>
                <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetChildID" reference="PMWorks/AssetClass">
                    <TextField source="AssetClassName" />
                </ReferenceField>
                <SelectButton setId={setId} />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetSubdivision2 = ({ setId, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetSubdivisionTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetSubdivisionFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetSubdivision3 setId={setId} />}>
                <ReferenceField label="تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                    <TextField source="AssetName" />
                </ReferenceField>
                <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetChildID" reference="PMWorks/AssetClass">
                    <TextField source="AssetClassName" />
                </ReferenceField>
                <SelectButton setId={setId} />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetSubdivision = ({ setId, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetSubdivisionTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetSubdivisionFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetSubdivision2 setId={setId} />}>
                <ReferenceField label="تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                    <TextField source="AssetName" />
                </ReferenceField>
                <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetChildID" reference="PMWorks/AssetClass">
                    <TextField source="AssetClassName" />
                </ReferenceField>
                <SelectButton setId={setId} />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetSubdivisionList = ({ setId, ...props }) => (
    <List {...props} actions={<NoneActions />} filter={{ tree: 1 }} title="تجهیزات ">
        <Datagrid expand={<AssetSubdivision setId={setId} />}>
            <ReferenceField label="تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                <TextField source="AssetName" />
            </ReferenceField>
            <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetChildID" reference="PMWorks/AssetClass">
                <TextField source="AssetClassName" />
            </ReferenceField>
            <SelectButton setId={setId} />
        </Datagrid>
    </List>
);

export default AssetSubdivisionList;
