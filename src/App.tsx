import { Provider } from "react-redux";
import { store } from "./config/store";
import { routes } from "./routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
    return (
        <>
        <Provider store={store}>
        <RouterProvider router={routes} />
        </Provider>



        </>
    );
}

export default App;