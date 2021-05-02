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

const AddPersonnelButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/PMWorks/WOPersonnel/create?WorkOrderID=${record.id}`}
    label="اضافه کردن پرسنل"
    title="اضافه کردن پرسنل"
  >
    <ChatBubbleIcon />
  </Button>
);

export default withStyles(styles)(AddPersonnelButton);
