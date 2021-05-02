import * as React from "react";
import {
    SimpleForm,
    required,
    TextInput,
    Create,
    useRedirect
}
from 'react-admin';
import AssetPriorityRefrenceInput from './AssetPriorityRefrenceInput';
import LocationRefrenceInput from './LocationRefrenceInput';
import AssetClassRefrenceInput from './AssetClassRefrenceInput';
import { DateInput } from '../Components/JalaliDatePicker';

const AssetCreate = props => {
    const redirect = useRedirect();

    const onSuccess = () => {
        redirect('/PMWorks/AssetSubdivision');
    };

    return (
    <Create onSuccess={onSuccess} {...props} title="ایجاد تجهیز">
        <SimpleForm initialValues={{ status: 0, fakesub: 0 }}>
            <TextInput label="کد تجهیز" textAlgin="right" source="AssetCode" />
            <TextInput label="نام تجهیز" textAlgin="right" source="AssetName" />
            <DateInput label="تاریخ نصب" source="InstallationDate" />
            <AssetPriorityRefrenceInput label="اولویت" textAlgin="right" source="AssetPriorityID" reference="PMWorks/AssetPriority" perPage={10000} />
            <LocationRefrenceInput label="مکان" textAlgin="right" source="LocationID" reference="PMWorks/Location" allowEmpty validate={required()} perPage={10000} />
            <AssetClassRefrenceInput label="کلاس تجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass" allowEmpty validate={required()} perPage={10000} />
        </SimpleForm>
    </Create>
 );
};


export default AssetCreate;
