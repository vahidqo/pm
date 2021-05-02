import * as React from "react";
import {
    SimpleForm,
    ReferenceInput,
    Create,
    SelectInput,
    FormDataConsumer
}
from 'react-admin';
import AssetSubdivisionRefrenceInput from './AssetSubdivisionRefrenceInput';
import { DateInput } from '../Components/JalaliDatePicker';
import { DateInputtoday } from '../Components/JalaliDatePickertoday';


export const WorkRequestCreate = props => {

    var today = new Date();

    return (
        <Create {...props} title="ایجاد درخواست کار">
            <SimpleForm>
                <DateInputtoday label="تاریخ ثبت" source="WRDateOfRegistration" disabled/>
                <DateInput label="تاریخ" source="WRDate" />
                <AssetSubdivisionRefrenceInput label="تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision" perPage={10000} />
                <FormDataConsumer>
                 {({ formData, ...rest }) => formData.AssetSubdivisionID &&
                      <ReferenceInput label="خرابی" textAlgin="right" source="FailureModeID" reference="PMWorks/FailureMode" filter={{ AssetClassID: formData.AssetSubdivisionID }} {...rest}>
                      <SelectInput optionText="FailureModeName" />
                  </ReferenceInput>
                 }
                </FormDataConsumer>
            </SimpleForm>
        </Create>
    );
};