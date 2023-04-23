import DashboardMenu from '../../components/Dashboard/DashboardMenu'
import DashboardResume from '../../components/Dashboard/DashboardResume'
import NavBar from '../../components/NavBar/NavBar'
import NavbarMobile from '../../components/NavbarMobile/NavbarMobile'

export default function Dashboard() {
    return (
        <div className='text-secundario'>
            <NavBar navBarTile='Inicio' />
            <DashboardMenu />
            <DashboardResume />
            <NavbarMobile />
        </div>
    )
}