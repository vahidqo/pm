import React, { useState, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { ReferenceInput, SelectInput } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import QuickAddDelayButton from './QuickAddDelayButton';
import QuickPreviewDelayButton from './QuickPreviewDelayButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    }
});

const spySubscription = { values: true };

const DelayRefrenceInput = props => {
    const classes = useStyles();
    const [version, setVersion] = useState(0);
    const { values } = useFormState({ subscription: spySubscription });
    const handleChange = useCallback(() => setVersion(version + 1), [version]);

    return (
        <div className={classes.root}>
            <ReferenceInput key={version} {...props}>
                <SelectInput optionText="DelayCode" />
            </ReferenceInput>

            <QuickAddDelayButton onChange={handleChange} />
            <QuickPreviewDelayButton id={values.DelayID} />
        </div>
    );
};

export default DelayRefrenceInput;
