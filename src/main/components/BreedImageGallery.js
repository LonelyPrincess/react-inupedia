import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

import * as DogAPI from '../utils/DogAPI';

import Loader from './ui/Loader';

class BreedImageGallery extends React.Component {

  state = {
    loading: false,
    imageList: [],
    currentIndex: 0
  };

  componentWillMount() {
    const { selectedBreed } = this.props;

    if (selectedBreed) {
      this.loadImageList(selectedBreed);
    }

  }

  loadImageList = (selectedBreed) => {
    const [ breed, subtype ] = selectedBreed.split("-");

    this.setState({ loading: true });
    DogAPI.getImagesForBreed(breed, subtype)
      .then((imageList) => this.setState({ imageList }))
      .catch(console.error)
      .then(this.setState({ loading: false }));
  };

  render() {
    const { loading, imageList, currentIndex } = this.state;

    return (
      <section className="breed-gallery">

        {/* --- Search results --- */}
        {imageList.length > 0 && (
          <div className="search-results">
            <ButtonToolbar>
              <Button variant="primary" size="sm"
                onClick={() => this.setState({ currentIndex: currentIndex - 1 })}
                disabled={currentIndex <= 0}>Previous</Button>
              <Button variant="warning" size="sm"
                onClick={() => this.setState({ currentIndex: currentIndex + 1 })}
                disabled={currentIndex >= imageList.length - 1}>Next</Button>
            </ButtonToolbar>

            <img src={imageList[currentIndex]} alt="" />
          </div>
        )}

        {/* --- No results message --- */}
        {imageList.length === 0 && (
          <div className="no-results">
            <i className="icon"></i>
            <p className="text">No images available to display</p>
          </div>
        )}

        {/* --- Loader --- */}
        {loading && (
          <Loader show={loading} message="Wait a second, we're looking for images." />
        )}

      </section>
    );
  }

}

export default BreedImageGallery;
