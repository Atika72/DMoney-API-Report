const newman = require("newman");
require("dotenv").config();

newman.run(
  {
    //collection: require('./collection/dmoney.json'),
    collection: `https://api.postman.com/collections/20978557-32a48ab9-5686-4ea8-aaec-8932bf6fc873?access_key=${process.env.API_KEY}`,
    //environment:require('./collection/env.json'),
    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to `newman/` in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
