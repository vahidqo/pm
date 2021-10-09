import * as React from "react";
import {
    List,
    Datagrid,
    Responsive,
    ShowButton,
    SimpleList,
    ReferenceField,
    TextField,
    TopToolbar,
    CreateButton,
    ExportButton,
    FunctionField
}
from 'react-admin';
import JalaaliDateField  from '../Components/JalaaliDateField';
import { ImportButton } from "react-admin-import-csv";
import { makeStyles } from '@material-ui/core';
import  WorkRequestFilter from './WorkRequestFilter';

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

const WorkRequestField = ({ record = {} }) => {
    let str = record ? `${record.id}` : '';
    str = str.padStart(4,0);
    let text = "WR0".concat(str);
    return <span> {text} </span>;
};

WorkRequestField.defaultProps = { label: 'کد' };

const WorkRequestList = props => (
    <List actions={<ListActions />} filters={< WorkRequestFilter />} {...props} title="درخواست کار">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.id} />
            }
            medium={
                <Datagrid>
                    <WorkRequestField textAlgin="right" source="id"  label="کد" />
                    <JalaaliDateField textAlgin="right" source="WRDateOfRegistration" label="تاریخ ثبت" />
                    <JalaaliDateField textAlgin="right" source="WRDate" label="تاریخ" />
                    <ReferenceField label="نام تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                        <TextField source="AssetName" />
                    </ReferenceField>
                    <ReferenceField label="نام کلاس تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                        <TextField source="AssetClassNameChain" />
                    </ReferenceField>
                    <ReferenceField label="خرابی" textAlgin="right" source="FailureModeID" reference="PMWorks/FailureMode">
                        <TextField source="FailureModeName" />
                    </ReferenceField>
                    <ReferenceField label="اولویت" textAlgin="right" source="WorkPriorityID" reference="PMWorks/WorkPriority">
                        <TextField source="WorkPriorityName" />
                    </ReferenceField>
                    <ReferenceField label="نوع" textAlgin="right" source="TypeWrID" reference="PMWorks/TypeWr">
                        <TextField source="TypeWrName" />
                    </ReferenceField>
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default WorkRequestList;
