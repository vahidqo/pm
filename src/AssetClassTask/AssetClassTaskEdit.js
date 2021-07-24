import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Edit,
    NumberInput,
    SelectInput,
    RadioButtonGroupInput,
    ReferenceInput 
}
from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import AssetClassTaskTitle from './AssetClassTaskTitle';
import JobCategoryRefrenceInput from './JobCategoryRefrenceInput';
import TaskTypeRefrenceInput from './TaskTypeRefrenceInput';
import AssetClassRefrenceInput from './AssetClassRefrenceInput';

const freq = [
    { _id: 'D', full_name: 'روزانه'},
    { _id: 'W', full_name: 'هفتگی'},
    { _id: 'M', full_name: 'ماهانه'},
    { _id: 'Y', full_name: 'سالانه'},
    { _id: 'F', full_name: 'وظیفه‌ای'},
];

const fun = [
    { _id: 'O', full_name: 'اپراتور'},
    { _id: 'T', full_name: 'تکنسین' },
];

const AssetClassTaskEdit = props => (
    <Edit title={<AssetClassTaskTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد فعالیت" textAlgin="right" source="TaskCode" />
            <TextInput label="نام فعالیت" textAlgin="right" source="TaskName" />
            <RichTextInput label="توضیحات فعالیت" textAlgin="right" source="TaskDescription" toolbar={[ ['bold', 'italic', 'underline', 'link'] ]} />
            <SelectInput label="مقدار تناوب" textAlgin="right" source="FrequencyName" choices={freq} optionText="full_name" optionValue="_id" />
            <NumberInput label="مقدار تناوب" textAlgin="right" source="FrequencyAmount" />
            <NumberInput label="مدت زمان انجام" textAlgin="right" source="DurationOfDo" />
            <RadioButtonGroupInput label="مسئول" textAlgin="right" source="Functor" choices={fun} optionText="full_name" optionValue="_id" />
            <TaskTypeRefrenceInput label="کد فعالیت" textAlgin="right" source="TaskTypeID" reference="PMWorks/TaskType"  perPage={10000} />
            <JobCategoryRefrenceInput label="کد شغل" textAlgin="right" source="JobCategoryID" reference="PMWorks/JobCategory" perPage={10000} />
            <AssetClassRefrenceInput label="کلاس تجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass" perPage={10000} />
        </SimpleForm>
    </Edit>
);


export default AssetClassTaskEdit;