import React from 'react';
import Layout from './Layout';
import HomeBanner from './partials/HomeBanner';
import FeaturedProducts from './partials/FeaturedProducts';

export default function Home() {
  return (
    <Layout DisplaySidebar={false} Sidebar={null} Name="Home">
      <div className='home-content'>
        <HomeBanner />
        <FeaturedProducts />
      </div>
    </Layout>
  )
}
