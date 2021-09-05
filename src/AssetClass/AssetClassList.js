import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    Responsive,
    ShowButton,
    SimpleList,
    EditButton,
    TopToolbar,
    CreateButton,
    ExportButton
}
from 'react-admin';
import AssetClassFilter from './AssetClassFilter';
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

const AssetClassList = props => (
    <List actions={<ListActions />} filters={<AssetClassFilter />} {...props} title="خانواده تجهیز">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.AssetClassName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetClassCode" />
                    <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetClassName" />
                    <ReferenceField label="گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryID" reference="PMWorks/AssetCategory" sortBy="AssetCategoryID__AssetCategoryName">
                        <TextField source="AssetCategoryName" />
                    </ReferenceField>
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default AssetClassList;
