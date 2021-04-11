import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './QuestionsForm';
import Review from './Review';
import { addQuestionare, handleNext, handleBack, setExam, updateQuestionare, setCriteria } from '../Redux/actions';
import { connect } from 'react-redux';

const API_KEY = process.env.AIRTABLE_API_KEY;

var Airtable = require('airtable');

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Paweł Nowicki
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  main: {
    marginBottom: theme.spacing(4),
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Informacje ogólne', 'Zgłoszenie problemów', 'Podsumowanie'];





function Checkout({ addQuestionare, currentStep, nextStep, backStep, setExam, updateQuestionare, setCriteria, questionary }) {
  const classes = useStyles();
  const [formState, setFormState] = useState({});
  // const [criteria, setCriteria] = useState('');

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm currentStep={currentStep} handleChange={handleChange} questionary={questionary} />;
      case 1:
        return <PaymentForm handleChange={handleChange} formState={formState} />;
      case 2:
        return <Review handleChange={handleChange} />;
      default:
        throw new Error('Unknown step');
    }
  }


  const handleNext = () => {
    console.log(currentStep)
    console.log('questionare updated')
    updateQuestionare(formState);
    nextStep(currentStep)
    if (currentStep === 2) {
      addQuestionare(formState);
    }
  };

  const handleBack = () => {
    backStep(currentStep)
  };

  const handleChange = e => {
    console.log(e.target)
    console.log(formState)
    setFormState({ ...formState, [e.target.name]: e.target.value })
    // eslint-disable-next-line no-unused-expressions
    e.target.name === 'selectedExam' ? setExam(e.target.value) : null
  };

  useEffect(() => {
    var base = new Airtable({ apiKey: API_KEY }).base('appz3wXEuchIbubsF');
    base('Intake').find('rec9CvAVdol5auRJY', function (err, record) {
      if (err) { console.error(err); return; }
      console.log('Retrieved', record.id);
    });
    base('Kryteria').select({
      view: 'Grid view'
    }).firstPage(function (err, records) {
      if (err) { console.error(err); return; }
      setCriteria(records)
      console.log('recordsff', records.id)
    });
    return () => {

    }
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" className={classes.main} maxWidth="sm">
        <Paper className={classes.paper} variant="outlined">
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={currentStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {currentStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Dziękujemy za przesłanie ankiety
                </Typography>
                <Typography variant="subtitle1">
                  Yaaa....
                </Typography>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  {getStepContent(currentStep)}
                  <div className={classes.buttons}>
                    {currentStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Wstecz
                    </Button>
                    )}

                    <Button
                      variant="contained"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {currentStep === steps.length - 1 ? 'Wyślij' : 'Dalej'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  const { questionary, step } = state
  // console.log(questionaries)
  return {
    currentStep: step,
    questionary: questionary.criteria
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addQuestionare: (form) => dispatch(addQuestionare(form)),
    updateQuestionare: (form) => dispatch(updateQuestionare(form)),
    nextStep: (step) => dispatch(handleNext(step)),
    backStep: (step) => dispatch(handleBack(step)),
    setExam: (exam) => dispatch(setExam(exam)),
    setCriteria: (criteria) => dispatch(setCriteria(criteria)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);