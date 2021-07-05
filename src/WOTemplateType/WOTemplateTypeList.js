import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    Responsive,
    ShowButton,
    SimpleList,
}
from 'react-admin';
import WOTemplateTypeFilter from './WOTemplateTypeFilter';

const WOTemplateTypeList = props => (
    <List filters={<WOTemplateTypeFilter />} {...props} title="انواع برنامه">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.WOTemplateTypeName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد نوع برنامه" textAlgin="right" source="WOTemplateTypeCode" />
                    <TextField label="نام نوع برنامه" textAlgin="right" source="WOTemplateTypeName" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default WOTemplateTypeList;
