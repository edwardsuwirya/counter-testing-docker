import CounterOutput from "./view/CounterOutput";
import CounterButton from "./view/CounterButton";
import {WithLoading} from "../../shared/WithLoading";
import {useSelector} from "react-redux";

const Counter = ({bloc}) => {
    const errorSelector = state => state.error;
    const error = useSelector(errorSelector);
    let {
        handleDecrement,
        handleIncrement,
    } = bloc();

    return (
        <div>
            <CounterOutput/>
            <CounterButton title={"Tambah"} action={handleIncrement}/>
            <CounterButton title={"Kurang"} action={handleDecrement}/>
            <br/>
            <span>{error}</span>
        </div>
    )
}

const CounterWithLoading = WithLoading(Counter);
export default CounterWithLoading;
