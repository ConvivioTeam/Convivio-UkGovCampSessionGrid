import React, { Component } from 'react'
import Link from 'gatsby-link'

console.log();

class SessionPage extends Component {
  render () {
    console.log(this.props);
    var path = this.props.location.pathname.replace("/", "").split("/");

    return (
      <div>
        <h1>Hi from the session page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    );
  }
}

export default SessionPage

export const sessionQuery  = graphql `query sessionQuery {
  googleSheetSessionsRow(id: {eq: "$id"}) {
    id
    year
    day
    time
    session
    capacity
    title
    leader1
    leader2
    leader3
    sessionnotes
    sessionnoteslongurl
    hashtag
    twitterconversation
  }
}
`
