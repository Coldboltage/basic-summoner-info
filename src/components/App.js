import React from "react"
import axios from "axios"
import SearchBar from "./SearchBar"
import SummonerInfo from "./SummonerInfo"



class App extends React.Component {
  state = {  summonerInfo : "", summonerLeague : {} };

  apiKey = "RGAPI-cae58e78-fe45-4021-b1b1-0609b5cbf20a"
  onSearchSubmit = async (summonerName) => {
    const timeStart = new Date().getMilliseconds()
    const response = await axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${this.apiKey}`);
    // this.setState({ images : response.data.results })
    this.setState({ summonerInfo : response.data })
    console.log(this.state.summonerInfo)
    const timeEnd = new Date().getMilliseconds();
    console.log(`Executed in ${timeEnd - timeStart} milliseconds`)
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <SummonerInfo 
          name={this.state.summonerInfo.name} 
          summonerLevel={this.state.summonerInfo.summonerLevel}
          accountId={this.state.summonerInfo.accountId}
          />
      </div>
    );
  }
}

export default App