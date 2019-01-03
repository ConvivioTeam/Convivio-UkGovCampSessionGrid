var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1S6nemSPxSLrURGigaQZFKViWBoAhalpE2f0RtZ92Fpk');

module.exports.DocRows = doc.useServiceAccountAuth;

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function (err) {

  // Get all of the rows from the spreadsheet.
  doc.getRows(1,
    {
      query: 'year = 2018'
    }, function (err, rows) {
      console.log(rows);
  });
});
//console.log(DocRows);

//export default DocRows
