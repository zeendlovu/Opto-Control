import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ErrorIcon from '@mui/icons-material/Error';
import SettingsIcon from '@mui/icons-material/Settings';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from 'react-router-dom';
import {useContext} from "react";
import {DarkModeContext} from "../../context/darkModeContext";

const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext)
    return(
        <div className="sidebar">
            <div className='top'>
                <Link to={'/'} style={{textDecoration: 'none'}}>
                    <span className='logo'>Opto Controls</span>
                </Link>

            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className='title'>MAIN</p>
                    <Link to={'/'} style={{textDecoration: 'none'}}>
                        <li>
                            <DashboardIcon className='icon' />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className='title'>LISTS</p>
                    <Link to={'/users'} style={{textDecoration: 'none'}}>
                        <li>
                            <PeopleIcon className='icon' />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to={'/products'} style={{textDecoration: 'none'}}>
                        <li>
                            <InventoryIcon className='icon' />
                            <span>Products</span>
                        </li>
                    </Link>

                    <li>
                        <PaymentIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className='title'>USEFUL</p>
                    <li>
                        <EqualizerIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsIcon className='icon' />
                        <span>Notifications</span>
                    </li>
                    <p className='title'>SERVICE</p>
                    <li>
                        <ErrorIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyIcon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className='title'>USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icon'/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'>
                <div className='colorOption' onClick={()=>dispatch({type:"LIGHT"})}></div>
                <div className='colorOption' onClick={()=>dispatch({type:"DARK"})}></div>
            </div>
        </div>


    )
}

export default Sidebar;