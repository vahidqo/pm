import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    required,
    TextInput
}
from 'react-admin';
import { parse } from 'query-string';
import SupplierRefrenceInput from './SupplierRefrenceInput';
import {JalaliInput} from 'ra-hichestan-datetime';


const WOSupplierCreate = props => {

    const { WorkOrderID: WorkOrderID_string } = parse(props.location.search);
    const WorkOrderID = WorkOrderID_string ? parseInt(WorkOrderID_string, 10) : '';
    const redirect = WorkOrderID ? `/PMWorks/WorkOrder/${WorkOrderID}/show/PMWorks/WOSupplier` : false;

    return (
    <Create {...props} title="ایجاد تامین کننده دستور کار">
        <SimpleForm initialValues={{ WorkOrderID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <SupplierRefrenceInput label="کد تامین کننده" textAlgin="right" source="SupplierID" reference="PMWorks/Supplier" allowEmpty validate={required()} perPage={10000} />
            <JalaliInput label="تاریخ شروع" source="WorkStartDate" />
            <JalaliInput label="تاریخ پایان" source="WorkFinishDate" />
        </SimpleForm>
    </Create>
    );
};


export default WOSupplierCreate;