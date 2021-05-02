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
import TaskTypeFilter from './TaskTypeFilter';

const TaskTypeList = props => (
    <List filters={<TaskTypeFilter />} {...props} title="انواع وظیفه">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.TaskTypeName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد نوع وظیفه" textAlgin="right" source="TaskTypeCode" />
                    <TextField label="نام نوع وظیفه" textAlgin="right" source="TaskTypeName" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default TaskTypeList;
