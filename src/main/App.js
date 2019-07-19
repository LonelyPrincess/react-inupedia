import React from 'react';
import * as DogAPI from './utils/DogAPI';

import BreedSelector from './components/BreedSelector';

class App extends React.Component {
  state = {
    loading: false,
    breedList: [],
    selectedBreed: '',
    imageList: [],
    currentImageIndex: 0
  };

  onBreedSelected = (selectedBreed) => {
    this.setState({
      selectedBreed,
      imageList: [],
      currentImageIndex: 0
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
    // TODO: https://react-bootstrap.github.io/components/dropdowns/
    const { breedList, selectedBreed, imageList, currentImageIndex } = this.state;

    return (
      <main>

        <header className="logo">
          <span>inu</span>
          <i className="icon-test"></i>
          <span>pedia</span>
        </header>

        <BreedSelector
          breedList={breedList}
          selectedBreed={selectedBreed}
          onBreedSelected={this.onBreedSelected}></BreedSelector>

        {/* TODO: create another component to display results */}
        <section className="breed-data">
          <pre>Current selection: <b>{ selectedBreed || '-' }</b></pre>

          {/* TODO: show only one image at a time! there are a lot of em to show at once... */}
          <section className="breed-gallery">
            { imageList.length > 0 && (
              <div>
                <p>
                  <button
                    onClick={() => this.setState({ currentImageIndex: currentImageIndex - 1 })}
                    disabled={currentImageIndex <= 0}>Previous</button>
                  <button
                    onClick={() => this.setState({ currentImageIndex: currentImageIndex + 1 })}
                    disabled={currentImageIndex >= imageList.length - 1}>Next</button>
                </p>

                <img src={imageList[currentImageIndex]} alt="" />
              </div>
            )}
          </section>
        </section>

        <footer>
          <a href="http://github.com/LonelyPrincess">GitHub</a> - <a href="http://flaticon.com">FlatIcon</a>
        </footer>
      </main>
    );
  }

}

export default App;
