import Nav from '../pages/Nav'
import { Outlet } from 'react-router'
import { DivLayout, DivLayoutOutlet } from './styleMainLayout'

const MainLayout = () => {
	return (
		<DivLayout>
			<Nav/>
			<DivLayoutOutlet>
			<Outlet />
			</DivLayoutOutlet>
		</DivLayout>
	)
}

export default MainLayout