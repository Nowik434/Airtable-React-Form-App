var Airtable = require('airtable');

const initialState = {
    step: 0,
    questionary: {

    }
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_QUESTIONARE': {
            console.log('ACTION', action.payload)
            const { firstName, lastName, date, status, dateOfBirth, selectedExam, phone, email, platform, platformLogIn, correctScore, other1, answer1, answer2, answer3, num, } = action.payload;
            console.log(platform, platformLogIn, correctScore)
            var base = new Airtable({ apiKey: 'keyUikARuFZvTwxwu' }).base('appz3wXEuchIbubsF');
            base('Formularz').create([
                {
                    "fields": {
                        "First Name": firstName,
                        "Last Name": lastName,
                        "Date of Birth": dateOfBirth,
                        "Review Status": status,
                        "Selected Exam": selectedExam,
                        "Email": email,
                        "Phone": phone,
                        "Platform": platform,
                        "Platform log in": platformLogIn,
                        "Correct score": correctScore,
                        "Answer 1": answer1,
                        "Answer 2": answer2,
                        "Answer 3": answer3,
                    }
                },
            ], function (err, records) {
                if (err) {
                    console.error(err);
                    return;
                }
                records.forEach(function (record) {
                    console.log(record.getId());
                });
            });

            return {
                ...state,
                questionary: {
                    ...state.questionary,
                    firstName: firstName,
                    lastName: lastName,
                    date: date,
                    status: status,
                    dateOfBirth: dateOfBirth,
                    selectedExam: selectedExam,
                    phone: phone,
                    email: email,
                    platform: platform,
                    platformLogIn: platformLogIn,
                    correctScore: correctScore,
                    other1: other1,
                    answer1: answer1,
                    answer2: answer2,
                    answer3: answer3,
                    num: num
                }
            }
        }
        case 'UPDATE_QUESTIONARE': {
            console.log('ACTION', action.payload)
            const { firstName, lastName, date, status, dateOfBirth, selectedExam, phone, email, platform, platformLogIn, correctScore, other1, answer1, answer2, answer3, num, } = action.payload;

            return {
                ...state,
                questionary: {
                    ...state.questionary,
                    firstName: firstName,
                    lastName: lastName,
                    date: date,
                    status: status,
                    dateOfBirth: dateOfBirth,
                    selectedExam: selectedExam,
                    phone: phone,
                    email: email,
                    platform: platform,
                    platformLogIn: platformLogIn,
                    correctScore: correctScore,
                    other1: other1,
                    answer1: answer1,
                    answer2: answer2,
                    answer3: answer3,
                    num: num
                }
            }
        }
        case 'NEXT_STEP': {
            console.log('ACTION', action.payload.step)

            return {
                ...state,
                step: action.payload.step,
            }
        }
        case 'BACK_STEP': {
            console.log('ACTION', action.payload.step)

            return {
                ...state,
                step: action.payload.step,
            }
        }
        case 'SET_EXAM': {
            return {
                ...state,
                questionary: {
                    ...state.questionary,
                    selectedExam: action.payload
                }
            }
        }
        case 'SET_CHECKBOX': {
            const { name, value } = action.payload;
            switch (name) {
                case 'platform': {
                    return {
                        ...state,
                        questionary: {
                            ...state.questionary,
                            platform: value
                        }
                    }
                }
                case 'platformLogIn': {
                    return {
                        ...state,
                        questionary: {
                            ...state.questionary,
                            platformLogIn: value
                        }
                    }
                }
                case 'correctScore': {
                    return {
                        ...state,
                        questionary: {
                            ...state.questionary,
                            correctScore: value
                        }
                    }
                }
                default:
                    return state
            }

        }
        case 'SET_CRITERIA': {
            return {
                ...state,
                questionary: {
                    ...state.questionary,
                    criteria: action.payload
                }
            }
        }
        default:
            return state
    }
}