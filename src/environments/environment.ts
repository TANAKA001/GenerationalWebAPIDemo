import pkg from "../../package.json";

const env = {
  name: pkg.name,
  environment: "develop", // OPTIONS: 'develop' | 'production'
  version: pkg.version, // Version Number from package.json
  production: false, //
  debug: true, // Turns DEBUG mode on and off
  log: true, // Set to false to disable logging
  performance: true, // No idea what this is for but I like the name

  api: {
    url: "//localhost:9090/", // the base URL for the RestAPI
    timeout: 50000, // (MS) timeout all requests after # of MS
    allowedMethods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // "CONNECT", "OPTIONS", "TRACE"
    log: false, // log all api calls
  },

  cookies: {
    path: "",
    prefix: "", // appends to the front of all cookies
    sameSite: "Lax", // OPTIONS: 'Lax' | 'Strict' | 'None; Secure'
    expires: 3 * 24 * 60 * 60 * 1000, // in ms
  },

  files: {
    enable: true, // Enable/Disable File uploads
    maxUploadSize: 60000000, // The maximum file upload size accepted by the server in bytes
    allowedMIME: {
      image: ["image/jpeg", "image/png", "image/svg+xml"],
      text: ["text/plain", "text/csv"],
      audio: [],
      video: [],
      application: ["application/pdf"],
      font: [],
      model: [],
    },
  },
};

export default env;
