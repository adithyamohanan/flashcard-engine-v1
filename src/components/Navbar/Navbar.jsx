import './Navbar.css';
import Icon from '../../assets/icon-logo.png';

function Navbar() {
    return (




        <nav className="sm:w-[80%] mx-auto sticky top-3 z-10 custom-navbar">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <span className="text-2xl text-white font-semibold"><img src={Icon} alt='icon' className='w-7'/></span>
                    <div className="flex space-x-4 text-white">
                        <a href="#">Dashboard</a>
                        <a href="#">My FlashCards</a>
                        <a href="#">Statistics</a>
                        <a href="#">Settings</a>
                    </div>
                </div>
            </div>
        </nav>



    );
}

export default Navbar;