import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import './main.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <div style={{ color: `purple` }}>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
    
  </Layout>
);

export default IndexPage;
