import * as React from "react";
import { useShowController } from 'ra-core';

import {
    Datagrid,
    TextField,
    ReferenceField,
    ShowButton,
    ShowView,
    TabbedShowLayout,
    ReferenceManyField,
    Tab,
    DeleteButton,
    CardActions,
    Show,
    List,
    NumberField
}
from 'react-admin';
import AssetClassTitle from './AssetClassTitle';
import AddSpecificDataButton from './AddSpecificDataButton';
import AddFailureModeButton from './AddFailureModeButton';
import AddAssetClassSubdivisionButton from './AddAssetClassSubdivisionButton';
import AddDocumentButton from './AddDocumentButton';
import AddTaskButton from './AddTaskButton';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    head: {
        display: 'none',
    },
});

const NoneActions = props => (
    <CardActions />
);

const AssetClassChildShow5 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title=" "
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetClassFatherID: props.record.AssetClassChildID }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }}>
                <ReferenceField label="کلاس تجیز فرزند" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass">
                    <TextField source="AssetClassName" />
                </ReferenceField>
                <TextField label="تعداد" textAlgin="right" source="AssetClassChildNumber" />
                <ShowButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetClassChildShow4 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title=" "
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetClassFatherID: props.record.AssetClassChildID }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetClassChildShow5 />}>
                <ReferenceField label="کلاس تجیز فرزند" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass">
                    <TextField source="AssetClassName" />
                </ReferenceField>
                <TextField label="تعداد" textAlgin="right" source="AssetClassChildNumber" />
                <ShowButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetClassChildShow3 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title=" "
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetClassFatherID: props.record.AssetClassChildID }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetClassChildShow4 />}>
                <ReferenceField label="کلاس تجیز فرزند" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass">
                    <TextField source="AssetClassName" />
                </ReferenceField>
                <TextField label="تعداد" textAlgin="right" source="AssetClassChildNumber" />
                <ShowButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetClassChildShow2 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title=" "
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetClassFatherID: props.record.AssetClassChildID }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetClassChildShow3 />}>
                <ReferenceField label="کلاس تجیز فرزند" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass">
                    <TextField source="AssetClassName" />
                </ReferenceField>
                <TextField label="تعداد" textAlgin="right" source="AssetClassChildNumber" />
                <ShowButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetClassChildShow = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title=" "
        actions={<NoneActions />}
    >
        <List {...props} filter={{ AssetClassFatherID: props.record.AssetClassChildID }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetClassChildShow2 />}>
                <ReferenceField label="کلاس تجیز فرزند" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass">
                    <TextField source="AssetClassName" />
                </ReferenceField>
                <TextField label="تعداد" textAlgin="right" source="AssetClassChildNumber" />
                <ShowButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </Show>
);
};


const AssetClassShow = props => (
    <Show {...props} title={<AssetClassTitle />}>
        <TabbedShowLayout>
            <Tab label="مشخصات">
                <TextField label="کد کلاس تجهیز" textAlgin="right" source="AssetClassCode" />
                <TextField label="نام کلاس تجهیز" textAlgin="right" source="AssetClassName" />
                <ReferenceField label="خانواده تجهیز" textAlgin="right" source="AssetCategoryID" reference="PMWorks/AssetCategory">
                    <TextField source="AssetCategoryName" />
                </ReferenceField>
            </Tab>
            <Tab label="ویژگی ها" path="PMWorks/AssetClassSpecificData">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/AssetClassSpecificData"
                    target="AssetClassID"
                >
                    <Datagrid>
                        <ReferenceField label="نام ویژگی" textAlgin="right" source="SpecificDataID" reference="PMWorks/SpecificData">
                            <TextField source="SpecificDataName" />
                        </ReferenceField>
                        <ReferenceField label="کد ویژگی" textAlgin="right" source="SpecificDataID" reference="PMWorks/SpecificData">
                            <TextField source="SpecificDataCode" />
                        </ReferenceField>
                        <ShowButton />
                        <DeleteButton />
                    </Datagrid>
                </ReferenceManyField>
                <AddSpecificDataButton />
            </Tab>
            <Tab label="نوع خرابی" path="PMWorks/FailureMode">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/FailureMode"
                    target="AssetClassID"
                >
                    <Datagrid>
                        <TextField label="کد نوع خرابی" textAlgin="right" source="FailureModeCode" />
                        <TextField label="نام نوع خرابی" textAlgin="right" source="FailureModeName" />
                        <ShowButton />
                        <DeleteButton />
                    </Datagrid>
                </ReferenceManyField>
                <AddFailureModeButton />         
            </Tab>
            <Tab label="زیر کلاس ها" path="PMWorks/AssetClassSubdivision">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/AssetClassSubdivision"
                    target="AssetClassFatherID"
                >
                    <Datagrid expand={<AssetClassChildShow/>}>
                        <ReferenceField label="کلاس تجیز فرزند" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass">
                            <TextField source="AssetClassName" />
                        </ReferenceField>
                        <TextField label="تعداد" textAlgin="right" source="AssetClassChildNumber" />
                        <ShowButton />
                        <DeleteButton />
                    </Datagrid>
                </ReferenceManyField>
                <AddAssetClassSubdivisionButton />
            </Tab>
            <Tab label="سند ها" path="PMWorks/AssetClassDocument">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/AssetClassDocument"
                    target="AssetClassID"
                >
                    <Datagrid>
                        <ReferenceField label="نام سند" textAlgin="right" source="DocumentID" reference="PMWorks/Document">
                            <TextField source="DocumentName" />
                        </ReferenceField>
                        <ReferenceField label="کد سند" textAlgin="right" source="DocumentID" reference="PMWorks/Document">
                            <TextField source="DocumentCode" />
                        </ReferenceField>
                        <ShowButton />
                        <DeleteButton />
                    </Datagrid>
                </ReferenceManyField>
                <AddDocumentButton />
            </Tab>
            <Tab label="فعالیت ها" path="PMWorks/AssetClassTask">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/AssetClassTask"
                    target="AssetClassID"
                >
                    <Datagrid>
                        <TextField label="کد فعالیت" textAlgin="right" source="TaskCode" />
                        <TextField label="نام فعالیت" textAlgin="right" source="TaskName" />
                        <TextField label="تناوب" textAlgin="right" source="FrequencyName" />
                        <NumberField label="مقدار تناوب" textAlgin="right" source="FrequencyAmount" />
                        <NumberField label="مدت زمان انجام" textAlgin="right" source="DurationOfDo" />
                        <TextField label="مسئول" textAlgin="right" source="Functor" />
                        <ReferenceField label="نوع فعالیت" textAlgin="right" source="TaskTypeID" reference="PMWorks/TaskType">
                            <TextField source="TaskTypeName" />
                        </ReferenceField>
                        <ReferenceField label="شغل" textAlgin="right" source="JobCategoryID" reference="PMWorks/JobCategory">
                            <TextField source="JobCategoryName" />
                        </ReferenceField>
                        <ShowButton />
                        <DeleteButton />
                    </Datagrid>
                </ReferenceManyField>
                <AddTaskButton />
            </Tab>
        </TabbedShowLayout>
    </Show>
);

export default AssetClassShow;
