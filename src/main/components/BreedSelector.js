import React from 'react';
import Form from 'react-bootstrap/Form';

class BreedSelector extends React.Component {

  onBreedSelected = (event) => {
    const selectedBreed = event.target.value;
    this.props.onBreedSelected(selectedBreed);
  };

  render() {
    const { breedList, selectedBreed } = this.props;

    return (
      <Form.Group controlId="breedSelector" className="breed-selector">
        {/*<Form.Label>Choose a breed</Form.Label>*/}
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
              return <option key={breed.name} value={breed.name}>{breed.name}</option>;
            }
          })}
        </Form.Control>
      </Form.Group>
    );
  }

}

export default BreedSelector;
