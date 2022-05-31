import "./App.css";
import Add from "./Calculator/Add";
import Sub from "./Calculator/Sub";
import Div from "./Calculator/Div";
import Mul from "./Calculator/Mul";

function App() {
    return (
        <>
            <ul>
                <li> This is add two number={Add(4, 9)}</li>
                <li>This is sub two number={Sub(9, 4)}</li>
                <li>This is div two number={Div(15, 9)}</li>
                <li>This is mul two number={Mul(3, 3)}</li>
            </ul>
        </>
    );
}

export default App;
