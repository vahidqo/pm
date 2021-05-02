import React from 'react';
import { Link } from 'react-router-dom';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
  button: {
    marginTop: '1em'
  }
};

const AddFailureModeButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/PMWorks/FailureMode/create?AssetClassID=${record.id}`}
    label="اضافه کردن نوع خرابی"
    title="اضافه کردن نوع خرابی"
  >
    <ChatBubbleIcon />
  </Button>
);

export default withStyles(styles)(AddFailureModeButton);
