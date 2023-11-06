import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Home from "../page/Home";
import AddBook from "../page/AddBook";
import BorrowedBook from "../page/BorrowedBook";
import Login from "../page/Login";
import Register from "../page/Register";
import MainLayout from "../components/layout/MainLayout";
import BooksCart from "../components/booksCart/BooksCart";
import BookDetails from "../components/booksCart/BookDetails";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home />,
                // loader: ()=> fetch("http://localhost:5000/api/v1/categories")
            },
            {
                path: 'addBook',
                element: <AddBook />
            },
            {
                path: 'allBook',
                element: <AddBook />
            },
            {
                path: 'borrowed',
                element: <BorrowedBook />
            },
            {
                path: 'bookCart/:bookCategory',
                element: <BooksCart></BooksCart>,
                loader: ({params})=> fetch(`http://localhost:5000/api/v1/books/${params.bookCategory}`)
            },
            {
                path: 'book-details/:id',
                element:<BookDetails></BookDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/api/v1/book/${params.id}`)
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