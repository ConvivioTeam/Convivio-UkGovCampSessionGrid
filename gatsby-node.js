/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.onCreatePage = ({ page, boundActionCreators}) => {
  const { createPage } = boundActionCreators;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/session/)) {
    page.matchPath = "/session/:id";
    // Update the page.
    createPage(page);
  }
};