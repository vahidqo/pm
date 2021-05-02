import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

import IconImageEye from '@material-ui/icons/RemoveRedEye';
import IconKeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {
  TextField,
  List,
  Datagrid,
  ResourceContextProvider,
  Button,
  useGetOne
} from 'react-admin';

const useStyles = makeStyles({
  field: {
      // These styles will ensure our drawer don't fully cover our
      // application when teaser or title are very long
      '& span': {
          display: 'inline-block',
          maxWidth: '20em'
      }
  }
});

const QuickPreviewAssetSubdivisionButton = ({ id }) => {
  const [showPanel, setShowPanel] = useState(false);
  const classes = useStyles();
  const { data } = useGetOne('PMWorks/AssetSubdivision', id);
  console.log(data);
  

  const handleClick = () => {
      setShowPanel(true);
  };

  const handleCloseClick = () => {
      setShowPanel(false);
  };

  return (
      <>
          <Button onClick={handleClick} label="ra.action.show">
              <IconImageEye />
          </Button>
          <Drawer anchor="right" open={showPanel} onClose={handleCloseClick}>
              <div>
                  <Button label="Close" onClick={handleCloseClick}>
                      <IconKeyboardArrowRight />
                  </Button>
              </div>
              <ResourceContextProvider resource="PMWorks/AssetSubdivision">
                <List syncWithLocation basePath="/PMWorks/AssetSubdivision">
                    <Datagrid>
                        <TextField source="id" />
                    </Datagrid>
                </List>
              </ResourceContextProvider>
          </Drawer>
      </>
  );
};

export default QuickPreviewAssetSubdivisionButton;
