Gatsby's Starter: TypeScript + SASS + Jest + SEO + Cypress
==============================================================

Gatsby starter used at [Good Praxis](https://goodpraxis.coop). Setup to use
TypeScript, SASS (SCSS), Jest and Cypress for testing, and Helmet for SEO.

The Cypress E2E setup contains accessibility and visual regression tests.

Setup
------
Make sure you have `gatsby-cli` installed.
Next, create a new site using this starter:

    gatsby new our-site https://github.com/GoodPraxis/gp-gatsby-starter-ts-sass-jest
    cd our-site

    gatsby develop


Testing
------
To run all tests, use:
```
>> npm test
```
You can run unit tests by running:
```
>> npm run test:unit
```
You can run E2E tests by running:
```
>> npm run test:e2e
```
This will open Cypress in a new window. To run it in CI mode, use:
```
>> npm run test:e2e:ci
```
#### Snapshots

Jest unit tests will often compare rendered markup with snapshots.
If you need to update them after making changes to the markup, run:
```
>> npm test -- -u
```
Building
------
You can build the website by running:
```
>> gatsby build
```

Airtable
========

Add airtable dependency
-----------------------

Add to package.json for airtable:
```
"gatsby-source-airtable": "^2.1.1",
```

(If we didn't already have a project, create new project based on airtable...
```
>> gatsby new g-res-to-airtable https://github.com/GoodPraxis/gp-gatsby-starter-ts-sass-jest
>> cd g-res-to-airtable
>> gatsby develop
```
)

Add airtable API
----------------
>> yarn add gatsby-source-airtable --save

Add airtable to Gatsby config
-----------------------------

Config gatsby-config.js with airtable under plugins:

```
{
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: 'YOUR_AIRTABLE_KEY',
        tables: [
          {
            baseId: 'YOUR_AIRTABLE_BASE_ID',
            tableName: 'Orgs',
          },
        ],
      },
    },
```
Run the project
---------------
```
>> gatsy develop
``` 

Get the GraphQL schema
----------------------

Go to http://localhost:8000/___graphql

Click on allAirtable > edges > and click on fields you want to build a query. e.g.:

```
query MyQuery {
  allAirtable {
    nodes {
      data {
        Name
        Company_logo {
          filename
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
```

Add typescript types
--------------------

Add graphql types to new file types > graphql-types.d.ts
```
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};
```

Render the results
------------------

Place the nodes>data>.... into a constant for the logo page and render it:

```
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
```

Google Custom Search
====================

Get one image based on name.
@param {string} name Name of Starwars person.
@return {array} A list of images - at this time return one image.
```
  async getPersonImage(name) {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?imgSize=xlarge&num=1&searchType=image&key=${process.env.REACT_APP_GOOGLE_API_KEY}&cx=${process.env.REACT_APP_GOOGLE_CX}&q=Star%20Wars%20${name}`
    );
    const json = await response.json();
    return json;
  }
```

Custom Search Queries using Rest
------

https://developers.google.com/custom-search/v1/using_rest

#### My control panel:
https://cse.google.com/all

#### Call to google

https://www.googleapis.com/customsearch/v1?key={GOOGLE_API_KEY}&cx={GOOGLE_CX}&q=AerisInsight+logo&tbs=ift:png

##### returns JSON:
```
yadayadayada

"items": [
{
    "pagemap": {
    "cse_image": [
        {
        "src": "https://www.aerisinsight.com/wp-content/uploads/2018/10/aeris_logo_1x.png"
        }
    ]
    }
} ]
````

