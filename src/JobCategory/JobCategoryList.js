import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Responsive,
    ShowButton,
    SimpleList,
    TopToolbar,
    ExportButton,
    CreateButton
}
from 'react-admin';
import JobCategoryFilter from './JobCategoryFilter';
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

const JobCategoryList = props => (
    <List actions={<ListActions />} filters={<JobCategoryFilter />} {...props} title="شغل">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.JobCategoryName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد شغل" textAlgin="right" source="JobCategoryCode" />
                    <TextField label="نام شغل" textAlgin="right" source="JobCategoryName" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default JobCategoryList;
