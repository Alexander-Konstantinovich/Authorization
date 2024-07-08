import { Navigate, Outlet } from 'react-router'
import { useAppSelector } from '../../redux/hooks'
import { selectSignUp } from '../../redux/signUp/selectors'

const PrivateRoute = () => {
	const isAuthorized = useAppSelector(selectSignUp)
	return isAuthorized ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute