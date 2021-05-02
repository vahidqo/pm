import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    RichTextField
}
from 'react-admin';
import TaskTypeTitle from './TaskTypeTitle';


const TaskTypeShow = (props) => (
    <Show title={<TaskTypeTitle />} {...props}>
        <SimpleShowLayout>
                <TextField label="کد نوع وظیفه" textAlgin="right" source="TaskTypeCode" />
                <TextField label="نام نوع وظیفه" textAlgin="right" source="TaskTypeName" />
                <RichTextField label="توضیحات نوع وظیفه" textAlgin="right" source="TaskTypeDescription" />
        </SimpleShowLayout>
    </Show>
);


export default TaskTypeShow;
