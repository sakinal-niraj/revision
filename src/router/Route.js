import NotFound from "../components/NotFound";
import Home from "../view/user/home/Home";
import Login from "../view/user/Login";
import Result from "../view/user/result/Result";
import Signup from "../view/user/Signup";

export const routes = [
    {
        path:'/',
        element:<Home />
    },
    {
        path:'result',
        element:<Result />
    },
    {
        path:'signup',
        element:<Signup />
    },
    {
        path:'login',
        element:<Login />        
    },
    {
        path:'*',
        element:<NotFound />
    }
];