import { NavLink } from 'react-router-dom';
import logo from '../assets/logo_mugiwara.png';

const Navbar = () => {
    return (
        <nav className="h-[12vh] flex flex-row justify-around items-center bg-white">
            <NavLink className="h-[50%] w-[10%]" to="/" >
                <img src={logo} alt="logo" className='h-[100%] w-[100%]'/>
            </NavLink>
            <div className='w-[80%] h-full flex flex-col justify-center'>
                <ul className='flex flex-row justify-around h-full items-center font-bold text-[#2E333F]'>
                    <li>
                        <NavLink 
                            to="/simulation-appels" 
                            className={({ isActive }) => isActive ? "border-b-2 border-yellow-500" : ""}
                        >
                            Simulation d’appels
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/saisie" 
                            className={({ isActive }) => isActive ? "border-b-2 border-my-yellow" : ""}
                        >
                            Saisie de données
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard" 
                            className={({ isActive }) => isActive ? "border-b-2 border-my-yellow" : ""}
                        >
                            Tableau de Board
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/chatbot" 
                            className={({ isActive }) => isActive ? "border-b-2 border-my-yellow" : ""}
                        >
                            ChatBot
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/faq" 
                            className={({ isActive }) => isActive ? "border-b-2 border-my-yellow" : ""}
                        >
                            FAQ
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
