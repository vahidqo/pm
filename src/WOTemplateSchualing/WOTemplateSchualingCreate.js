import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    NumberInput,
    ReferenceInput,
    SelectInput
}
from 'react-admin';
import { parse } from 'query-string';
import { DateInput } from '../Components/JalaliDatePicker';


const WOTemplateSchualingCreate = props => {

    const { WOTemplateID: WOTemplateID_string } = parse(props.location.search);
    const WOTemplateID = WOTemplateID_string ? parseInt(WOTemplateID_string, 10) : '';
    const redirect = WOTemplateID ? `/PMWorks/WOTemplate/${WOTemplateID}/show/PMWorks/WOTemplateSchualing` : false;

    return (
    <Create {...props} title="ایجاد برنامه ریزی">
        <SimpleForm initialValues={{ WOTemplateID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <DateInput label="تاریخ شروع" source="WOTemplateSchualingStartDate" />
            <DateInput label="تاریخ پایان" source="WOTemplateSchualingFinishDate" />
            <NumberInput label="مقدار" textAlgin="right" source="AmountFrequency"/>
            <ReferenceInput label="تناوب" textAlgin="right" source="FrequencyID" reference="PMWorks/Frequency">
                <SelectInput optionText="FrequencyName" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
    );
};


export default WOTemplateSchualingCreate;