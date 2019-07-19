import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Liked from './LikedButton';
import AddButton from './AddButton';
import Unliked from './UnlikedButton';
import './HomeButton.css';
import {Link} from 'react-router-dom';

const ideas = [
  {
    name: 'Robots that clean the ocean',
    description:
      'Imagine robots that could walk the beach and pick up trash? Or swim throguh the ocean filtering microplastics and lifting tires. All controlled with AI and an app',
  },
  {
    name: 'Machine learning to help with diet',
    description:
      'Half the time people dont know what their body needs. Imagine a smart watch that could track your body and tell you what your body needs at the right time',
  },
  {
    name: 'Multigeneration connection app',
    description:
      'Lonliness is the greatest killer in older people. Now kids are reporting hirer levels. Lets connect people from different generations to spice up their lives',
  },
  {
    name: 'Trees that grow twice as fast',
    description:
      'Imagine robots that could walk the beach and pick up trash? Or swim throguh the ocean filtering microplastics and lifting tires. All controlled with AI and an app',
  },
  {
    name: 'Space travel',
    description:
      'Imagine robots that could walk the beach and pick up trash? Or swim throguh the ocean filtering microplastics and lifting tires. All controlled with AI and an app',
  },
];

class IdeasList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    return (
      <React.Fragment>
        <section style={iconRow2}>
          <div style={column}>
            <h1 style={h2}>Get inspired? </h1>
            <p style={h3}>Share your idea </p>
          </div>
          <div className='swing'>
            <Link to='/timetable/details/new'>
              <AddButton className={addButton2} />
            </Link>
          </div>
        </section>
        <h1 style={h1}>Shared ideas: </h1>
        <div style={root}>
          {ideas.map((idea, i) => {
            return (
              <ExpansionPanel style={panel}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id={`panel${i}-header`}>
                  <Typography style={heading}>{idea.name}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={detailsExpansion}>
                  <div style={ideaDetails}>
                    <p style={ideaText}>{idea.description}</p>
                    <div style={iconRow}>
                      <div onClick={this.handleClick}>
                        {this.state.liked === true ? <Liked /> : <Unliked />}
                      </div>
                      <AddButton className={addButton} />
                    </div>
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default IdeasList;

const root = {
  width: '90%',
  padding: '0 !important',
  marginLeft: '20px',
};
const heading = {
  color: '#6539ec',
  fontWeight: '500',
};
const panel = {
  margin: '10px',
  borderRadius: '4px',
};
const detailsExpansion = {
  margin: '10px',
};
const iconRow = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '95%',
};
const iconRow2 = {
  display: 'flex',
  width: '95%',
  alignItems: 'center',
};
const column = {
  display: 'flex',
  flexDirection: 'column',
};
const ideaDetails = {
  width: '335px',
  textAlign: 'justify',
};
const ideaText = {
  margin: '0px 10px',
  padding: '10px',
  borderRadius: '10px',
};
const addButton = {margin: '300px'};
const addButton2 = {
  margin: '300px',
};
const h1 = {
  color: '#8df3de',
  margin: '10px 30px 10px 30px ',
  fontWeight: '300',
  letterSpacing: '1.2px',
  fontSize: '1.6em',
  marginTop: 20,
};
const h2 = {
  color: '#8df3de',
  margin: '0px 20px 0px 30px ',
  fontWeight: '300',
  letterSpacing: '1.2px',
  fontSize: '1.6em',
  marginTop: 20,
};
const h3 = {
  color: '#8df3de',
  margin: '0px 0px 0px 30px ',
  fontWeight: '300',
  letterSpacing: '1.2px',
  fontSize: '1em',
};
