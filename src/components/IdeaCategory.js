import React from 'react';

const catagories = [
  'fintech',
  'automobiles',
  'foodtech',
  'data visualisation',
  'psychtech',
  'community',
  'AI',
  'environment',
  'robots',
  'big-data',
  'non-for-profit',
  'health',
];

class IdeaCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      react: '',
    };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    // const currentState = this.state.selected;
    // this.setState({selected: !currentState});
    // this.componentShouldUpdate();
    // console.log(e);
  }

  componentShouldUpdate(e) {
    if (this.state.selected === false) {
      console.log('hi');
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h4>CATEGORIES:</h4>
        <div className='buttons-wrapper'>
          {catagories.map((name, index) => {
            return (
              <button
                name={name}
                key={index}
                className='category-button'
                onClick={this.toggleClass}>
                <b>{name}</b>
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default IdeaCategory;
