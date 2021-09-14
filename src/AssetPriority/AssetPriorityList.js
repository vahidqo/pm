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
import AssetPriorityFilter from './AssetPriorityFilter';
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

const AssetPriorityList = props => (
    <List actions={<ListActions />} filters={<AssetPriorityFilter />} {...props} title="اولویت ها">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.AssetPriorityName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد اولویت" textAlgin="right" source="AssetPriorityCode" />
                    <TextField label="نام اولویت" textAlgin="right" source="AssetPriorityName" />
                    <TextField label="مقدار" textAlgin="right" source="AssetPriorityValue" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default AssetPriorityList;
