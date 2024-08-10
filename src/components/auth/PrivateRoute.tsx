import { Navigate, Outlet } from "react-router"
import { useAppSelector } from "../../redux/hooks"
import { selectSignInAuthorize } from "../../redux/signIn/selectors"

const PrivateRoute = () => {
  const isAuthorized = useAppSelector(selectSignInAuthorize)
  return isAuthorized ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute