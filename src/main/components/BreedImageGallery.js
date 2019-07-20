import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

class BreedImageGallery extends React.Component {

  state = {
    currentIndex: 0
  };

  render() {
    const { imageList } = this.props;
    const { currentIndex } = this.state;

    return (
      <section className="breed-gallery">
        {imageList.length > 0 && (
          <div>
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
      </section>
    );
  }

}

export default BreedImageGallery;
