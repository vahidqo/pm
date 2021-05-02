import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    TextInput
}
from 'react-admin';

const PersonnelJobCategoryFilter = (props) => (
    <Filter {...props}>
        <TextInput label="پرسنل" textAlgin="right" source="PersonnelID" />
        <TextInput label="شغل" textAlgin="right" source="JobCategoryID" />
    </Filter>
);


export default PersonnelJobCategoryFilter;
