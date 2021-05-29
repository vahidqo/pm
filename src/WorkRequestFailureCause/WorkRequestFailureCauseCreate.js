import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    required,
    FormDataConsumer
}
from 'react-admin';
import { parse } from 'query-string';
import FailureCauseRefrenceInput from './FailureCauseRefrenceInput';


const WorkRequestFailureCauseCreate = props => {

    const { WorkRequestID: WorkRequestID_string } = parse(props.location.search);
    const WorkRequestID = WorkRequestID_string ? parseInt(WorkRequestID_string, 10) : '';
    const redirect = WorkRequestID ? `/PMWorks/WorkRequest/${WorkRequestID}/show/PMWorks/WorkRequestFailureCause` : false;

    return (
    <Create {...props} title="ایجاد علت خرابی دستورکار">
        <SimpleForm initialValues={{ WorkRequestID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <FormDataConsumer>
                {({ formData, ...rest }) => formData.WorkRequestID &&
                    <FailureCauseRefrenceInput label="کد علت خرابی" textAlgin="right" source="FailureCauseID" reference="PMWorks/WRCause" allowEmpty validate={required()} perPage={10000} filter={{ FailureModeID: formData.WorkRequestID }} {...rest} />
                }
            </FormDataConsumer>
        </SimpleForm>
    </Create>
    );
};


export default WorkRequestFailureCauseCreate;