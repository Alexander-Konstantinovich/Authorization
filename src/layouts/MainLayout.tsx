import Nav from '../pages/Nav'
import { Outlet } from 'react-router'

const MainLayout = () => {
	return (
		<div>
			<Nav/>
			<Outlet />
		</div>
	)
}

export default MainLayout