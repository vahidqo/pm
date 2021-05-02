import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
}
from 'react-admin';
import JobCategoryTitle from './JobCategoryTitle';


const JobCategoryEdit = props => (
    <Edit title={<JobCategoryTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد شغل" textAlgin="right" source="JobCategoryCode" />
            <TextInput label="نام شغل" textAlgin="right" source="JobCategoryName" />
        </SimpleForm>
    </Edit>
);


export default JobCategoryEdit;
