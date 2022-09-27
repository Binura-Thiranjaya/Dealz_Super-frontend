import Login from "./Pages/Login/Login"
import Home from "./Pages/Home/Home"
import AddStock from "./Pages/Stock/AddStock/AddStock"
export const routes = [
    {
        path: '/login',
        Component: <Login/>
    },
    {
        path: '/',
        Component: <Home/>
    },
    {
        path: '/addstock',
        Component: <AddStock/>
    }
]