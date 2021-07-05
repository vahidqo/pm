import * as React from "react";


const WOActivityTemplateTitle = ({ record }) => {
    return <span> {record ? `"${record.AssetClassTaskID}"` : ''}</span>;
};

export default WOActivityTemplateTitle;
