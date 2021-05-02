import * as React from "react";


const AssetClassSubdivisionTitle = ({ record }) => {
    return <span> {record ? `"${record.AssetClassFatherID}"` : ''}</span>;
};

export default AssetClassSubdivisionTitle;
