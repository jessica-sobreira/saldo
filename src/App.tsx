import { Provider } from "react-redux";
import { store } from "./config/store";

function App() {
    return (
        <>
            <Provider store={store}>
                <h1>Olá</h1>
            </Provider>
        </>
    );
}

export default App;