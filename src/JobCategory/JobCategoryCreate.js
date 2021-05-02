import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Create
}
from 'react-admin';


const JobCategoryCreate = props => (
    <Create {...props} title="ایجاد شغل">
        <SimpleForm>
            <TextInput label="کد شغل" textAlgin="right" source="JobCategoryCode" />
            <TextInput label="نام شغل" textAlgin="right" source="JobCategoryName" />
        </SimpleForm>
    </Create>
);


export default JobCategoryCreate;