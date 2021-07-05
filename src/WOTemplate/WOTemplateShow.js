import * as React from "react";
import { useShowController } from 'ra-core';

import {
    Datagrid,
    TextField,
    ReferenceField,
    ShowButton,
    List,
    TabbedShowLayout,
    ReferenceManyField,
    Tab,
    DeleteButton,
    Show,
    NumberField,
    BooleanField,
    useQuery
}
from 'react-admin';
import WOTemplateTitle from './WOTemplateTitle';
import AddTaskButton from './AddTaskButton';
import DateField from '../Components/JalaaliDateField';
import AddSchualingButton from './AddSchualingButton';
import SchualingButton from './SchualingButton';
import DoneButton from './DoneButton';


const TemplateSchualing = props => (
        <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/TemplateSchualingDate"
                    target="WOTemplateSchualingID"
                    filter={{ WOTemplateSchualingID: props.record.id }}
                    sort={{ field: 'TemplateSchualingDate', order: 'ASC' }}
        >
        <List {...props} actions={null} basePath="PMWorks/TemplateSchualingDate" title=" "  >
            <Datagrid>
                <DateField label="تاریخ" source="TemplateSchualingDate" />
                <BooleanField label="وضعیت" source="StatusOfDo" />
                <DoneButton />
            </Datagrid>
        </List>
        </ReferenceManyField>
);


const WOTemplateShow = (props) => (
    <Show {...props} title={<WOTemplateTitle />}>
        <TabbedShowLayout>
            <Tab label="فعالیت ها" path="PMWorks/WOActivityTemplate">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOActivityTemplate"
                    target="WOTemplateSchualingID"
                >
                    <Datagrid>
                        <ReferenceField label="نام فعالیت" textAlgin="right" source="AssetClassTaskID" reference="PMWorks/AssetClassTask">
                            <TextField source="TaskName" />
                        </ReferenceField>
                        <ReferenceField label="کد فعالیت" textAlgin="right" source="AssetClassTaskID" reference="PMWorks/AssetClassTask">
                            <TextField source="TaskCode" />
                        </ReferenceField>
                        <ShowButton />
                        <DeleteButton />
                    </Datagrid>
                </ReferenceManyField>
                <AddTaskButton/>
            </Tab>
            <Tab label="برنامه ریزی" path="PMWorks/WOTemplateSchualing">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOTemplateSchualing"
                    target="WOTemplateID"
                >
                    <Datagrid expand={<TemplateSchualing/>}>
                        <DateField label="تاریخ شروع" source="WOTemplateSchualingStartDate" />
                        <DateField label="تاریخ پایان" source="WOTemplateSchualingFinishDate" />
                        <NumberField label="مقدار" textAlgin="right" source="AmountFrequency"/>
                        <ReferenceField label="تناوب" textAlgin="right" source="FrequencyID" reference="PMWorks/Frequency">
                            <TextField source="FrequencyName" />
                        </ReferenceField>
                        <BooleanField label="وضعیت" source="Status" />
                        <SchualingButton />
                        <ShowButton />
                        <DeleteButton />
                    </Datagrid>
                </ReferenceManyField>
                <AddSchualingButton/>
            </Tab>
        </TabbedShowLayout>
    </Show>
);


export default WOTemplateShow;
