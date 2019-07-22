import React from 'react';
import Form from 'react-bootstrap/Form';

import * as DogAPI from '../utils/DogAPI';

class BreedSelector extends React.Component {

  state = {
    breedList: []
  };

  componentWillMount() {
    DogAPI.getBreedList()
      .then((breedList) => this.setState({ breedList }))
      .catch(console.error);
  }

  onBreedSelected = (event) => {
    const selectedBreed = event.target.value;
    this.props.onBreedSelected(selectedBreed);
  };

  render() {
    const { breedList } = this.state;
    const { selectedBreed } = this.props;

    return (
      <Form.Group controlId="breedSelector" className="breed-selector">
        <Form.Control as="select" value={selectedBreed} onChange={this.onBreedSelected}>
          <option value="" className="placeholder" disabled>- Choose a breed -</option>
          {breedList.map(breed => {
            if (breed.subtypes.length > 0) {
              return breed.subtypes.map(subtype => (
                <option key={`${breed.name}-${subtype}`} value={`${breed.name}-${subtype}`}>
                  {subtype} {breed.name}
                </option>
              ));
            } else {
              return (
                <option key={breed.name} value={breed.name}>
                  {breed.name}
                </option>
              );
            }
          })}
        </Form.Control>
      </Form.Group>
    );
  }

}

export default BreedSelector;
