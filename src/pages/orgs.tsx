import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

// eslint-disable-next-line react/prop-types
export default ({data}) => {
  const allAirtableData = data.allAirtable.nodes;
  return (
    <Layout>
      <SEO title="Just Organization names" />
      <h1>Organization Logo</h1>
      <div style={{ color: `purple` }}>
        <h1>Get Organization Logos</h1>
        <p>Get a list of organizations from Airtable</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
      <ul>
        {
          // eslint-disable-next-line react/prop-types
          allAirtableData.map((nodes: { data:
                                        { Name: string;
                                          Company_logo: { url: string; };
                                        };
                                      }) => (
            <li>
              {nodes.data.Name}
            </li>
          ))
        }
    </ul>
    </Layout>
  );
};

export const query = graphql`
    query {
        allAirtable {
            nodes {
           recordId
            data {
              Name
               Company_logo {
                 filename
                 url
                 thumbnails {
                   small {
                     width
                   }
                 }
               }
            }
            }
        }
    }
`;
