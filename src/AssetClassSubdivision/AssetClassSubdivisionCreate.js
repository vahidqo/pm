import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Toolbar,
    Create,
    ReferenceInput,
    SelectInput,
    useNotify,
    useRefresh,
    useRedirect
}
from 'react-admin';
import { parse } from 'query-string';
import AssetClassRefrenceInput from './AssetClassRefrenceInput';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    fir: { display: 'inline-block' },
    sec: { display: 'inline-block' },
    width: { width: 712 },
    last: { display: 'inline-block', marginRight: 0 },

});

const Separator = () => <Box pt="0em" />;

const AssetClassSubdivisionCreate = props => {
    const classes = useStyles();


    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();


    const { AssetClassFatherID: AssetClassFatherID_string } = parse(props.location.search);
    const AssetClassFatherID = AssetClassFatherID_string ? parseInt(AssetClassFatherID_string, 10) : '';
    const redirectt = AssetClassFatherID ? `/PMWorks/AssetClass/${AssetClassFatherID}/show/PMWorks/AssetClassSubdivision` : false;

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect(`/PMWorks/AssetClassSubdivision/create?AssetClassFatherID=${AssetClassFatherID}`);
        refresh();
    };

    return (
    <Create onSuccess={onSuccess} {...props} title="ایجاد زیرکلاس">
        <SimpleForm initialValues={{ AssetClassFatherID}} redirect={redirectt} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <ReferenceInput disabled formClassName={classes.fir} label="کد نجهیز" textAlgin="right" source="AssetClassFatherID" reference="PMWorks/AssetClass">
                <SelectInput optionText="AssetClassCode" />
            </ReferenceInput>
            <ReferenceInput disabled formClassName={classes.sec} label="نام نجهیز" textAlgin="right" source="AssetClassFatherID" reference="PMWorks/AssetClass">
                <SelectInput optionText="AssetClassName" />
            </ReferenceInput>
            <Separator/>
            <ReferenceInput disabled formClassName={classes.fir} label="کد زیرنجهیز" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass">
                <SelectInput optionText="AssetClassCode" />
            </ReferenceInput>
            <AssetClassRefrenceInput formClassName={classes.sec} label="عناون زیرتجهیز" textAlgin="right" source="AssetClassChildID" reference="PMWorks/AssetClass" perPage={10000} />
            <Separator/>
            <TextInput className={classes.fir} label="تعداد" textAlgin="right" source="AssetClassChildNumber" />
        </SimpleForm>
    </Create>
);
};



export default AssetClassSubdivisionCreate;
