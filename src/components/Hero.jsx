import React from 'react';
import { useTranslation } from 'react-i18next';
import bgHero from '../assets/images/project2_1.png';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <div className='max-w-screen-3xl mx-auto relative flex justify-center py-8 bg-center bg-cover' style={{backgroundImage: `url(${bgHero})`}} >
            <div className='backdrop-blur-sm bg-black bg-opacity-50 absolute inset-0' aria-hidden="true"></div>
            <div className="max-w-4xl mx-auto px-4 py-8 z-10">
                <div className="flex flex-col items-center space-y-8">
                    <div className="w-[50px] h-[6px] bg-[#6484CD]"></div>
                    <p className="text-center px-12 max-w-4xl text-lg text-white">
                        {t('hero.description')}
                    </p>
                    <div className="flex justify-center">
                        
                        <a href='#about' class="bg-[#6484CD] flex flex-row items-center shadow-2xl text-sm text-white px-6 py-4 group font-bold text-center tracking-[4px] font-rubik uppercase">
                            {t('hero.button')}
                            <FaArrowRight className='-ml-3 opacity-0 group-hover:ml-3 group-hover:opacity-100 transition-all ease-in-out duration-300'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
