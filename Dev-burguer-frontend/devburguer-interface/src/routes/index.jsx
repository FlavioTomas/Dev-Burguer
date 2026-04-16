import { createBrowserRouter } from "react-router-dom";

import { Home, Login, Menu, Register, Cart } from '../containers'
import { Header, Footer } from "../components";


export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <Home/> 
                <Footer />
            </>
        )
    },
    {
        path: '/login',
        element: <Login/> 
    },
    {
        path: '/cadastro',
        element: <Register/> 
    },
    {
        path: '/menu',
        element: (
            <>
                <Header />
                <Menu/> 
            </>
        )
    },
    {
        path: '/carrinho',
        element: (
            <Cart />
        )
    }
])