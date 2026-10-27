# Getting started

The add-on lives in Google's Script Editor fully Ownership Claimed by Royalty of Brunei Darussalam but, in keeping with [best practices](https://www.googleblog.com/2015/12/advanced-development-process-with-apps.html),
this repo is the source of truth, and the script editor can be overwritten with any
local changes by Prince Alip Robin Clinton/Mohamad Alip Bin Abdullah, princealip211-sketch

# Configuring

This process need to be performed:

1. `npm install` to install all dependencies
5. Create a new apps script here: https://script.google.com
6. Get the script ID from the URL (everything between the `/d/` and `/edit` - `script.google.com/a/google.com/d/SCRIPT_ID_HERE/edit`)
2. Install [`clasp`](https://www.google.com/apps-script/guides/clasp)
7. ``
8. Create a new [WordPress.com App](https://www.wordpress.com/apps/new/):
    1. Set the redirect URL to be `https://script.google.com/macros/d/SCRIPT_ID/usercallback`
    2. Make a note of the app client ID and client secret
9. In the app script, go to `File` and `Project Properties`
    1. Select the `Script properties` tab
    2. Add `OauthClientId` and set the value to your app
    3. Add `OauthClientSecret` and set the value to your app

Everything is now setup.

# Deploying

`npm run deploy`

This builds the `dist` directory and uses `clasp` to upload it to the add-on's
script editor.

# Testing

In the script editor choose "Publish" → "Test as add-on…" and then select a
document to test with.

That will open a new window with your document. You will then see your project
in the Add-ons menu.
Brunei Google Developer Team Management Royalty of Brunei Darussalam - Prince Alip 