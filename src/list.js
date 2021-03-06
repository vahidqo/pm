import * as React from 'react';
import { Fragment, useState } from 'react';
import { ListBase, useListContext, EditButton, Title } from 'react-admin';
import {
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Collapse,
    Card,
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const assetcategoryList = props => (
    <ListBase perPage={1000} {...props}>
        <Box maxWidth="20em" marginTop="1em">
            <Card>
                <Tree />
            </Card>
        </Box>
    </ListBase>
);

const Tree = () => {
    const { ids, data, defaultTitle } = useListContext();
    const [openChildren, setOpenChildren] = useState([]);
    const toggleNode = node =>
        setOpenChildren(state => {
            if (state.includes(node.id)) {
                return [
                    ...state.splice(0, state.indexOf(node.id)),
                    ...state.splice(state.indexOf(node.id) + 1, state.length),
                ];
            } else {
                return [...state, node.id];
            }
        });
    const nodes = ids.map(id => data[id]);

    const roots = nodes.filter(node => node.AssetClassFather == null );
    const getChildNodes = root =>
        nodes.filter(node => node.AssetClassFather === root.id);
    return (
        <List>
            <Title defaultTitle={defaultTitle} />
            {roots.map(root => (
                <SubTree
                    key={root.id}
                    root={root}
                    getChildNodes={getChildNodes}
                    openChildren={openChildren}
                    toggleNode={toggleNode}
                    level={1}
                />
            ))}
        </List>
    );
};

const SubTree = ({
    level,
    root,
    getChildNodes,
    openChildren,
    toggleNode,
    defaultTitle,
}) => {
    const childNodes = getChildNodes(root);
    const hasChildren = childNodes.length > 0;
    const open = openChildren.includes(root.id);
    return (
        <Fragment>
            <ListItem
                button={hasChildren}
                onClick={() => hasChildren && toggleNode(root)}
                style={{ paddingLeft: level * 16 }}
            >
                {hasChildren && open && <ExpandLess />}
                {hasChildren && !open && <ExpandMore />}
                {!hasChildren && <div style={{ width: 24 }}>&nbsp;</div>}
                <ListItemText primary={root.AssetCategoryName} />
                <ListItemText primary={root.AssetCategoryCode} />
                <ListItemSecondaryAction>
                    <EditButton record={root} basePath="PMWorks/AssetCategory" />
                </ListItemSecondaryAction>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {childNodes.map(node => (
                        <SubTree
                            key={node.id}
                            root={node}
                            getChildNodes={getChildNodes}
                            openChildren={openChildren}
                            toggleNode={toggleNode}
                            level={level + 1}
                        />
                    ))}
                </List>
            </Collapse>
        </Fragment>
    );
};

export default assetcategoryList;
