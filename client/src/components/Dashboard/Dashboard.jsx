import DashboardMenu from './DashboardMenu'
import DashboardResume from './DashboardResume'

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