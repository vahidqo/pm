import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';

const JobCategoryFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد شغل" textAlgin="right" source="JobCategoryCode" />
        <TextInput label="نام شغل" textAlgin="right" source="JobCategoryName" />
    </Filter>
);


export default JobCategoryFilter;
