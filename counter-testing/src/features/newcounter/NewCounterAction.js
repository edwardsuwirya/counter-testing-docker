const COUNTER_INCREMENTED = "counter/incremented"
const COUNTER_DECREMENTED = "counter/decremented"
const SET_LOADING = "counter/loading"

const NewCounterAction = (counterRepository) => {
    let {
        callDecrementService,
        callIncrementService
    } = counterRepository();
    const counterIncrementAction = (counter) => {
        return async (dispatch) => {
            dispatch(setLoading(true));
            let res = await callIncrementService(counter);
            return dispatch(counterIncrementSuccess(res));
        }
    }

    const counterDecrementAction = (counter) => {
        return async (dispatch) => {
            dispatch(setLoading(true));
            let res = await callDecrementService(counter);
            return dispatch(counterDecrementSuccess(res));
        }
    }

    const counterDecrementSuccess = (counter) => {
        return {
            type: COUNTER_DECREMENTED,
            counter: {nilai: counter, isLoad: false}
        }
    }

    const counterIncrementSuccess = (counter) => {
        return {
            type: COUNTER_INCREMENTED,
            counter: {nilai: counter, isLoad: false}
        }
    }

    const setLoading = (isLoad) => {
        return {
            type: SET_LOADING,
            counter: {isLoad: isLoad}
        }
    }
    return {
        counterIncrementAction,
        counterDecrementAction
    }
}


export {NewCounterAction as default, COUNTER_INCREMENTED, COUNTER_DECREMENTED, SET_LOADING};
