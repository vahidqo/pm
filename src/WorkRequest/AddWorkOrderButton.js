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

const AddWorkOrderButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/PMWorks/WorkOrder/create?WorkRequestID=${record.id}`}
    label="اضافه کردن دستور کار"
    title="اضافه کردن دستور کار"
  >
    <ChatBubbleIcon />
  </Button>
);

export default withStyles(styles)(AddWorkOrderButton);
