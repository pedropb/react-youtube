import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

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
        <div className="row">
          <VideoDetail video={this.state.videos[0]} />
          <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }


}

export default App;
