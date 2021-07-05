import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    Responsive,
    ShowButton,
    SimpleList,
    NumberField
}
from 'react-admin';
import WOTemplateFilter from './WOTemplateFilter';
import DateField from '../Components/JalaaliDateField';

const WOTemplateList = props => (
    <List filters={<WOTemplateFilter />} {...props} title="برنامه‌ریزی دستور کار">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.id} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد" textAlgin="right" source="WOTemplateCode" />
                    <TextField label="نام" textAlgin="right" source="WOTemplateName" />
                    <TextField label="روز تناوب" textAlgin="right" source="WOTemplateDurationDay" />
                    <NumberField label="ساعت تناوب" textAlgin="right" source="WOTemplateDurationHour" />
                    <TextField label="روز اعلام تناوب" textAlgin="right" source="WOTemplateAlarmDay" />
                    <NumberField label="ساعت اعلام تناوب" textAlgin="right" source="WOTemplateAlarmHour" />
                    <ReferenceField label="دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department">
                        <TextField source="DepartmentName" />
                    </ReferenceField>
                    <ReferenceField label="نوع" textAlgin="right" source="WOTemplateTypeID" reference="PMWorks/WOTemplateType">
                        <TextField source="WOTemplateTypeName" />
                    </ReferenceField>
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default WOTemplateList;
