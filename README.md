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
```
>> yarn add gatsby-source-airtable --save
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


