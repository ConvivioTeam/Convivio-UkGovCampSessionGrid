module.exports = {
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
        credentials: require('./client_secret.json')
      }
    }
  ]
};
