import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { addQuestionare } from '../Redux/actions';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}


const currencies = [
  {
    value: 'Montowanie stolarki',
    label: 'Montowanie stolarki',
  },
  {
    value: 'Projektowanie grafiki',
    label: 'Projektowanie grafiki',
  },
];


function AddressForm({ handleChange }) {
  // console.log(questionary.criteria.map(a => console.log(a)))
  const [currency, setCurrency] = useState();
  const classes = useStyles();


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Twoje dane
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="FirstName"
            name="firstName"
            label="Imię"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="LastName"
            name="lastName"
            label="Nazwisko"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <RadioGroup defaultValue="female" aria-label="gender" name="status" onChange={(e) => handleChange(e)} >
            <FormControlLabel value="Egzaminator" control={<StyledRadio />} label="Egzaminator" />
            <FormControlLabel value="Trener" control={<StyledRadio />} label="Trener" />
            <FormControlLabel value="Operator" control={<StyledRadio />} label="Operator" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="date"
            name="dateOfBirth"
            label="Data Urodzenia"
            type="date"
            defaultValue="2021-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="phone"
            name="phone"
            type="number"
            label="Nr. Telefonu"
            fullWidth
            autoComplete="shipping phone"
            variant="standard"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Adres e-mail"
            fullWidth
            autoComplete="shipping email"
            variant="standard"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="examDate"
            name="examDate"
            label="Data Egzaminu"
            type="date"
            defaultValue="2021-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="selectedExam"
            select
            name="selectedExam"
            label="Wybierz egzamin"
            value={currency}
            onChange={(e) => handleChange(e)}
            helperText="Wybierz temat z którego przeprowadzałeś egzamin"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value} >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;