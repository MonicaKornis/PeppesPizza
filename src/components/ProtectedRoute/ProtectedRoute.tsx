import { PropsWithChildren } from "react"
import { AuthUser } from "../../types";
import { useAuth } from './../../context/AuthContext';

type ProtectedRouteProps = PropsWithChildren & {
    allowedRole?: AuthUser['role'];
}

const ProtectedRoute = ({allowedRole, children}: ProtectedRouteProps) => {
    const currentUser = useAuth();

    if(currentUser === undefined) return <>Loading</>;
    if(currentUser === null || !(allowedRole === currentUser?.currentUser?.role)) return <div>{`Ooops! You do not have access to this page :)`}</div>;
    if(currentUser) return children;
}

export default ProtectedRoute;  