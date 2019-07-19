import React from 'react';
import {Link} from 'react-router-dom';

class SendIdea extends React.Component {
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
      <Link
        className='link'
        to={{
          pathname: `/Timetable/details`,
        }}>
        <button className='submit-button' onClick={this.toggleClass}>
          <b>Share</b>
        </button>
      </Link>
    );
  }
}

export default SendIdea;
