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

const AddSchualingButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/PMWorks/WOTemplateSchualing/create?WOTemplateID=${record.id}`}
    label="اضافه کردن برنامه"
    title="اضافه کردن برنامه"
  >
    <ChatBubbleIcon />
  </Button>
);

export default withStyles(styles)(AddSchualingButton);
