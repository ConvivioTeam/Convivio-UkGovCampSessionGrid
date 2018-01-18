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
<div>
    <h1>Hi people</h1>
      <table>
    <thead>
      <tr>
        <th>Session</th>
        <th>Room</th>
        <th>Capacity</th>
        <th>Title</th>
        <th>Leader 1</th>
        <th>Leader 2</th>
        <th>Leader 3</th>
        <th>Session notes</th>
        <th>Hashtag</th>
        <th>Twitter conversation</th>
      </tr>
    </thead>
    <tbody>
{data.allGoogleSheetSessionsRow.edges.map(({node}, index) =>
<tr key={index}>
  <td><Link to={"/session?id=" + node.id}>{node.session}</Link></td>
  <td>{node.room}</td>
  <td>{node.capacity}</td>
  <td>{node.title}</td>
  <td>{node.leader1}</td>
  <td>{node.leader2}</td>
  <td>{node.leader3}</td>
  <td><a href = { "http://" + node.sessionnotes} target = "_new">{node.sessionnotes}</a></td>
  <td>{node.hashtag}</td>
  <td><a href = { "https://" + node.twitterconversation}>{node.twitterconversation}</a></td>
</tr>
)}
    </tbody>
  </table>
  </div>
)}

//export default IndexPage
