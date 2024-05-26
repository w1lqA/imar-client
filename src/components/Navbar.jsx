import React, { useState } from "react";
import logoNav from '../assets/LOGO-IMAR-SON/1.png';
import { Link } from 'react-router-dom';
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const {t} = useTranslation()

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <nav className="bg-white text-white py-4">
            <div className="container max-w-screen-xl mx-auto flex lg:flex-nowrap relative flex-wrap justify-between items-center px-12 xl:px-6 sm:px-24">
                <Link onClick={scrollToTop} to='/' className='w-32 h-10 flex my-auto'>
                    <img src={logoNav} alt="Logo" />
                </Link>
                <ul className={`text-[#666666] lg:items-center items-end font-semibold text-sm ${isOpen ? "flex w-full order-3" : "hidden lg:flex"} lg:flex lg:w-auto lg:flex-row flex-col lg:space-x-12 space-y-4 lg:space-y-0 lg:py-0 py-6`}>
                    <li><Link onClick={scrollToTop} to='/'>{t('navbar.main')}</Link></li>
                    <li><Link onClick={scrollToTop} to='/projects'>{t('navbar.projects')}</Link></li>
                    <li><Link onClick={scrollToTop} to='/services'>{t('navbar.services')}</Link></li>
                    <li><Link onClick={scrollToTop} to='/career'>{t('navbar.career')}</Link></li>
                    <LanguageSelector/>
                </ul>
                <div className="lg:hidden block">
                    <button 
                        onClick={handleToggle} 
                        className="text-[#666666] focus:outline-none">
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
