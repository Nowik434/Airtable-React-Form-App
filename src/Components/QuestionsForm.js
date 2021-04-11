import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux';
import { setCheckbox } from '../Redux/actions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    marginTop: '20px',
    marginLeft: '10px',
    textAlign: 'center',
  },
}));


function PaymentForm({ handleChange, setCheckbox }) {
  const classes = useStyles();

  const AntSwitch = withStyles((theme) => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        System egzaminacyjny
      </Typography>
      <Grid container spacing={3}>
        <Grid container className={classes.gridItem} spacing={3}>
          <Grid item xs={6} md={6}>
            <Typography variant="h7" gutterBottom>
              Czy platforma działała płynnie?
          </Typography>
          </Grid>
          <Grid item xs={6} md={6}>
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Nie</Grid>
                <Grid item>
                  <AntSwitch value={false} name="platform" onChange={(e) => setCheckbox(e.target.checked, 'platform')} />
                </Grid>
                <Grid item>Tak</Grid>
              </Grid>
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.gridItem} spacing={3}>
          <Grid item xs={6} md={6}>
            <Typography variant="h7" gutterBottom>
              Czy logowanie uczestników przebiegło bez zarzutu?
          </Typography>
          </Grid>
          <Grid item xs={6} md={6} >
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Nie</Grid>
                <Grid item>
                  <AntSwitch value={false} name="platformLogIn" onChange={(e) => setCheckbox(e.target.checked, 'platformLogIn')} />
                </Grid>
                <Grid item>Tak</Grid>
              </Grid>
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.gridItem} spacing={3}>
          <Grid item xs={6} md={6}>
            <Typography variant="h7" gutterBottom>
              Czy system poprawnie zliczył wyniki?
          </Typography>
          </Grid>
          <Grid item xs={6} md={6} >
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Nie</Grid>
                <Grid item>
                  <AntSwitch value={false} name="correctScore" onChange={(e) => setCheckbox(e.target.checked, 'correctScore')} />
                </Grid>
                <Grid item>Tak</Grid>
              </Grid>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="other1"
            name="other1"
            label="Inne uwagi"
            fullWidth
            autoComplete="text"
            variant="standard"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCheckbox: (value, name) => dispatch(setCheckbox(value, name)),
  }
}

export default connect(null, mapDispatchToProps)(PaymentForm);