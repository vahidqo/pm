import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Responsive,
    ShowButton,
    SimpleList,
    NumberField
}
from 'react-admin';

const WorkRequestField = ({ record = {} }) => {
    let str = record ? `${record.id}` : '';
    str = str.padStart(4,0);
    let text = "WR0".concat(str);
    return <span> {text} </span>;
};

WorkRequestField.defaultProps = { label: 'کد' };

const WorkRequestList = props => (
    <List {...props} title="درخواست کار">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.id} />
            }
            medium={
                <Datagrid>
                    <WorkRequestField textAlgin="right" source="id" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default WorkRequestList;
