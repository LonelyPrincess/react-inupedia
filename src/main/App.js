import React from 'react';
import * as DogAPI from './utils/DogAPI';

import Logo from './components/ui/Logo';
import BreedSelector from './components/BreedSelector';
import BreedImageGallery from './components/BreedImageGallery';

class App extends React.Component {
  state = {
    selectedBreed: '',
    breedList: []
  };

  onBreedSelected = (selectedBreed) => {
    this.setState({
      selectedBreed
    });
  };

  componentWillMount() {
    DogAPI.getBreedList()
      .then((breedList) => this.setState({ breedList }))
      .catch(console.error);
  }

  render () {
    const { breedList, selectedBreed } = this.state;

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
        <BreedImageGallery key={selectedBreed} selectedBreed={selectedBreed} />

      </main>
    );
  }

}

export default App;
