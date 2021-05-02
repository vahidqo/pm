import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    RichTextField
}
from 'react-admin';
import JobCategoryTitle from './JobCategoryTitle';


const JobCategoryShow = (props) => (
    <Show title={<JobCategoryTitle />} {...props}>
        <SimpleShowLayout>
                <TextField label="کد شغل" textAlgin="right" source="JobCategoryCode" />
                <TextField label="نام شغل" textAlgin="right" source="JobCategoryName" />
        </SimpleShowLayout>
    </Show>
);


export default JobCategoryShow;
