import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    TextInput,
    ReferenceInput,
    SelectInput
}
from 'react-admin';
import { parse } from 'query-string';


const WOTaskCreate = props => {

    const { WorkOrderID: WorkOrderID_string } = parse(props.location.search);
    const WorkOrderID = WorkOrderID_string ? parseInt(WorkOrderID_string, 10) : '';
    const redirect = WorkOrderID ? `/PMWorks/WorkOrder/${WorkOrderID}/show/PMWorks/WOTask` : false;

    return (
    <Create {...props} title="ایجاد وظیفه دستور کار">
        <SimpleForm initialValues={{ WorkOrderID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <ReferenceInput label="کد وظیفه" source="TaskID" reference="PMWorks/AssetClassTask">
                <SelectInput optionText="TaskCode" />
            </ReferenceInput>
            <TextInput textAlgin="right" label="وضعیت" source="WOTaskSituationOfDo" />
        </SimpleForm>
    </Create>
    );
};


export default WOTaskCreate;