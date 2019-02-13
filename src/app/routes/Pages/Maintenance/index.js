import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Build from '@material-ui/icons/Build';
import Hidden from '@material-ui/core/Hidden';
import Settings from '@material-ui/icons/SettingsApplications';
import Warning from '@material-ui/icons/Warning';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  paper: {
    margin: 'auto',
    padding: 40,
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      width: 600,
      height: 300,
    },
    textAlign: 'center'
  },
  artwork: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 30
  },
  icon: {
    margin: '10px 20px',
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    width: 100,
    height: 100,
    '& svg': {
      fontSize: 64,
    },
  },
});

class Maintenance extends React.Component {
  render() {
    const title = brand.name + ' - Maintenance';
    const description = brand.desc;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <div className={classes.container}>
          <Paper className={classes.paper}>
            <div className={classes.artwork}>
              <Avatar className={classes.icon}><Build /></Avatar>
              <Hidden xsDown>
                <Avatar className={classes.icon}><Warning /></Avatar>
              </Hidden>
              <Hidden xsDown>
                <Avatar className={classes.icon}><Settings /></Avatar>
              </Hidden>
            </div>
            <Typography variant="display1" gutterBottom>Website under maintenance</Typography>
            <Typography variant="subheading">Our website is under maintenance. We{"'"}ll be back shortly</Typography>
          </Paper>
        </div>
      </div>
    );
  }
}

Maintenance.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Maintenance);
