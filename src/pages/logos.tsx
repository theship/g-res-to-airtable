import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import './main.scss';

const LogoPage = () => (
  <Layout>
    <SEO title="Organization Logo" />
    <h1>Organization Logo</h1>
    <div style={{ color: `purple` }}>
      <h1>Get Organization Logos</h1>
      <p>Get a list of organizations from Airtable</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  </Layout>
);

export default LogoPage;
