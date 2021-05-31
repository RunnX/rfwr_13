const https = require('https');
const xml2js = require('xml2js');

async function main() {
  https
    .get(
      'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/tesla?format=xml',
      (resp) => {
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
          data += chunk;
        });

        resp.on('end', () => {
          console.log(data);
          Convert(data);
        });
      }
    )
    .on('error', (err) => {
      console.log('Error on get: ' + err.message);
    });
}

main().catch((err) => {
    console.log('Error occurred: ', err);
})

function Convert(data) {
  var parser = new xml2js.Parser({
    explicitArray: false,
  });
  parser.parseString(data, function (err, result) {
    console.log('\n');
    console.log(JSON.stringify(result));
  });
}