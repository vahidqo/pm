import * as React from "react";
import {
    Datagrid,
    TextField,
    ReferenceField,
    TabbedShowLayout,
    ReferenceManyField,
    Tab,
    EditButton,
    Show,
    List,
    ListButton,
    TopToolbar,
    ExportButton,
    useShowController,
}
from 'react-admin';
import AddAssetSubdivisionSparePartDataButton from './AddAssetSubdivisionSparePartDataButton';
import { makeStyles } from '@material-ui/core';
import AssetSpecificDataFilter from '../AssetSpecificData/AssetSpecificDataFilter';
import AssetSubdivisionSparePartFilter from '../AssetSubdivisionSparePart/AssetSubdivisionSparePartFilter';
import AssetSubdivisionTitle from './AssetSubdivisionTitle';

const ShowActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data}/>
    </TopToolbar>
);

const useStyles = makeStyles({
    head: {
        display: 'none',
    },
    sho: {'& label': { fontSize: '20px', color:'rgb(36 50 97)' }},
    ex: {
        fontFamily: 'inherit',
    }
});

const AssetSpecificDataActions = ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
    </TopToolbar>
);
};

const AssetSubdivisionSparePartActions = ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddAssetSubdivisionSparePartDataButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
    </TopToolbar>
);
};


const AssetSubdivisionShow = props => {

    const {
        record
    } = useShowController(props);

    const classes = useStyles();

    return(
    <Show {...props} actions={<ShowActions/>} title={<AssetSubdivisionTitle />}>
        <TabbedShowLayout>
            <Tab label="مشخصات">
                <ReferenceField className={classes.sho} label="کد تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                    <TextField source="AssetCode" />
                </ReferenceField>
                <ReferenceField className={classes.sho} label="نام تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                    <TextField source="AssetName" />
                </ReferenceField>
                <TextField className={classes.sho} label="مکان" textAlgin="right" source="AssetID__LocationID__LocationName" />
                <ReferenceField className={classes.sho} label="کلاس تجهیز" textAlgin="right" source="AssetChildID" reference="PMWorks/AssetClass">
                    <TextField source="AssetClassName" />
                </ReferenceField>
            </Tab>
            <Tab label="ویژگی ها" path="PMWorks/AssetSpecificData">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/AssetSpecificData"
                    target="AssetSubdivisionID"
                    filter={{ AssetSubdivisionID: record.id }}
                >
                    <List empty={false} filters={<AssetSpecificDataFilter />} actions={<AssetSpecificDataActions data={record}/>}>
                        <Datagrid>
                            <ReferenceField label="نام ویژگی" textAlgin="right" disabled source="SpecificDataID" reference="PMWorks/SpecificData">
                                <TextField source="SpecificDataName" />
                            </ReferenceField>
                            <ReferenceField label="کد ویژگی" textAlgin="right" source="SpecificDataID" reference="PMWorks/SpecificData">
                                <TextField source="SpecificDataCode" />
                            </ReferenceField>
                            <TextField label="مقدار" textAlgin="right" source="SpecificAmount" />
                            <EditButton />
                        </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="قطعات" path="PMWorks/AssetSubdivisionSparePart">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/AssetSubdivisionSparePart"
                    target="AssetSubdivisionID"
                    filter={{ AssetSubdivisionID: record.id }}
                >
                    <List empty={false} filters={<AssetSubdivisionSparePartFilter />} actions={<AssetSubdivisionSparePartActions data={record}/>}>
                        <Datagrid>
                            <ReferenceField label="نام قطعه" textAlgin="right" disabled source="SparePartID" reference="PMWorks/SparePart">
                                <TextField source="SparePartName" />
                            </ReferenceField>
                            <ReferenceField label="کد قطعه" textAlgin="right" disabled source="SparePartID" reference="PMWorks/SparePart">
                                <TextField source="SparePartCode" />
                            </ReferenceField>
                        </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);
    };


export default AssetSubdivisionShow;
