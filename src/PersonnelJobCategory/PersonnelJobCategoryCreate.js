import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    required
}
from 'react-admin';
import { parse } from 'query-string';
import JobCategoryRefrenceInput from './JobCategoryRefrenceInput';


const PersonnelJobCategoryCreate = props => {

    const { PersonnelID: PersonnelID_string } = parse(props.location.search);
    const PersonnelID = PersonnelID_string ? parseInt(PersonnelID_string, 10) : '';
    const redirect = PersonnelID ? `/PMWorks/Personnel/${PersonnelID}/show/PMWorks/PersonnelJobCategory` : false;

    return (
    <Create {...props} title="ایجاد شغل پرسنل">
        <SimpleForm initialValues={{ PersonnelID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <JobCategoryRefrenceInput label="کد شغل" textAlgin="right" source="JobCategoryID" reference="PMWorks/JobCategory" allowEmpty validate={required()} perPage={10000} />
        </SimpleForm>
    </Create>
    );
};


export default PersonnelJobCategoryCreate;