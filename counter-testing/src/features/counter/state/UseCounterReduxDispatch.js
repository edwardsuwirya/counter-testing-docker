import {useDispatch} from "react-redux";

const UseCounterReduxDispatch = (action,counterRepository) => {
    let {counterDecrementAction, counterIncrementAction, setLoading} = action();
    let {
        callDecrementService,
        callIncrementService
    } = counterRepository();
    const dispatch = useDispatch();

    const dispatchIncrement = async (count) => {
        dispatchLoading();
        let res = await callIncrementService(count);
        dispatch(counterIncrementAction(res));

    }
    const dispatchDecrement = async (count) => {
        dispatchLoading();
        let res = await callDecrementService(count);
        dispatch(counterDecrementAction(res))
    }

    const dispatchLoading = (isLoad = true) => {
        dispatch(setLoading(isLoad))
    }

    return {
        dispatchIncrement, dispatchDecrement
    }
}

export default UseCounterReduxDispatch;
