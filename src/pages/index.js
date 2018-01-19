import React, { Component } from 'react'
import Link from 'gatsby-link'
import Spreadsheet from 'gatsby-source-google-sheets'

class IndexPage extends Component {

  constructor() {
    super();
    this.room = /r(.*)/;
  }

  splitString(string, size) {
    var re = new RegExp('.{1,' + size + '}', 'g');
    var match;
    var elements = new Array();
    while (match = re.exec(string)) {
      elements[elements.length] = match[0];
    }
    return elements;
  }

  render() {
    console.log(this.props);
    return (
      <div className="sessions">
        {this.props.data.allGoogleSheetSessionsRow.group.map((element, key) =>
          <div className="session-container" key={key}>
            <h1>Session {element.fieldValue}</h1>
            <div className="session-time">{this.splitString(element.edges[0].node.time, 2).join(':')}</div>
            {element.edges.map(({node}, index) =>
              <div className="session" key={index}>
                <h2 className="session__title">{node.title ? node.title : 'Awaiting title'}</h2>
                <p className="session__info">
                  <strong>Room:</strong> {this.room.exec(node.hashtag)[1].toUpperCase()}<br />
                  <strong>Capacity:</strong> {node.capacity}<br />
                  <strong>Leader 1:</strong> {node.leader1}<br />
                  <strong>Leader 2:</strong> {node.leader2}<br />
                  <strong>Leader 3:</strong> {node.leader3}<br />
                  <div className="session__links">
                    <strong>Session notes:</strong> <a href={"http://" + node.sessionnotes} target = "_new">{node.sessionnotes}</a><br />
                    <strong>Twitter conversation:</strong> <a href={"https://" + node.twitterconversation} target = "_new">{node.twitterconversation}</a><br />
                    <strong>Twitter conversation:</strong> <a href={"https://twitter.com/hashtag/" + node.hashtag.replace('#', '')} target = "_new">{node.hashtag}</a>
                  </div>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default IndexPage



export const query = graphql `query Session1Query {
  allGoogleSheetSessionsRow(filter: {
    year: {eq: 2018}
  }) {
    group (field: session) {
      fieldValue
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
}
`
