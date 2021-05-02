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

const AddAssetClassSubdivisionButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/PMWorks/AssetClassSubdivision/create?AssetClassFatherID=${record.id}`}
    label="اضافه کردن زیرمجموعه"
    title="اضافه کردن زیرمجموعه"
  >
    <ChatBubbleIcon />
  </Button>
);

export default withStyles(styles)(AddAssetClassSubdivisionButton);
