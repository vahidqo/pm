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
import TaskRefrenceInput from './TaskRefrenceInput';
import AssetSubdivisionRefrenceInput from '../WorkRequest/AssetSubdivisionRefrenceInput';


const WOActivityTemplateCreate = props => {

    const { WOTemplateID: WOTemplateID_string } = parse(props.location.search);
    const WOTemplateID = WOTemplateID_string ? parseInt(WOTemplateID_string, 10) : '';
    const redirect = WOTemplateID ? `/PMWorks/WOTemplate/${WOTemplateID}/show/PMWorks/WOActivityTemplate` : false;

    return (
    <Create {...props} title="ایجاد فعالیت برنامه">
        <SimpleForm initialValues={{ WOTemplateID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <AssetSubdivisionRefrenceInput label="نام تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision" perPage={10000} />
            <FormDataConsumer>
                {({ formData, ...rest }) => formData.AssetSubdivisionID &&
                    <TaskRefrenceInput label="کد فعالیت" textAlgin="right" source="AssetClassTaskID" reference="PMWorks/TaskTemp" filter={{ AssetSubdivisionID: formData.AssetSubdivisionID }}  {...rest} />
                }
            </FormDataConsumer>
        </SimpleForm>
    </Create>
    );
};


export default WOActivityTemplateCreate;