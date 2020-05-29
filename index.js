const core = require('@actions/core');
const github = require('@actions/github');
const https = require('https');
const WATTSPEED_ENDPOINT = "https://api.wattspeed.com/";

try {
  const token = core.getInput('token');

  console.log('Generating Wattspeed snapshot');

  https.get(`${WATTSPEED_ENDPOINT}update?token=${token}`, (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      let responseMessage = '';

      if (JSON.parse(data).ok === 1)
        responseMessage = 'Wattspeed snapshot successfully generated';
      else
        responseMessage = 'There was en error when when trying to generate the Wattspeed snapshot';

      core.setOutput("response", responseMessage);
    });

  }).on("error", (err) => {
    console.log("Wattspeed snapshot generation failed: " + err.message);
  });
} catch (error) {
  core.setFailed("Wattspeed snapshot generation failed: " + error.message);
}
