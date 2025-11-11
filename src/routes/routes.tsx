import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
const routes = [
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
]

export default routes;