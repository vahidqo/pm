import * as React from "react";

import {
    TextField,
    Tab,
    Show,
    ReferenceField,
    ReferenceManyField,
    TabbedShowLayout,
    ShowButton,
    DeleteButton,
    Datagrid
}
from 'react-admin';
import WorkRequestTitle from './WorkRequestTitle';
import JalaaliDateField  from '../Components/JalaaliDateField';
import AddFailureCauseButton from './AddFailureCauseButton';
import DateField from '../Components/JalaaliDateField';
import AddWorkOrderButton from './AddWorkOrderButton';

const WorkRequestField = ({ record = {} }) => {
    let str = record ? `${record.id}` : '';
    str = str.padStart(4,0);
    let text = "WR0".concat(str);
    return <span> {text} </span>;
};

WorkRequestField.defaultProps = { label: 'کد' };

const WorkOrderField = ({ record = {} }) => {
    let str = record ? `${record.WorkRequestID}` : '';
    str = str.padStart(4,0);
    let text = "WR0".concat(str);
    let stro = record ? `${record.id}` : '';
    stro = stro.padStart(4,0);
    let texto = "_WO0".concat(stro);
    return <span> {text} {texto} </span>;
};

WorkOrderField.defaultProps = { label: 'کد دستور کار' };

const WorkRequestShow = (props) => (
    <Show title={<WorkRequestTitle />} {...props}>
        <TabbedShowLayout>
            <Tab label="مشخصات">
                <WorkRequestField textAlgin="right" source="id"  label="کد" />
                <JalaaliDateField textAlgin="right" source="WRDateOfRegistration" label="تاریخ ثبت" />
                <JalaaliDateField textAlgin="right" source="WRDate" label="تاریخ" />
                <ReferenceField label="تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivisionAsset">
                    <TextField source="AssetID__AssetName" />
                </ReferenceField>
                <ReferenceField label="نوع خرابی" textAlgin="right" source="FailureModeID" reference="PMWorks/FailureMode">
                    <TextField source="FailureModeCode" />
                </ReferenceField>
                <ReferenceField label="اولویت" textAlgin="right" source="WorkPriorityID" reference="PMWorks/WorkPriority">
                    <TextField source="WorkPriorityCode" />
                </ReferenceField>
                <ReferenceField label="نوع" textAlgin="right" source="TypeWrID" reference="PMWorks/TypeWr">
                    <TextField source="TypeWrName" />
                </ReferenceField>
            </Tab>
            <Tab label="علل خرابی" path="PMWorks/WorkRequestFailureCause">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WorkRequestFailureCause"
                    target="WorkRequestID"
                >
                    <Datagrid>
                        <ReferenceField label="نام علت" textAlgin="right" source="FailureCauseID" reference="PMWorks/FailureCause">
                            <TextField source="FailureCauseName" />
                        </ReferenceField>
                        <ReferenceField label="کد علت" textAlgin="right" source="FailureCauseID" reference="PMWorks/FailureCause">
                            <TextField source="FailureCauseCode" />
                        </ReferenceField>
                        <ShowButton />
                        <DeleteButton />
                    </Datagrid>
                </ReferenceManyField>
                <AddFailureCauseButton />         
            </Tab>
            <Tab label="دستور کارها" path="PMWorks/WorkOrder">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WorkOrder"
                    target="WorkRequestID"
                >
                    <Datagrid>
                        <WorkOrderField textAlgin="right" source="id" />
                        <DateField label="تاریخ ثبت" textAlgin="right" source="WODateOfRegistration" />
                        <DateField label="تاریخ شروع" textAlgin="right" source="DateOfPlanStart" />
                        <DateField label="تاریخ پایان" textAlgin="right" source="DateOfPlanFinish" />
                        <ShowButton />
                        <DeleteButton />
                    </Datagrid>
                </ReferenceManyField>
                <AddWorkOrderButton />         
            </Tab>
        </TabbedShowLayout>
    </Show>
);


export default WorkRequestShow;
