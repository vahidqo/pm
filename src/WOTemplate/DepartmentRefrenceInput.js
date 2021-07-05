import React, { useState, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { ReferenceInput, SelectInput } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import QuickAddDepartmentButton from './QuickAddDepartmentButton';
import QuickPreviewDepartmentButton from './QuickPreviewDepartmentButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    }
});

const spySubscription = { values: true };

const DepartmentRefrenceInput = props => {
    const classes = useStyles();
    const [version, setVersion] = useState(0);
    const { values } = useFormState({ subscription: spySubscription });
    const handleChange = useCallback(() => setVersion(version + 1), [version]);

    return (
        <div className={classes.root}>
            <ReferenceInput key={version} {...props}>
                <SelectInput optionText="DepartmentCode" />
            </ReferenceInput>

            <QuickAddDepartmentButton onChange={handleChange} />
            <QuickPreviewDepartmentButton id={values.DepartmentID} />
        </div>
    );
};

export default DepartmentRefrenceInput;
