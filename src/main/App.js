import React from 'react';
import * as DogAPI from './utils/DogAPI';

class App extends React.Component {
  state = {
    loading: false,
    breedList: [],
    selectedBreed: null
  };

  componentWillMount() {
    DogAPI.getBreedList()
      .then((breedList) => this.setState({ breedList }))
      .catch(console.error);
  }

  render () {
    // TODO: https://react-bootstrap.github.io/components/dropdowns/
    const { breedList } = this.state;

    return (
      <main>

        {/* TODO: move ddl to an standalone component */}
        <select>
          <option className="placeholder" disabled>- Choose a breed -</option>
          {breedList.map(breed => {
            if (breed.subtypes.length > 0) {
              console.log(`${breed.name} has ${breed.subtypes.length} subtypes`);
              return breed.subtypes.map(subtype => (
                <option key={`${breed.name}-${subtype}`} value={`${breed.name}-${subtype}`}>
                  {subtype} {breed.name}
                </option>
              ));
            } else {
              return <option key={breed.name} value={breed.name}>{breed.name}</option>;
            }
          })}
        </select>
      </main>
    );
  }

}

export default App;
