import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Responsive,
    ShowButton,
    SimpleList,
}
from 'react-admin';
import JobCategoryFilter from './JobCategoryFilter';

const JobCategoryList = props => (
    <List filters={<JobCategoryFilter />} {...props} title="شغل">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.JobCategoryName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد شغل" textAlgin="right" source="JobCategoryCode" />
                    <TextField label="نام شغل" textAlgin="right" source="JobCategoryName" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default JobCategoryList;
