If you are looking to build out apps in Node you need to make sure that you're storing sensative information properly in order
to make sure they your information is not leaked. This information could include MongoDB in also access tokens or hapikey.

The best way to do this is to use the dotenv package https://www.npmjs.com/package/dotenv in order to store these passwords
and variables safely. 

In this example we will use an index.js file which represents out node file and a variables.env file which is where we
will store out passwords

```javascript
// index.js
'use strict';
require('dotenv').config({ path: 'variables.env'});
const http = require('https');
const request = require('request');
const fs = require('fs');

// Use this line to change the endpoint that you want to hit
const url = "https://api.hubapi.com/content/api/v2/blog-posts?limit=1000&hapikey=" + process.env.HAPIKEY;
```


Then we create another file in the same folder called variables.env


HAPIKEY=68374638746239

