// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://377e4f3253395b6c2970142e616edf2b@o4508044689932288.ingest.us.sentry.io/4508044694585344",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
