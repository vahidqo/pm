import React, { useState } from "react";
import { Dialog } from "@material-ui/core";
import { TextField, useRefresh, useUnselectAll,
    ReferenceField, Datagrid, List, useMutation, Button,
    useNotify, NumberInput, SimpleForm, ResourceContextProvider } from "react-admin";
import { makeStyles } from '@material-ui/core/styles';
import SparePartFilter from '../SparePart/SparePartFilter';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import TouchAppIcon from '@material-ui/icons/TouchApp';

const useStyles = makeStyles({
  fir: { fontFamily: 'system-ui', marginBottom: '16px' },

});

const QuickSelectSpareButton = ({ ...props }) => {
  const [showPanel, setShowPanel] = useState(false);
  const [taskTime, setTaskTime] = React.useState(null);
  const { selectedIds } = props;
  let taskSelectedIds = selectedIds;


  const classes = useStyles();

  const toggleDrawer = () => setShowPanel((showPanel) => !showPanel);

  const AddButton = ({ selectedIds }) => {  
    const refresh = useRefresh();
    const notify = useNotify();
    const unselectAll = useUnselectAll();
    const [mutate] = useMutation();
    const unselectAlll = useUnselectAll();


    const onSuccess = () => {
        refresh();
        notify('قطعات اضافه شدند');
        unselectAll('PMWorks/WOTask');
        unselectAlll('PMWorks/SparePart');
        unselectAll('PMWorks/WOTaskk');
    };

    const toggleDrawer2 = () => {{taskSelectedIds.map(taskId => selectedIds.map(personId =>
        mutate({
        type: 'create',
        resource: 'PMWorks/WOSparePart',
        payload: {
            data: {
            WOTaskID: taskId,
            SparePartID: personId,
            SparePartAmount: parseInt(taskTime),
            }
        }
        })
    ))}; onSuccess()};

    return (
        <Button
            label='ثبت'
            onClick={toggleDrawer2}
        >
            <AddIcon />
        </Button>
    );
};

const PersonnelBulkActionButtons = props => {
    return (
        <React.Fragment>
            <AddButton label="تایید فعالیت" {...props} />
        </React.Fragment>
    )
};


const PersonnalList = (...props) => {
    return (
        <List syncWithLocation basePath="PMWorks/SparePart" bulkActionButtons={<PersonnelBulkActionButtons />} filters={<SparePartFilter />} exporter={false} actions={false} {...props}>
        <Datagrid>
            <TextField label="کد قطعه" textAlgin="right" source="SparePartCode" />
            <TextField label="نام قطعه" textAlgin="right" source="SparePartName" />
            <ReferenceField label="خانواده قطعه" textAlgin="right" source="SparePartCategoryID" reference="PMWorks/SparePartCategory">
                <TextField source="SparePartCategoryName" />
            </ReferenceField>
            <ReferenceField label="سطح قطعه" textAlgin="right" source="SparePartDimensionID" reference="PMWorks/SparePartDimension">
                <TextField source="SparePartDimensionName" />
            </ReferenceField>
        </Datagrid>
        </List>
    );
};

  return (
    <>
     <Button className={classes.fir} onClick={toggleDrawer} label="انتخاب">
        <TouchAppIcon />
      </Button>
        <Dialog fullWidth open={showPanel} onClose={toggleDrawer}>
            <SimpleForm toolbar={false}>
                    <NumberInput isRequired={true} label={"تعداد"} source={"SparePartAmount"} value={taskTime} onChange={(e) => setTaskTime(e.target.value)} />
            </SimpleForm>
            <Divider />
            <PersonnalList />
        </Dialog>
    </>
  );
};

export default QuickSelectSpareButton;