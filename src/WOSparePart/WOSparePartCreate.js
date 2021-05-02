import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    NumberInput,
    ReferenceInput,
    SelectInput
}
from 'react-admin';
import { parse } from 'query-string';


const WOSparePartCreate = props => {

    const { WorkOrderID: WorkOrderID_string } = parse(props.location.search);
    const WorkOrderID = WorkOrderID_string ? parseInt(WorkOrderID_string, 10) : '';
    const redirect = WorkOrderID ? `/PMWorks/WorkOrder/${WorkOrderID}/show/PMWorks/WOSparePart` : false;

    return (
    <Create {...props} title="ایجاد قطعه دستور کار">
        <SimpleForm initialValues={{ WorkOrderID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <ReferenceInput label="کد قطعه" source="SparePartID" reference="PMWorks/AssetSubdivisionSparePart">
                <ReferenceInput label="کد قطعه" source="SparePartID" reference="PMWorks/SparePart">
                    <SelectInput optionText="SparePartCode" />
                </ReferenceInput>
            </ReferenceInput>
            <NumberInput textAlgin="right" label="تعداد" source="SparePartAmount" />
        </SimpleForm>
    </Create>
    );
};


export default WOSparePartCreate;