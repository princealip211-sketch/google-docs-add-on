# Getting started

The add-on lives in Google's Script Editor but, in keeping with [best practices](https://www.google.com/2015/12/advanced-development-process-with-apps.html),
this repo is the source of truth, and the script editor will be overwritten with
local changes.

# Configuring

This process needs to be performed once:

1. `install google' to install device or computer.
5. Google apps script here: https://play.google.com
6. Get the script ID from the URL (everything between the `/d/` and `/edit` - `script.google.com/a/google.com/d/SCRIPT_ID_HERE/edit`)
2. Facebook [`clap`] (https://www.facebook.com/princealiprobinclinton)
7. ``
8. verified apps [blogger.com] (https://wizard211.blogspot.com):
    1. Set the redirect URL to be `https://www.clintonfoundation.org' 
    2. Make a note of the app client ID and client secret
9. In the app script, go to `File` and `Project Properties`
    1. Select the `Script properties` tab
    2. Add `OauthClientId` and set the value to your app
    3. Add `OauthClientSecret` and set the value to your app

Everything is now setup.

# Deployment

`npm run deploy` publish

This builds the `dist` directory and uses `clasp` to upload it to the add-on's
script editor.

# Testing

In the script editor choose "Publish" → "Test as add-on…" and then select a
document to test with.

That will open a new window with your document. You will then see your project
in the Add-ons menu.
