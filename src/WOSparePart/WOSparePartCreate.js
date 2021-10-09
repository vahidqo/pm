import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    NumberInput,
    ReferenceInput,
    SelectInput,
    FormDataConsumer,
    required,
    useNotify,
    useRefresh,
    useRedirect
}
from 'react-admin';
import { parse } from 'query-string';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import SparePartRefrenceInput from './SparePartRefrenceInput';

const useStyles = makeStyles({
    fir: { display: 'inline-block', verticalAlign: 'bottom' },
    sec: { display: 'inline-block' },
    width: { width: 533, '& label': {marginRight: '25px'}, '& svg': {display: 'none' } },
    last: { display: 'inline-block', marginRight: 0 },
    sel: { '& svg': {display: 'none' }},
});

const Separator = () => <Box pt="0em" />;

const validateError = (values) => {
    const errors = {};
    if (!values.SupplierID) {
        errors.SupplierID = 'تامین‌کننده را وارد کنید';
    }
    return errors
};

const WorkOrderFormat = ({ record }) => {
    let str = record ? `${record.WorkRequestID}` : '';
    str = str.padStart(4,0);
    let text = "WR0".concat(str);
    let stro = record ? `${record.id}` : '';
    stro = stro.padStart(4,0);
    let texto = "_WO0".concat(stro);
    return <span> {text} {texto} </span>;
};


const WOSparePartCreate = props => {

    const classes = useStyles();
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const { WorkOrderID: WorkOrderID_string } = parse(props.location.search);
    const WorkOrderID = WorkOrderID_string ? parseInt(WorkOrderID_string, 10) : '';

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect(`/PMWorks/WOSparePart/create?WorkOrderID=${WorkOrderID}`);
        refresh();
    };

    return (
    <Create onSuccess={onSuccess} {...props} title="ایجاد قطعه دستور کار">
        <SimpleForm validate={validateError} initialValues={{ WorkOrderID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <ReferenceInput disabled className={classes.width} formClassName={classes.fir} label="کد درخواست‌کار" source="WorkOrderID" textAlgin="right" reference="PMWorks/WorkOrder">
                <SelectInput source="WorkRequestID" optionText={<WorkOrderFormat />}/>
            </ReferenceInput>
            <Separator/>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label="کد قطعه" textAlgin="right" source="SparePartID" reference="PMWorks/WRSpare">
                <SelectInput optionText="SparePartCode" />
            </ReferenceInput>
            <FormDataConsumer formClassName={classes.sec}>
                {({ formData, ...rest }) => formData.WorkOrderID &&
                    <SparePartRefrenceInput label="نام قطعه" textAlgin="right" source="SparePartID" reference="PMWorks/WRSpare" filter={{ WorkOrderID: formData.WorkOrderID }} allowEmpty validate={required()} perPage={10000} />
                }
            </FormDataConsumer>
            <Separator/>
            <NumberInput formClassName={classes.fir} textAlgin="right" label="تعداد" source="SparePartAmount" />
        </SimpleForm>
    </Create>
    );
};


export default WOSparePartCreate;