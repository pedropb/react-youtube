import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

describe('An App', function () {
  const app = shallow(<App />);

  it('renders a search bar', () => {
    expect(app.find(SearchBar)).toHaveLength(1);
  });

  it('renders a video list', () => {
    expect(app.find(VideoList)).toHaveLength(1);
  });

  it('renders a video detail', () => {
    expect(app.find(VideoDetail)).toHaveLength(1);
  });

});