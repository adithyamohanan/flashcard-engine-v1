import './Navbar.css';
import Icon from '../../assets/icon-logo.png';
import { Link } from 'react-scroll';

function Navbar() {
    return (
        <nav className="sm:w-[80%] mx-auto sticky top-3 z-10 custom-navbar">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <span className="text-2xl text-white font-semibold">
                        <img src={Icon} alt='icon' className='w-8'/>
                    </span>
                    <div className="flex space-x-4 text-white">
                        <Link to="dashboard" smooth={true} duration={500} className="cursor-pointer">Dashboard</Link>
                        <Link to="flashcards" smooth={true} duration={500} className="cursor-pointer">My FlashCards</Link>
                        <Link to="statistics" smooth={true} duration={500} className="cursor-pointer">Statistics</Link>
                        <Link to="settings" smooth={true} duration={500} className="cursor-pointer">Settings</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
