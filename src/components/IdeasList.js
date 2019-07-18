import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Like from './LikeButton';

const ideas = ['Idea 1', 'Idea 2', 'Idea 3', 'Idea 4', 'Idea 5'];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  idea: {
    margin: '10px',
    borderRadius: '4px',
  },
  details: {
    margin: '10px',
    maxWidth: '95%',
  },
}));

export default function IdeasList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {ideas.map((name, index) => {
        return (
          <ExpansionPanel className={classes.idea}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id={`panel${index}-header`}>
              <Typography className={classes.heading}>{name}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
              <div>
                <h3>hihi</h3>
                <Like />
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </div>
  );
}
