import {useSelector} from "react-redux";
import CounterOutput from "../counter/view/CounterOutput";
import CounterButton from "../counter/view/CounterButton";

const NewCounter = ({bloc}) => {
    const errorSelector = state => state.error;
    const error = useSelector(errorSelector);
    const loadingSelector = state => state.isLoad;
    const isLoading = useSelector(loadingSelector);
    let {
        handleDecrement,
        handleIncrement,
    } = bloc();

    return (
        <div>
            <>
                <CounterOutput/>
                <CounterButton title={"Tambah"} action={handleIncrement}/>
                <CounterButton title={"Kurang"} action={handleDecrement}/>
                <br/>
                <span>{error}</span>
                {isLoading ?
                    <span>Loading...</span> : <></>}
            </>

        </div>
    )
}

export default NewCounter;
