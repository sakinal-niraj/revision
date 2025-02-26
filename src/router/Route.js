import NotFound from "../components/NotFound";
import Home from "../view/user/home/Home";
import Result from "../view/user/result/Result";

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
        path:'*',
        element:<NotFound />
    }
];