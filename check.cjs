const https = require('https');
const urls = [
  "https://media.theresetclann.com/Cliffs%201.png",
  "https://media.theresetclann.com/Cliffs%20yoga%203.png",
  "https://media.theresetclann.com/IMG_7596.jpeg",
  "https://media.theresetclann.com/Villas.jpeg"
];

Promise.all(urls.map(url => new Promise((resolve) => {
  https.request(url, { method: 'HEAD' }, (res) => {
    resolve(`${url} -> ${res.statusCode}`);
  }).on('error', (e) => resolve(`${url} -> Error ${e.message}`)).end();
}))).then(results => console.log(results.join('\n')));
