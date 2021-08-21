import React from 'react'
import { useSelector } from 'react-redux';
import Layout1LeftAlign from './Layout1/Layout1LeftAlign/Layout1LeftAlign';
import Layout1CenterAlign from './Layout1/Layout1CenterAlign/Layout1CenterAlign';
import Layout2LeftAlign from './Layout2/Layout2LeftAlign/Layout2LeftAlign';
import Layout2CenterAlign from './Layout2/Layout2CenterAlign/Layout2CenterAlign';
import Layout3CenterAlign from './Layout3/Layout3CenterAlign/Layout3CenterAlign';
import Layout3LeftAlign from './Layout3/Layout3LeftAlign/Layout3LeftAlign';
import Layout4CenterAlign from './Layout4/Layout4CenterAlign/Layout4CenterAlign';
import Layout4LeftAlign from './Layout4/Layout4LeftAlign/Layout4LeftAlign';


const Layout = () => {
  const projectlayout = useSelector(state => state.projectlayout);
  let layouts = [<Layout1LeftAlign />, <Layout1CenterAlign />, <Layout2LeftAlign />, <Layout2CenterAlign />,<Layout3CenterAlign/>,<Layout3LeftAlign/>,<Layout4CenterAlign/>,<Layout4LeftAlign/>];
  return (
    <>
      {
        layouts[projectlayout]
      }
    </>
  )
}

export default Layout;