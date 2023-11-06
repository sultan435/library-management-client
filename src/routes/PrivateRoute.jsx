import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../components/ui/Loading";

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useAuth()
    const location = useLocation()

    if(isLoading){
        return <Loading></Loading>
    }
    if(user?.email){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;