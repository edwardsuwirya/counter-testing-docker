import {useDispatch} from "react-redux";

const NewCounterBloc = (newCounterAction) => {
    let {
        counterIncrementAction,
        counterDecrementAction
    } = newCounterAction();
    const dispatch = useDispatch();

    const handleIncrement = (count) => {
        dispatch(counterIncrementAction(count));
    }
    const handleDecrement = (count) => {
        dispatch(counterDecrementAction(count));
    }
    return {
        handleDecrement,
        handleIncrement,
    }
}

export default NewCounterBloc;
