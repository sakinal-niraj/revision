import Home from "../view/home/Home";
import Result from "../view/result/Result";

export const routes = [
    {
        path:'/',
        title:'Home',
        element:<Home />
    },
    {
        path:'/result',
        title:'Result',
        element:<Result />
    }
];