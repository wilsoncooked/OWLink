import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Liked from './LikedButton';
import AddButton from './AddButton';
import Unliked from './UnlikedButton';

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
    console.log(this.state);
    return (
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
                    {this.state.liked === true ? (
                      <Liked onClick={this.handleClick} />
                    ) : (
                      <Unliked onClick={this.handleClick} />
                    )}
                    <AddButton className={addButton} />
                  </div>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </div>
    );
  }
}

export default IdeasList;

const root = {
  width: '100%',
  padding: '0 !important',
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
