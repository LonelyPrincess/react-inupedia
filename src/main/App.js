import React from 'react';

import Logo from './components/ui/Logo';
import BreedSelector from './components/BreedSelector';
import BreedImageGallery from './components/BreedImageGallery';

class App extends React.Component {

  state = {
    selectedBreed: ''
  };

  onBreedSelected = (selectedBreed) => {
    console.debug(`Selected breed changed to ${selectedBreed}`);
    this.setState({ selectedBreed });
  };

  render () {
    const { selectedBreed } = this.state;

    return (
      <main>
        <header>
          <Logo />

          {/* --- Breed selector --- */}
          <BreedSelector
            onBreedSelected={this.onBreedSelected} />
        </header>

        {/* --- Image gallery --- */}
        <BreedImageGallery
          key={selectedBreed}
          selectedBreed={selectedBreed} />

      </main>
    );
  }

}

export default App;
