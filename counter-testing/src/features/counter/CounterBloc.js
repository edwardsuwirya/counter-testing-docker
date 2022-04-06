const CounterBloc = (useCounterReduxDispatch) => {
    let {dispatchIncrement, dispatchDecrement} = useCounterReduxDispatch();

    const handleIncrement = async (count) => {
        dispatchIncrement(count);
    }
    const handleDecrement = async (count) => {
        dispatchDecrement(count);
    }
    return {
        handleDecrement,
        handleIncrement,
    }
}

export default CounterBloc;
