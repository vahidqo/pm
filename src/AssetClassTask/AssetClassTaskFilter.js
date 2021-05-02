import * as React from "react";
import {
    Filter,
    TextInput,
    SelectInput,
    ReferenceInput,
    RadioButtonGroupInput
}
from 'react-admin';

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


const AssetClassTaskFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد فعالیت" textAlgin="right" source="TaskCode" />
        <TextInput label="نام فعالیت" textAlgin="right" source="TaskName" />
        <SelectInput label="مقدار تناوب" textAlgin="right" source="FrequencyName" choices={freq} optionText="full_name" optionValue="_id" />
        <RadioButtonGroupInput label="مسئول" textAlgin="right" source="Functor" choices={fun} optionText="full_name" optionValue="_id" />
        <ReferenceInput label="نوع وظیفه" textAlgin="right" source="TaskTypeID" reference="PMWorks/TaskType">
            <SelectInput optionText="TaskTypeName" />
        </ReferenceInput>
        <ReferenceInput label="نوع شغل" textAlgin="right" source="JobCategoryID" reference="PMWorks/JobCategory">
            <SelectInput optionText="JobCategoryName" />
        </ReferenceInput>
        <ReferenceInput label="کلاس تجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass">
            <SelectInput optionText="AssetClassName" />
        </ReferenceInput>
    </Filter>
);


export default AssetClassTaskFilter;
