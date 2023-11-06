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

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home />,
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
                loader: ({params})=> fetch(`http://localhost:5000/api/v1/books/${params.bookCategory}`)
            },
            {
                path: 'book-details/:id',
                element:<PrivateRoute><BookDetails></BookDetails></PrivateRoute>
                // loader: ({params})=> fetch(`http://localhost:5000/api/v1/book/${params.id}`)
            },
            {
                path: 'book-update/:id',
                element:<UpdateBook></UpdateBook>,
                loader: ({params})=> fetch(`http://localhost:5000/api/v1/book/${params.id}`)
            }

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