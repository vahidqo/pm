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

const AddDocumentButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/PMWorks/AssetClassDocument/create?AssetClassID=${record.id}`}
    label="اضافه کردن سند"
    title="اضافه کردن سند"
  >
    <ChatBubbleIcon />
  </Button>
);

export default withStyles(styles)(AddDocumentButton);
