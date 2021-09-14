import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';

const JobCategoryFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد شغل" textAlgin="right" source="JobCategoryCode__icontains" alwaysOn resettable/>
        <TextInput label="نام شغل" textAlgin="right" source="JobCategoryName__icontains" alwaysOn resettable/>
    </Filter>
);


export default JobCategoryFilter;
