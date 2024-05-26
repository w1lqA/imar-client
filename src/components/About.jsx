import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
  const { t } = useTranslation();

  const listElements = t('about.listElements', { returnObjects: true });
  const paragraphs = t('about.paragraphs', { returnObjects: true });
  const aboutTitle = t('about.title');
  const consultationText = t('about.consultation');
  const contactFormButton = t('about.contactFormButton');

  return (
    <section id='about' className="bg-white max-w-screen-3xl mx-auto">
      <div className="grid 2xl:grid-cols-8">
        <div className="2xl:col-span-3 flex flex-col items-left justify-center px-6 sm:px-16 py-12 space-y-12 bg-[#6484CD]">
          {listElements.map((element, index) => (
            <div key={index} className="flex justify-start">
              <div className="flex-shrink-0 mt-1 mr-4">
                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.5078 12.2969L16.1172 0.59375C15.7891 0.229166 15.3789 0.046875 14.8867 0.046875C14.3945 0.046875 13.9844 0.229166 13.6562 0.59375C13.2917 0.921875 13.1094 1.33203 13.1094 1.82422C13.1094 2.31641 13.2917 2.72656 13.6562 3.05469L22.8984 13.5547L13.6562 24.0547C13.2917 24.3828 13.1094 24.793 13.1094 25.2852C13.1094 25.7773 13.2917 26.1875 13.6562 26.5156C13.9844 26.8802 14.3945 27.0625 14.8867 27.0625C15.3789 27.0625 15.7891 26.8802 16.1172 26.5156L26.5078 14.8125C26.6536 14.6667 26.7721 14.4753 26.8633 14.2383C26.9544 14.0013 27 13.7734 27 13.5547C27 13.3359 26.9544 13.1172 26.8633 12.8984C26.7721 12.6797 26.6536 12.4792 26.5078 12.2969ZM1.07812 26.5156C1.44271 26.8802 1.86198 27.0625 2.33594 27.0625C2.8099 27.0625 3.22917 26.8802 3.59375 26.5156L13.9297 14.8125C14.112 14.6667 14.2396 14.4844 14.3125 14.2656C14.3854 14.0469 14.4219 13.8099 14.4219 13.5547C14.4219 13.3359 14.3854 13.1172 14.3125 12.8984C14.2396 12.6797 14.112 12.4792 13.9297 12.2969L3.59375 0.59375C3.22917 0.229166 2.8099 0.046875 2.33594 0.046875C1.86198 0.046875 1.44271 0.229166 1.07812 0.59375C0.75 0.921875 0.585938 1.33203 0.585938 1.82422C0.585938 2.31641 0.75 2.72656 1.07812 3.05469L10.375 13.5547L1.07812 24.0547C0.75 24.3828 0.585938 24.793 0.585938 25.2852C0.585938 25.7773 0.75 26.1875 1.07812 26.5156Z" fill="white"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold font-rubik text-white">
                  {element.boldText}
                </h3>
                <p className="text-[#DFDFDF] text-sm">{element.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="2xl:col-span-5">
          <div className='px-24 py-12 lg:py-24 bg-[#F7F7F7] grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-8 sm:gap-16'>
            <div className='text-left'>
              <h2 className="text-4xl font-rubik font-bold text-left mb-12 uppercase text-[#333333]">{aboutTitle}</h2>
              <div className="w-[50px] h-[6px] bg-[#6484CD]"></div>
            </div>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-[#696666] font-normal text-sm leading-relaxed">{paragraph}</p>
            ))}
          </div>
          <div className='bg-[#2A2A2A] py-8 px-12 sm:px-24 flex justify-between items-center'>
            <h2 className="text-3xl font-bold font-rubik text-white">{consultationText}</h2>
            <a href='#contacts' className="flex bg-transparent hover:bg-[#6484CD] flex-row items-center border-[3px] group border-[#6484CD] text-xs sm:text-sm text-[#6484CD] hover:text-white px-3 py-2 font-bold text-center tracking-[4px] uppercase">
              <FaArrowRight className='-ml-3 opacity-0 group-hover:ml-3 group-hover:mr-3 group-hover:opacity-100 transition-all ease-in-out duration-300'/>
              {contactFormButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

