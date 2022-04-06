import './App.css';
import CounterRepository from "./features/counter/CounterRepository";
import NewCounter from "./features/newcounter/NewCounter";
import NewCounterAction from "./features/newcounter/NewCounterAction";
import NewCounterBloc from "./features/newcounter/NewCounterBloc";

const App = () => {
    // const isLoadSelector = state => state.isLoad;
    // const isLoad = useSelector(isLoadSelector);
    // return (
    //     <CounterWithLoading isLoad={isLoad}
    //                         bloc={() => CounterBloc(() => UseCounterReduxDispatch(CounterAction, CounterRepository))}/>
    // );
    return (
        <NewCounter bloc={() => NewCounterBloc(() => NewCounterAction(CounterRepository))}/>
    )
}

export default App;
