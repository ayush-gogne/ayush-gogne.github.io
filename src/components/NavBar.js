
import React, {useState} from 'react';
import {NavLink }  from 'react-router-dom';
import './Navbar.css'
function NavBar() {
    //click action
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = (id) => { 
        /* closes menu + scrolls */
        setClick(false);
        console.log(button)
        const element = document.getElementById(id);
        if (element) {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            const targetScrollTop = scrollTop + element.getBoundingClientRect().top - 80;

            // Manually adjust the scroll position
            window.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
            

        }

        
    };


    const showButton= () => { // only show this button when width > 960
        if(window.innerWidth <= 960){
            setButton(false);
        } else setButton(true);
    };
    window.addEventListener('resize', showButton);


  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <NavLink to="/#home" className = "navbar-title" onClick={() =>closeMobileMenu('home')}>
                Ayush Gogne
            </NavLink>


            <ul className={click ? 'nav-menu active':'nav-menu'}>
                <li className='nav-item'>
                    <NavLink to='/#home' className='nav-links' onClick={() =>closeMobileMenu('home')}>
                        Home
                    </NavLink>
                </li>
                
                <li className='nav-item'>
                    <NavLink to='/#projects' className='nav-links' onClick={() =>closeMobileMenu('projects')}>
                        Projects
                    </NavLink>
                </li>

    
                <li className='nav-item'>
                    <a className='nav-linked' href = 'https://www.linkedin.com/in/ayushgogne'> 
                        <i className="fa-brands fa-linkedin"/>
                    </a>
                </li>

                <li className='nav-item'>
                    <a className='nav-linked' href = 'https://github.com/ayush-gogne'> 
                        <i className="fa-brands fa-github"/>
                    </a>
                </li>


            </ul>

            
            
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times':'fas fa-bars'} />

            </div>


        </div>
    </nav>
</>
  )
}

export default NavBar
