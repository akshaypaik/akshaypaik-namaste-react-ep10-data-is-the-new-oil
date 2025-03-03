import useOnlineStatus from '../../utils/CustomHooks/useOnlineStatus'
import './Header.css'
import Logo from './Logo/Logo'
import NavItems from './NavItems/NavItems'

// Another way to write component using arrow function
const Header = () => {

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <Logo />
            <NavItems />
            <div className='connection-status'>{onlineStatus ? `You're connected ✅` : `Connection Lost 🔴`}</div>
        </div>
    )
}
export default Header;