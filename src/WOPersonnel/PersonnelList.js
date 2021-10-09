import React from "react";
import {
    List,
    Datagrid,
    TextField,
    CardActions,
    ReferenceField,
}
from 'react-admin';
import Button from "@material-ui/core/Button";
import PersonnelFilter from '../Personnel/PersonnelFilter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    fir: { fontFamily: 'inherit' },
});

const SelectButton = ({ record, setId, setShowPanel }) =>{

    const classes = useStyles();

    const toggleDrawer = () => {setShowPanel((showPanel) => !showPanel); setId(record.id)};

    return(
    <Button className={classes.fir} onClick={toggleDrawer} color="secondary">
     انتخاب
    </Button>
  );
    };


const NoneActions = props => (
    <CardActions />
); 

const PersonnelList = ({ setId, setShowPanel, ...props }) => {

    return(
    <List filters={<PersonnelFilter />} bulkActionButtons={false} {...props} actions={<NoneActions />} title="خانواده تجهیز ">
        <Datagrid>
            <TextField label="کد پرسنل" textAlgin="right" source="PersonnelCode" />
            <TextField label="نام نت پرسنل" textAlgin="right" source="PersonnelNetCode" />
            <TextField label="نام پرسنل" textAlgin="right" source="PersonnelName" />
            <TextField label="فامیل پرسنل" textAlgin="right" source="PersonnelFamily" />
            <TextField label="شماره پرسنل" textAlgin="right" source="PersonnelMobile" />
            <ReferenceField label="دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department">
                <TextField source="DepartmentName" />
            </ReferenceField>
            <SelectButton setId={setId} setShowPanel={setShowPanel} />
        </Datagrid>
    </List>
);
    };

export default PersonnelList;
