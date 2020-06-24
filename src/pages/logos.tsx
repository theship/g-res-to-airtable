import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

// eslint-disable-next-line react/prop-types
export default ({data}) => {
  const allAirtableData = data.allAirtable.nodes;
  return (
    <Layout>
      <SEO title="Organization Logo" />
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

// import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';

// import Layout from '../components/layout';
// import SEO from '../components/seo';

// import './main.scss';

// // removed lines (was 17):
//      filter: { table: Orgs }
// //        sort: { fields: Name, order: DESC }

// //

// const LogoPage = () => {
//   const data = useStaticQuery(graphql`
//     query LogoQuery {
//       orgs: allAirtable(
//         filter: { table: Orgs }
//         sort: { fields: data___Name, order: DESC }
//       ) {
//         nodes {
//           data {
//             Name
//             Company_logo {
//               filename
//               url
//               thumbnails {
//                 small {
//                   width
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `);

//   return (
//    <Layout>
//      <SEO title="Organization Logo" />
//      <h1>Organization Logo</h1>
//      <div style={{ color: `purple` }}>
//        <h1>Get Organization Logos</h1>
//        <p>Get a list of organizations from Airtable</p>
//        <img src="https://source.unsplash.com/random/400x200" alt="" />
//      </div>
//       <ul>
//         {data.Org.nodes.map((item, i) => (
//           <li key={item.recordId}>
//             <p>
//               <span>Org name: </span> {item.data.Name}, <span>Logo: </span> ${item.data.filename}
//             </p>
//             <p>{item.data.thumbnails}</p>
//           </li>
//         ))}
//       </ul>
//     </Layout>

//   );
// };

// // const LogoPage = () => (
// //   <Layout>
// //     <SEO title="Organization Logo" />
// //     <h1>Organization Logo</h1>
// //     <div style={{ color: `purple` }}>
// //       <h1>Get Organization Logos</h1>
// //       <p>Get a list of organizations from Airtable</p>
// //       <img src="https://source.unsplash.com/random/400x200" alt="" />
// //     </div>
// //   </Layout>
// // );

// export default LogoPage;
