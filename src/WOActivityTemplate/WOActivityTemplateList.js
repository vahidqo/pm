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
import WOActivityTemplateFilter from './WOActivityTemplateFilter';

const WOActivityTemplateList = props => (
    <List filters={<WOActivityTemplateFilter />} {...props} title="پرسنل">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.WOActivityTemplate} />
            }
            medium={
                <Datagrid>
                    <TextField label="تاخیرات" textAlgin="right" source="WOActivityTemplate" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default WOActivityTemplateList;
