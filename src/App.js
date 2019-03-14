import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import { getPhotos } from './services/photoService';
import './App.css';
import PhotosList from './components/PhotosList';
import _ from 'lodash';
import PhotoDetail from './components/PhotoDetail';

class App extends Component {
  state = {
    query: '',
    photos: null,
    selectedPhoto: null
  };

  componentDidMount() {
    getPhotos('animal').then(photos =>
      this.setState({ photos: photos.results })
    );
  }

  onInputChange = e => {
    this.setState({ query: e.target.value });

    setTimeout(() => {
      getPhotos(this.state.query).then(photos => {
        this.setState({ photos: photos.results });
      });
    }, 3000);
  };

  onPhotoSelected = photo => {
    const selectedPhoto = _.find(this.state.photos, p => p.id === photo.id);

    this.setState({ selectedPhoto });
  };

  render() {
    const { query, photos, selectedPhoto } = this.state;
    let photosList = null;

    if (photos) {
      photosList = (
        <PhotosList
          onSelected={this.onPhotoSelected}
          selectedPhoto={selectedPhoto}
          photos={photos}
        />
      );
    }

    return (
      <React.Fragment>
        <div className="container">
          <SearchBox
            value={query}
            onInputChange={this.onInputChange}
            placeholder="Search for..."
          />
          <div className="row">
            <div className="col-md-4">{photosList}</div>
            <div className="col-md-8">
              <PhotoDetail photo={selectedPhoto} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
