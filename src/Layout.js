import React from "react";
import { Layout } from 'react-admin';
import MySidebar from './MySidebar';
//import MyAppBar from './MyAppBar';

const MyLayout = props => <Layout
    {...props}
    sidebar={MySidebar}
/>;

export default MyLayout;