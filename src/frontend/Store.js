import React from 'react';
import Layout from './Layout';
import StoreFilterSidebar from './partials/StoreFilterSidebar';

export default function Store() {
  return (
    <Layout DisplaySidebar={true} Sidebar={<StoreFilterSidebar />} Name="store">
    <div className='home-content'>
      <p>Store Content Here.</p>
    </div>
  </Layout>
  )
}
