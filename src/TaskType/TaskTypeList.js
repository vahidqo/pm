import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ExportButton,
    Responsive,
    ShowButton,
    SimpleList,
    CreateButton,
    TopToolbar
}
from 'react-admin';
import TaskTypeFilter from './TaskTypeFilter';
import { ImportButton } from "react-admin-import-csv";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    ex: {
        fontFamily: 'inherit',
    }
});

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

const TaskTypeList = props => (
    <List actions={<ListActions />} filters={<TaskTypeFilter />} {...props} title="انواع وظیفه">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.TaskTypeName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد نوع وظیفه" textAlgin="right" source="TaskTypeCode" />
                    <TextField label="نام نوع وظیفه" textAlgin="right" source="TaskTypeName" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default TaskTypeList;
