import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'

const API_KEY='AIzaSyDA8-XYaf3o7R_gZB2z4Hqc2LPgWJ5TD2A';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { vidoes : [] }

    YTSearch({key: API_KEY, term: 'New Zealand'}, function (data) {
      this.setState({ videos });
    });
  }

  render() {
    return <SearchBar />;
  }


}

export default App;
