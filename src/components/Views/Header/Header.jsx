import { useNavigate } from 'react-router-dom/dist';
import './Header.styles.css';


export const Header = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/', { replace: true });
    };

    return(
        <header>
            <img src="/img/logo.png" alt="logo" />
            <div onClick={handleLogout}>Logout</div>
        </header>
    );
}