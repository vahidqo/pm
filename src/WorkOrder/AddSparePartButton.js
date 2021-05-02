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

const AddSparePartButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/PMWorks/WOSparePart/create?WorkOrderID=${record.id}`}
    label="اضافه کردن قطعه"
    title="اضافه کردن قطعه"
  >
    <ChatBubbleIcon />
  </Button>
);

export default withStyles(styles)(AddSparePartButton);
