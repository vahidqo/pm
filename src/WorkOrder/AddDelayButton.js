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

const AddDelayButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/PMWorks/WODelay/create?WorkOrderID=${record.id}`}
    label="اضافه کردن تاخیر"
    title="اضافه کردن تاخیر"
  >
    <ChatBubbleIcon />
  </Button>
);

export default withStyles(styles)(AddDelayButton);
