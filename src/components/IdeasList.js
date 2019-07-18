import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Like from './LikeButton';
import AddButton from './AddButton';

const ideas = ['Idea 1', 'Idea 2', 'Idea 3', 'Idea 4', 'Idea 5'];

class IdeasList extends React.Component {
  render() {
    return (
      <div style={root}>
        {ideas.map((name, index) => {
          return (
            <ExpansionPanel style={idea}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id={`panel${index}-header`}>
                <Typography style={heading}>{name}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={detailsExpansion}>
                <div style={ideaDetails}>
                  <p style={ideaText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <div style={iconRow}>
                    <Like />
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
const idea = {
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
