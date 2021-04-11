import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  marginBottom: {
    marginBottom: '20px',
  },
}));

export default function Review({ handleChange }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h7" component="h2" className={classes.marginBottom}>
            Opisz kryterium którego dotyczy problem - spróbuj zaproponować aktualizację
          </Typography>
          <TextField
            id="answer1"
            name="answer1"
            label="Twoje uwagi..."
            fullWidth
            autoComplete="text"
            variant="outlined"
            multiline
            rows={4}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h7" component="h2" className={classes.marginBottom}>
            Opisz kryterium którego dotyczy problem - spróbuj zaproponować aktualizację
          </Typography>
          <TextField
            id="answer2"
            name="answer2"
            label="Twoje uwagi..."
            fullWidth
            autoComplete="text"
            variant="outlined"
            multiline
            rows={4}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h7" component="h2" className={classes.marginBottom}>
            Opisz kryterium którego dotyczy problem - spróbuj zaproponować aktualizację
          </Typography>
          <TextField
            id="answer3"
            name="answer3"
            label="Twoje uwagi..."
            fullWidth
            autoComplete="text"
            variant="outlined"
            multiline
            rows={4}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
