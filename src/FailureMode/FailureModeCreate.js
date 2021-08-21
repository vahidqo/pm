import * as React from "react";
import { useState } from 'react';

import {
    SimpleForm,
    ReferenceInput,
    TextInput,
    Toolbar,
    Create,
    useNotify,
    useRefresh,
    useRedirect,
    SelectInput
}
from 'react-admin';
import { parse } from 'query-string';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import CodeInput from '../Components/CodeInput';

const useStyles = makeStyles({
    fir: { display: 'inline-block' },
    sec: { display: 'inline-block' },
    width: { width: 533 },
    last: { display: 'inline-block', marginRight: 0 },

});

const Separator = () => <Box pt="0em" />;

const FailureModeCreate = props => {
    const classes = useStyles();
    const {source, ...rest} = props;
    const [Value, setValue] = useState('');

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const { AssetClassID: AssetClassID_string } = parse(props.location.search);
    const AssetClassID = AssetClassID_string ? parseInt(AssetClassID_string, 10) : '';
    const redirectt = AssetClassID ? `/PMWorks/AssetClass/${AssetClassID}/show/PMWorks/FailureMode` : false;

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect(`/PMWorks/FailureMode/create?AssetClassID=${AssetClassID}`);
        refresh();
    };

    return (
    <Create onSuccess={onSuccess} {...props} title="ایجاد نوع خرابی">
        <SimpleForm initialValues={{ AssetClassID}} redirect={redirectt} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <ReferenceInput disabled formClassName={classes.fir} label="کد نجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass">
                <SelectInput optionText="AssetClassCode" />
            </ReferenceInput>
            <ReferenceInput disabled formClassName={classes.sec} label="نام نجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass">
                <SelectInput optionText="AssetClassName" />
            </ReferenceInput>
            <Separator/>
            <CodeInput formClassName={classes.fir} value={Value}  onChange={event => { let val = event.target.value;
                                                    val = val.replace(/[^\x00-\x7F]/ig, "");
                                                    setValue(val)
                                                    }}
                label="کد نوع خرابی"
                source="FailureModeCode" {...rest}/>
            <TextInput formClassName={classes.sec} label="نام نام خرابی" textAlgin="right" source="FailureModeName" />
            <Separator/>
            <TextInput className={classes.width} multiline label="توضیحات نوع خرابی" textAlgin="right" source="FailureModeDescription" />
        </SimpleForm>
    </Create>
    );
};


export default FailureModeCreate;
