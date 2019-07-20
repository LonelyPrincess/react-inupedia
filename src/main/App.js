import React from 'react';
import * as DogAPI from './utils/DogAPI';

import BreedSelector from './components/BreedSelector';
import BreedImageGallery from './components/BreedImageGallery';

class App extends React.Component {
  state = {
    loading: false,
    breedList: [],
    selectedBreed: '',
    imageList: []
  };

  onBreedSelected = (selectedBreed) => {
    this.setState({
      selectedBreed,
      imageList: []
    });

    const [ breed, subtype ] = selectedBreed.split("-");
    DogAPI.getImagesForBreed(breed, subtype)
      .then((imageList) => this.setState({ imageList }))
      .catch(console.error);
  };

  componentWillMount() {
    DogAPI.getBreedList()
      .then((breedList) => this.setState({ breedList }))
      .catch(console.error);
  }

  render () {
    const { breedList, selectedBreed, imageList } = this.state;

    return (
      <main>

        {/* --- Header (TODO: move to a different component) --- */}
        <header className="logo">
          <span>inu</span>
          <i className="icon-test"></i>
          <span>pedia</span>
        </header>

        {/* --- Breed selector --- */}
        <BreedSelector
          breedList={breedList}
          selectedBreed={selectedBreed}
          onBreedSelected={this.onBreedSelected}></BreedSelector>

        {/* --- Image gallery --- */}
        <BreedImageGallery key={selectedBreed} imageList={imageList} />

      </main>
    );
  }

}

export default App;
