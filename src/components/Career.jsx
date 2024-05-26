import React from 'react';


import bgHero from '../assets/images/project2_1.png'
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CareerPage from '../pages/CareerPage';

const Career = ({displayMode}) => {
  const {t} = useTranslation()
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div className='max-w-screen-3xl mx-auto relative flex justify-center py-8 bg-center bg-cover' style={{backgroundImage: `url(${bgHero})`}} >
        <div className='backdrop-blur-sm bg-black bg-opacity-50 absolute inset-0' aria-hidden="true"></div>
        <div class="max-w-4xl mx-auto px-4 py-8 z-10">
          <div class="flex flex-col items-center space-y-8">
            <div className="w-[50px] h-[6px] bg-[#6484CD]"></div>
            {/* <img src={logoHeader} className='w-[300px] drop-shadow-lg'/> */}
            <h2 className="text-4xl font-rubik font-bold text-center mb-8 uppercase text-white">{t("career.title")}</h2>
            <p class="text-center max-w-4xl text-lg text-white">
              {t("career.description")}
            </p>
            <div class={`${displayMode} justify-center`}>
              <Link onClick={scrollToTop} to={'/career'} class="bg-[#6484CD] flex flex-row items-center shadow-2xl text-sm text-white px-6 py-4 group font-bold text-center tracking-[4px] font-rubik uppercase">
              {t("career.button")}
                  <FaArrowRight className='-ml-3 opacity-0 group-hover:ml-3 group-hover:opacity-100 transition-all ease-in-out duration-300'/>
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Career;
