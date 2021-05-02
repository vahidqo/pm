import * as React from "react";
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
    Button
}
from 'react-admin';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    head: {
        display: 'none',
    },
});

const ListActions = (props) => {
    const {
        className,
        exporter,
        filters,
        maxResults,
        ...rest
    } = props;
    const {
        currentSort,
        resource,
        displayedFilters,
        filterValues,
        showFilter,
        total,
    } = useListContext();
    return (
        <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
            {filters && cloneElement(filters, {
                resource,
                showFilter,
                displayedFilters,
                filterValues,
                context: 'button',
            })}
            <CreateButton basePath='/PMWorks/Asset/create' />
            <ExportButton
                disabled={total === 0}
                resource={resource}
                sort={currentSort}
                filterValues={filterValues}
                maxResults={maxResults}
            />
        </TopToolbar>
    );
};

const NoneActions = props => (
    <CardActions />
);

const AssetButton = ({ record }) => (
    <Button
      component={Link}
      to={{
        pathname: "/PMWorks/Asset/create",
        // Here we specify the initial record for the create view
        state: { record: { fakesub: record.id, LocationID: record.fakelocation, status: 1, AssetClassID: record.AssetChildID } },
        }}
        label="ایجاد تجهیز"
        title="ایجاد تجهیز"
        color="secondary"
    >
      <AddIcon />
    </Button>
  );
  

const AssetSubdivisionTitle = ({...props}) => {
    return <span>زیر مجموعه {props ? `"${props.record.id}"` : ''}</span>;
};

const AssetSubdivision5 = props => {
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
                <AssetButton />
                <ShowButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetSubdivision4 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetSubdivisionTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetSubdivisionFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetSubdivision5 />}>
                <ReferenceField label="تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                    <TextField source="AssetName" />
                </ReferenceField>
                <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetChildID" reference="PMWorks/AssetClass">
                    <TextField source="AssetClassName" />
                </ReferenceField>
                <AssetButton />
                <ShowButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetSubdivision3 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetSubdivisionTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetSubdivisionFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetSubdivision4 />}>
                <ReferenceField label="تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                    <TextField source="AssetName" />
                </ReferenceField>
                <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetChildID" reference="PMWorks/AssetClass">
                    <TextField source="AssetClassName" />
                </ReferenceField>
                <AssetButton />
                <ShowButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetSubdivision2 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetSubdivisionTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetSubdivisionFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetSubdivision3 />}>
                <ReferenceField label="تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                    <TextField source="AssetName" />
                </ReferenceField>
                <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetChildID" reference="PMWorks/AssetClass">
                    <TextField source="AssetClassName" />
                </ReferenceField>
                <AssetButton />
                <ShowButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetSubdivision = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetSubdivisionTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetSubdivisionFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetSubdivision2 />}>
                <ReferenceField label="تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                    <TextField source="AssetName" />
                </ReferenceField>
                <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetChildID" reference="PMWorks/AssetClass">
                    <TextField source="AssetClassName" />
                </ReferenceField>
                <AssetButton />
                <ShowButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetSubdivisionList = props => (
    <List {...props} actions={<ListActions />} filter={{ tree: 1 }} title="تجهیزات ">
        <Datagrid expand={<AssetSubdivision />}>
            <ReferenceField label="تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                <TextField source="AssetName" />
            </ReferenceField>
            <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetChildID" reference="PMWorks/AssetClass">
                <TextField source="AssetClassName" />
            </ReferenceField>
            <ShowButton />
        </Datagrid>
    </List>
);

export default AssetSubdivisionList;
