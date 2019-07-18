import React from 'react';

const catagories = [
  'fintech',
  'foodtech',
  'psychtech',
  'community',
  'AI',
  'environment',
  'robots',
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
        <h5>Related Categories:</h5>
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
