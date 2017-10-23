Most people know how to get the HAPIKEY from the portal but not a lot of people know about how to get the
access token from a user portal. 

We can use the following link in order to get the access token for a Portal
`https://login.hubspot.com/login/api-verify?internal=true&portalId=%s`

But we are lazy so let's create a custom search engine so we can easily plugin in a portalID and have this work for us. 
1. Navigate to settings in Chrome
2. Go to manage search engines and add New Search Engine
3. Enter the following

```
Search Engine
Access Token

Keyword
Access

URL
https://login.hubspot.com/login/api-verify?internal=true&portalId=%s
```

Then if you start typing access in the address bar and hit tab you can enter in the HubID of the Portal and it pulls the JSON
Scroll down to the bottom to find the access token. 
