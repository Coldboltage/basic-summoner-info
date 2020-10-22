import React from "react"

class SummonerInfo extends React.Component {
  render() {
    return (
      <div className="ui container">
        <p>Name: {this.props.name}</p>
        <p>Summoner: {this.props.summonerLevel}</p>
        <p>Account ID: {this.props.accountId}</p>
      </div>
    )
  }
}

export default SummonerInfo;