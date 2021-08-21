import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    ReferenceManyField,
    Datagrid,
    TopToolbar,
    ListButton,
    EditButton,
}
from 'react-admin';

const AssetCategoryTitle = ({ record }) => {
    return <span> {record ? `"${record.AssetCategoryName}"` : ''}</span>;
};

const ShowActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data}/>
    </TopToolbar>
);

const AssetCategoryShow = (props) => {

    return(
    <Show actions={<ShowActions />} title={<AssetCategoryTitle />} {...props}>
        <SimpleShowLayout>
            <TextField label="کد گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
            <TextField label="نام گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
            <ReferenceManyField
            reference="PMWorks/AssetCategory"
            target="AssetClassFather"
            label="زیر گروه خانواده‌های نجهیزات"
            >
                <Datagrid>
                    <TextField label="کد گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                    <TextField label="نام گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                </Datagrid>
            </ReferenceManyField>
            <ReferenceManyField
            reference="PMWorks/AssetClass"
            target="AssetCategoryID"
            label="زیر خانواده تجهیزات"
            >
                <Datagrid>
                    <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetClassCode" />
                    <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetClassName" />
                </Datagrid>
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
);
    };

export default AssetCategoryShow;
