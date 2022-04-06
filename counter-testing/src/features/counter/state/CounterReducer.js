import {COUNTER_INCREMENTED, COUNTER_DECREMENTED, SET_LOADING} from "./CounterAction";

const initialState = {
    nilai: 0,
    isLoad: false,
    error: '',
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_INCREMENTED:
            if (action.counter.nilai >= 3) {
                return {...state, isLoad: false, error: 'Tidak boleh lebih dari 3'}
            }
            return {...state, ...action.counter};
        case COUNTER_DECREMENTED:
            if (action.counter.nilai < 0) {
                return {...state, isLoad: false, error: 'Tidak boleh negatif'}
            }
            return {...state, ...action.counter};
        case SET_LOADING:
            return {...state, isLoad: action.counter.isLoad, error: ''}
        default:
            return state;
    }
}

export default counterReducer;
