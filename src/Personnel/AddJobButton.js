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

const AddJobButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/PMWorks/PersonnelJobCategory/create?PersonnelID=${record.id}`}
    label="اضافه کردن شغل"
    title="اضافه کردن شغل"
  >
    <ChatBubbleIcon />
  </Button>
);

export default withStyles(styles)(AddJobButton);
