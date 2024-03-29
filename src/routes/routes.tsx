import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Transacoes } from "../pages/Transações";

export const routes = createBrowserRouter([ 
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/transacoes',
        element: <Transacoes />
    }
])