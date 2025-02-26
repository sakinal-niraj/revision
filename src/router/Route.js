import NotFound from "../components/NotFound";
import Category from "../view/user/home/Category";
import Home from "../view/user/home/Home";
import SubCategory from "../view/user/home/SubCategory";
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
        path:'category',
        element:<Category />
    },
    {
        path:'subcategory',
        element:<SubCategory />
    },
    {
        path:'*',
        element:<NotFound />
    }
];