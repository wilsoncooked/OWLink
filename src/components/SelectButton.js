import React from 'react';

class SelectButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      react: '',
    };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass(e) {
    const currentState = this.state.selected;
    this.setState({selected: !currentState});
    this.componentShouldUpdate();
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
        <button
          name='react.js'
          className={
            this.state.selected ? 'catagory-button-active' : 'catagory-button'
          }
          onClick={this.toggleClass}>
          <b>React.js</b>
        </button>
      </div>
    );
  }
}

export default SelectButton;
