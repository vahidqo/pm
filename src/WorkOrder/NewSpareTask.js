import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { TextField, ReferenceField, Datagrid, List, useMutation, useNotify, Loading, CreateButton, NumberInput, SimpleForm, ResourceContextProvider } from "react-admin";

export default function ScrollDialog(props) {
    const [taskTime, setTaskTime] = React.useState(null);

    const [personnalSelectedIds, setPersonnalIds] = React.useState();
    let { open, setOpen, taskSelectedIds } = props;

    //close dialog window
    const handleClose = () => {
        setOpen(false);
    };


    const [mutate, { loading }] = useMutation();
    const notify = useNotify();

    const handleSubmit = () => {

    //console.log(taskTime);
    //console.log(taskSelectedIds);
    //console.log(personnalSelectedIds);

    //Check that the values are not empty
    //if (taskTime === null || taskTime === undefined || taskTime === "") return
    //if (taskSelectedIds === null || taskSelectedIds === undefined || taskSelectedIds.length === 0) return
    //if (personnalSelectedIds === null || personnalSelectedIds === undefined || personnalSelectedIds.length === 0) return

    //send post request per array indexs  task*person
        taskSelectedIds.map(taskId => personnalSelectedIds.map(personId =>
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
        ))
        notify('اطلاعات با موفقت ذخیره شد', { undoable: true });
        };


    const PersonnelBulkActionButtons = props => {
        const { selectedIds } = props;
        setPersonnalIds(selectedIds)
        return (
            <React.Fragment>
            <CreateButton onClick={handleSubmit} label={"ثبت اطلاعات"} />
            </React.Fragment>
        )
    };


    const PersonnalList = () => {
        return (
        <ResourceContextProvider value="PMWorks/SparePart" >
            <List basePath="/PMWorks/SparePart" bulkActionButtons={<PersonnelBulkActionButtons />} exporter={false} >
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
        </ResourceContextProvider>
        )
    }

    return (
        <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"md"}
        >
        {loading ? <Loading /> :
            <React.Fragment>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                <SimpleForm toolbar={false}>
                    <NumberInput isRequired={true} label={"تعداد"} source={"SparePartAmount"} value={taskTime} onChange={(e) => setTaskTime(e.target.value)} />
                </SimpleForm>
                <PersonnalList />
                </DialogContentText>
            </DialogContent>
            </React.Fragment>
        }
        </Dialog>
    );
}