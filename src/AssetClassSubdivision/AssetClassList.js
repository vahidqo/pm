import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    CardActions,
    ReferenceField,
}
from 'react-admin';
import Button from "@material-ui/core/Button";
import AssetClassFilter from '../AssetClass/AssetClassFilter';


const SelectButton = ({ record, setId }) =>{
    
    return(
    <Button onClick={() => setId(record.id)} color="secondary">
     انتخاب
    </Button>
  );
    };


const NoneActions = props => (
    <CardActions />
); 

const AssetClassList = ({ setId, ...props }) => (
    <List filters={<AssetClassFilter />} {...props} actions={<NoneActions />} title="خانواده تجهیز ">
        <Datagrid>
            <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetClassCode" />
            <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetClassName" />
            <ReferenceField label="گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryID" reference="PMWorks/AssetCategory" sortBy="AssetCategoryID__AssetCategoryName">
                <TextField source="AssetCategoryName" />
            </ReferenceField>
            <SelectButton setId={setId} />
        </Datagrid>
    </List>
);

export default AssetClassList;
