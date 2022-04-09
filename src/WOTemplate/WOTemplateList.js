import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    Responsive,
    ShowButton,
    SimpleList,
    NumberField,
    ExportButton,
    CreateButton,
    downloadCSV,
    TopToolbar
}
from 'react-admin';
import WOTemplateFilter from './WOTemplateFilter';
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
      downloadCSV(`${BOM} ${csv}`, 'WOTemplateList')
  
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
const WOTemplateList = props => (
    <List actions={<ListActions />} exporter={exporter} filters={<WOTemplateFilter />} {...props} title="برنامه‌ریزی دستور کار">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.id} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد" textAlgin="right" source="WOTemplateCode" />
                    <TextField label="نام" textAlgin="right" source="WOTemplateName" />
                    <NumberField label="روز تناوب" textAlgin="right" source="WOTemplateDurationDay" />
                    <NumberField label="ساعت تناوب" textAlgin="right" source="WOTemplateDurationHour" />
                    <TextField label="روز اعلام تناوب" textAlgin="right" source="WOTemplateAlarmDay" />
                    <NumberField label="ساعت اعلام تناوب" textAlgin="right" source="WOTemplateAlarmHour" />
                    <ReferenceField label="دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department">
                        <TextField source="DepartmentName" />
                    </ReferenceField>
                    <ReferenceField label="نوع" textAlgin="right" source="WOTemplateTypeID" reference="PMWorks/WOTemplateType">
                        <TextField source="WOTemplateTypeName" />
                    </ReferenceField>
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default WOTemplateList;
