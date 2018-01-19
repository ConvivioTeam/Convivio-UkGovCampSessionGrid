require('dotenv').config();

var private_key = process.env.UKGC_PRIVATE_KEY;
var clean_private_key = private_key.split('\\n').join('\n');

var config = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet'
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '1S6nemSPxSLrURGigaQZFKViWBoAhalpE2f0RtZ92Fpk',
        worksheetTitle: 'Sessions',
        credentials: {
          "type": process.env.UKGC_TYPE,
          "project_id": process.env.UKGC_PROJECT_ID,
          "private_key_id": process.env.UKGC_PRIVATE_KEY_ID,
          "private_key": clean_private_key,
          "client_email": process.env.UKGC_CLIENT_EMAIL,
          "client_id": process.env.UKGC_CLIENT_ID,
          "auth_uri": process.env.UKGC_AUTH_URI,
          "token_uri": process.env.UKGC_TOKEN_URI,
          "auth_provider_x509_cert_url": process.env.UKGC_AUTH_PROVIDER_X509_CERT_URL,
          "client_x509_cert_url": process.env.UKGC_CLIENT_X509_CERT_URL
        }
      }
    }
  ]
};
module.exports = config;