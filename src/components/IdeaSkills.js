import React from 'react';

const skills = [
  'Front-end Developer',
  'Back-end Developer',
  'Full-stack Developer',
  'UI/UX',
  'Data Scientist',
  'Manager',
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
        <h4>SKILLS: </h4>
        <div className='buttons-wrapper'>
          {skills.map((name, index) => {
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
