import React from 'react';
import * as DogAPI from './utils/DogAPI';

import Logo from './components/ui/Logo';
import Loader from './components/ui/Loader';
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
        <header>
          <Logo />

          {/* --- Breed selector --- */}
          <BreedSelector
            breedList={breedList}
            selectedBreed={selectedBreed}
            onBreedSelected={this.onBreedSelected}></BreedSelector>
        </header>

        {/* --- Image gallery --- */}
        <BreedImageGallery key={selectedBreed} imageList={imageList} />

        {/* --- Loader --- */}
        <Loader show={false} message="Wait a second, we're looking for images." />

      </main>
    );
  }

}

export default App;
