

export const addQuestionare = (form) => {
    console.log(form)
    return {
        type: 'ADD_QUESTIONARE',
        payload: form
    }
}

export const handleNext = (step) => {

    return {
        type: 'NEXT_STEP',
        payload: {
            step: step + 1
        }
    }

    // if (activeStep === 2) {
    //   addQuestionare(form);
    //   console.log('FORM SENDED')
    // }
};

export const handleBack = (step) => {

    return {
        type: 'BACK_STEP',
        payload: {
            step: step - 1
        }
    }

    // if (activeStep === 2) {
    //   addQuestionare(form);
    //   console.log('FORM SENDED')
    // }
};

export const setExam = (value) => {
    return {
        type: 'SET_EXAM',
        payload: value
    }
};

export const setCheckbox = (value, name) => {
    return {
        type: 'SET_CHECKBOX',
        payload: {
            name: name,
            value: value
        }
    }
};

export const updateQuestionare = (value) => {
    return {
        type: 'UPDATE_QUESTIONARE',
        payload: value
    }
};

export const setCriteria = (value) => {
    return {
        type: 'SET_CRITERIA',
        payload: value
    }
};