import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Responsive,
    ShowButton,
    SimpleList,
    ReferenceField,
    TopToolbar,
    CreateButton,
    ExportButton,
    downloadCSV
}
from 'react-admin';
import PersonnelFilter from './PersonnelFilter';
import { ImportButton } from "react-admin-import-csv";
import { makeStyles } from '@material-ui/core';
import jsonExport from 'jsonexport/dist';

const importOptions = {
    parseConfig: {
        encoding: 'ISO-8859-1'
    },
};
  
const exporter = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'PersonnelList')
  
    })
};

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
      <ImportButton label="ورودی" {...props} {...importOptions}/>
    </TopToolbar>
  );
};

const PersonnelList = props => (
    <List actions={<ListActions />} exporter={exporter} filters={<PersonnelFilter />} {...props} title="پرسنل">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.PersonnelName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد پرسنل" textAlgin="right" source="PersonnelCode" />
                    <TextField label="نام نت پرسنل" textAlgin="right" source="PersonnelNetCode" />
                    <TextField label="نام پرسنل" textAlgin="right" source="PersonnelName" />
                    <TextField label="فامیل پرسنل" textAlgin="right" source="PersonnelFamily" />
                    <TextField label="شماره پرسنل" textAlgin="right" source="PersonnelMobile" />
                    <ReferenceField label="دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department">
                        <TextField source="DepartmentName" />
                    </ReferenceField>
                    <ReferenceField label="کاربر" textAlgin="right" source="user" reference="PMWorks/User">
                        <TextField source="username" />
                    </ReferenceField>
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default PersonnelList;
