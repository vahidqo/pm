import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Responsive,
    ShowButton,
    SimpleList,
    TopToolbar,
    CreateButton,
    ExportButton
}
from 'react-admin';
import DepartmentFilter from './DepartmentFilter';
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

const DepartmentList = props => (
    <List actions={<ListActions />} filters={<DepartmentFilter />} {...props} title="دپارتمان">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.DepartmentName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد دپارتمان" textAlgin="right" source="DepartmentCode" />
                    <TextField label="نام دپارتمان" textAlgin="right" source="DepartmentName" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default DepartmentList;
