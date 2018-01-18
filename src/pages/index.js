import React from 'react'
import Link from 'gatsby-link'
import Spreadsheet from 'gatsby-source-google-sheets'

export const query = graphql `query SessionsQuery {
  allGoogleSheetSessionsRow(filter: {
    year: {eq: 2018}
  }) {
    edges {
     	node {
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
  }
}
`

export default ({ data }) => {
  return (
<div className="session-container">
<div className="session-time">11:00</div>
{data.allGoogleSheetSessionsRow.edges.map(({node}, index) =>
  <div className="session">
    <h2 className="session__title">{node.title}This is a test title, kind of long but not too long in my honest opinion</h2>
    <p className="session__info"><strong>Room:</strong> 2{node.room}</p>
  </div>
)}
  </div>
)}

//export default IndexPage
