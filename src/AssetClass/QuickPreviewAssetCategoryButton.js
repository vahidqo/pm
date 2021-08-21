import React, { useState } from "react";
import { Button } from "react-admin";
import { Dialog } from "@material-ui/core";
import IconImageEye from "@material-ui/icons/RemoveRedEye";
import AssetCategoryList from "./AssetCategoryList";

const QuickPreviewAssetCategoryButton = ({ id, setId, ...props }) => {
  const [showPanel, setShowPanel] = useState(false);

  const toggleDrawer = () => setShowPanel((showPanel) => !showPanel);

  return (
    <>
      <Button onClick={toggleDrawer} label="ra.action.show">
        <IconImageEye />
      </Button>
      <Dialog fullWidth open={showPanel} onClose={toggleDrawer}>
        <AssetCategoryList {...props} resource="PMWorks/AssetCategory" setId={setId} />
      </Dialog>
    </>
  );
};

export default QuickPreviewAssetCategoryButton;