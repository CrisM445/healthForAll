// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://377e4f3253395b6c2970142e616edf2b@o4508044689932288.ingest.us.sentry.io/4508044694585344",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
