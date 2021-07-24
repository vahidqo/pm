import * as React from "react";
import { useShowController } from 'ra-core';

import {
    Datagrid,
    TextField,
    ReferenceField,
    ShowButton,
    ListButton,
    TabbedShowLayout,
    ReferenceManyField,
    Tab,
    DeleteButton,
    CardActions,
    Show,
    List,
    NumberField,
    TopToolbar,
    EditButton
}
from 'react-admin';
import AssetClassTitle from './AssetClassTitle';
import AddSpecificDataButton from './AddSpecificDataButton';
import AddFailureModeButton from './AddFailureModeButton';
import AddAssetClassSubdivisionButton from './AddAssetClassSubdivisionButton';
import AddDocumentButton from './AddDocumentButton';
import AddTaskButton from './AddTaskButton';
import { makeStyles } from '@material-ui/core';

const ShowActions = ({ basePath, record, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);


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
    <Show actions={<ShowActions/>} {...props} title={<AssetClassTitle />}>
        <TabbedShowLayout>
            <Tab label="مشخصات">
                <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetClassCode" />
                <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetClassName" />
                <ReferenceField label="گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryID" reference="PMWorks/AssetCategory">
                    <TextField source="AssetCategoryName" />
                </ReferenceField>
            </Tab>
            <Tab label="درخت خانواده تجهیز" path="PMWorks/AssetClassSubdivision">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/AssetClassSubdivision"
                    target="AssetClassFatherID"
                >
                    <Datagrid expand={<AssetClassChildShow/>}>
                        <ReferenceField label="کد زیرنجهیز" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass" link="show">
                            <TextField source="AssetClassCode" />
                        </ReferenceField>
                        <ReferenceField label="عنوان زیرتجهیز" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass" link="show">
                            <TextField source="AssetClassName" />
                        </ReferenceField>
                        <TextField label="تعداد" textAlgin="right" source="AssetClassChildNumber" />
                        <DeleteButton redirect={false}/>
                    </Datagrid>
                </ReferenceManyField>
                <AddAssetClassSubdivisionButton />
            </Tab>
            <Tab label="پروفایل" path="PMWorks/AssetClassSpecificData">
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
                        <ReferenceField label="واحد اندازه گیری" textAlgin="right" source="SpecificDataID" reference="PMWorks/SpecificData">
                            <TextField source="Measurment" />
                        </ReferenceField>
                        <ShowButton />
                        <DeleteButton redirect={false}/>
                    </Datagrid>
                </ReferenceManyField>
                <AddSpecificDataButton />
            </Tab>
            <Tab label="استاندارسازی خرابی" path="PMWorks/FailureMode">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/FailureMode"
                    target="AssetClassID"
                >
                    <Datagrid>
                        <TextField label="کد نوع خرابی" textAlgin="right" source="FailureModeCode" />
                        <TextField label="نام نوع خرابی" textAlgin="right" source="FailureModeName" />
                        <ShowButton />
                        <DeleteButton redirect={false}/>
                    </Datagrid>
                </ReferenceManyField>
                <AddFailureModeButton />         
            </Tab>
            <Tab label="آرشیو فنی" path="PMWorks/AssetClassDocument">
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
                        <DeleteButton redirect={false}/>
                    </Datagrid>
                </ReferenceManyField>
                <AddDocumentButton />
            </Tab>
            <Tab label="فعالیت های نگهداشت" path="PMWorks/AssetClassTask">
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
                        <DeleteButton redirect={false}/>
                    </Datagrid>
                </ReferenceManyField>
                <AddTaskButton />
            </Tab>
        </TabbedShowLayout>
    </Show>
);

export default AssetClassShow;
