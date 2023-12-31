import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Home from "../page/Home";
import AddBook from "../page/AddBook";
import BorrowedBook from "../page/BorrowedBook";
import Login from "../page/Login";
import Register from "../page/Register";
import MainLayout from "../components/layout/MainLayout";
import BookDetails from "../components/booksCart/BookDetails";
import PrivateRoute from "./PrivateRoute";
import AllBook from "../page/AllBook";
import CategoryBook from "../components/booksCart/CategoryBook";
import UpdateBook from "../components/booksCart/UpdateBook";
import BookReadMore from "../components/booksCart/BookReadMore";
import Error from "../page/Error";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement:<Error/>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'addBook',
                element: <PrivateRoute><AddBook /></PrivateRoute>
            },
            {
                path: 'allBook',
                element: <PrivateRoute><AllBook /></PrivateRoute>
            },
            {
                path: 'borrowed',
                element: <PrivateRoute><BorrowedBook /></PrivateRoute>
            },
            {
                path: 'bookCart/:bookCategory',
                element: <PrivateRoute><CategoryBook/></PrivateRoute>,
                loader: ({params})=> fetch(`https://library-management-server-gamma.vercel.app/api/v1/books/${params.bookCategory}`)
            },
            {
                path: 'book-details/:id',
                element:<PrivateRoute><BookDetails></BookDetails></PrivateRoute>
            },
            {
                path: 'book-update/:id',
                element:<PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>,
                loader: ({params})=> fetch(`https://library-management-server-gamma.vercel.app/api/v1/book/${params.id}`)
            },
            {
                path: 'book-readMore/:id',
                element:<PrivateRoute><BookReadMore></BookReadMore></PrivateRoute>,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
])
export default routes;