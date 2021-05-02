import React, { useState, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { ReferenceInput, SelectInput } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import QuickAddSupplierButton from './QuickAddSupplierButton';
import QuickPreviewSupplierButton from './QuickPreviewSupplierButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    }
});

const spySubscription = { values: true };

const SupplierRefrenceInput = props => {
    const classes = useStyles();
    const [version, setVersion] = useState(0);
    const { values } = useFormState({ subscription: spySubscription });
    const handleChange = useCallback(() => setVersion(version + 1), [version]);

    return (
        <div className={classes.root}>
            <ReferenceInput key={version} {...props}>
                <SelectInput optionText="SupplierCode" />
            </ReferenceInput>

            <QuickAddSupplierButton onChange={handleChange} />
            <QuickPreviewSupplierButton id={values.SupplierID} />
        </div>
    );
};

export default SupplierRefrenceInput;
