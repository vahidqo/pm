import React, { useState } from 'react';
import { useForm } from 'react-final-form';
import {
    required,
    Button,
    SaveButton,
    TextInput,
    useCreate,
    useNotify,
    FormWithRedirect
} from 'react-admin';
import IconContentAdd from '@material-ui/icons/Add';
import IconCancel from '@material-ui/icons/Cancel';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import CodeInput from '../Components/CodeInput';

function QuickAddAssetClassSpecificDataButton(props, { onChange }) {
    const [showDialog, setShowDialog] = useState(false);
    const [create, { loading }] = useCreate('PMWorks/SpecificData');
    const notify = useNotify();
    const form = useForm();
    const [Value, setValue] = useState('');
    const {source, ...rest} = props;

    const handleClick = () => {
        setShowDialog(true);
    };

    const handleCloseClick = () => {
        setShowDialog(false);
    };

    const handleSubmit = async values => {
        create(
            { payload: { data: values } },
            {
                onSuccess: ({ data }) => {
                    setShowDialog(false);
                    // Update the comment form to target the newly created post
                    // Updating the ReferenceInput value will force it to reload the available posts
                    form.change('SpecificDataID', data.id);
                    onChange();
                },
                onFailure: ({ error }) => {
                    notify(error.message, 'error');
                }
            }
        );
    };

    return (
        <>
            <Button onClick={handleClick} label="ra.action.create">
                <IconContentAdd />
            </Button>
            <Dialog
                fullWidth
                open={showDialog}
                onClose={handleCloseClick}
                aria-label="ایجاد ویژگی"
            >
                <DialogTitle>ایجاد ویژگی</DialogTitle>

                <FormWithRedirect
                    resource="PMWorks/SpecificData"
                    save={handleSubmit}
                    render={({
                        handleSubmitWithRedirect,
                        pristine,
                        saving
                    }) => (                        
                        <>
                            <DialogContent>
                                <CodeInput value={Value}  onChange={event => { let val = event.target.value;
                                                        val = val.replace(/[^\x00-\x7F]/ig, "");
                                                        setValue(val)
                                                        }}
                                                        label="کد ویژگی"
                                                        source="SpecificDataCode"
                                                        validate={required()} {...rest}/>
                                <TextInput
                                    label="نام ویژگی"
                                    textAlgin="right"
                                    source="SpecificDataName"
                                    validate={required()}
                                />
                                <TextInput label="واحد اندازه گیری" textAlgin="right" source="Measurment"  validate={required()}/>
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    label="ra.action.cancel"
                                    onClick={handleCloseClick}
                                    disabled={loading}
                                >
                                    <IconCancel />
                                </Button>
                                <SaveButton
                                    handleSubmitWithRedirect={
                                        handleSubmitWithRedirect
                                    }
                                    pristine={pristine}
                                    saving={saving}
                                    disabled={loading}
                                />
                            </DialogActions>
                        </>
                    )}
                />
            </Dialog>
        </>
    );
}

export default QuickAddAssetClassSpecificDataButton;
