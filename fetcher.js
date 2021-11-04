const args = process.argv;
let arg = args.slice(2);

const request = require('request');
request(arg[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  const fs = require('fs');

  fs.writeFile(arg[1], body, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${arg[1]}`);
  });
});
