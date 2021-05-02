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

const AddSupplierButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/PMWorks/WOSupplier/create?WorkOrderID=${record.id}`}
    label="اضافه کردن تامین کننده"
    title="اضافه کردن تامین کننده"
  >
    <ChatBubbleIcon />
  </Button>
);

export default withStyles(styles)(AddSupplierButton);
