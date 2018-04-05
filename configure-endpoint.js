const fs = require('fs');
const endpoint = process.env.API_BASE_URL;

if (!endpoint) {
  throw `Missing env variable API_BASE_URL.`;
}

const output = `module.exports = "${endpoint}";`;

fs.writeFileSync('./src/endpoint.js', output, 'utf-8');
