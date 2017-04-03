import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY='AIzaSyDA8-XYaf3o7R_gZB2z4Hqc2LPgWJ5TD2A';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos : [] };

    YTSearch({key: API_KEY, term: 'New Zealand'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
      </div>
    );
  }


}

export default App;
