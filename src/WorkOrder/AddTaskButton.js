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

const AddTaskButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/PMWorks/WOTask/create?WorkOrderID=${record.id}`}
    label="اضافه کردن فعالیت"
    title="اضافه کردن فعالیت"
  >
    <ChatBubbleIcon />
  </Button>
);

export default withStyles(styles)(AddTaskButton);
