import React, { Component } from 'react';
import { debounce } from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import './App.css';

const API_KEY='AIzaSyDA8-XYaf3o7R_gZB2z4Hqc2LPgWJ5TD2A';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = { 
      videos : [],
      selectedVideo: null
     };

    YTSearch({key: API_KEY, term: 'New Zealand'}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  searchVideos(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    const searchVideos = debounce(term => this.searchVideos(term), 300);

    return (
      <div>
        <SearchBar onInputChange={term => searchVideos(term)} />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList 
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
        </div>
      </div>
    );
  }


}

export default App;
