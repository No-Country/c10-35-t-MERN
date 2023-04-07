import DashboardMenu from '../../components/Dashboard/DashboardMenu'
import DashboardResume from '../../components/Dashboard/DashboardResume'

export default function Dashboard() {
    return (
        <div className='text-secundario'>
            {/* Colocar Navbar superior */}
            <DashboardMenu />
            <DashboardResume />
            {/* Colocar Navbar inferior */}
        </div>
    )
}