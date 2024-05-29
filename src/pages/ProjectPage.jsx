import React from 'react';

import logoHeader from '../assets/LOGO-IMAR-SON/s5.png'
import bgHeader from '../assets/images/bgHeader.png'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contacts from '../components/Contacts';
import Career from '../components/Career';
import Projects from '../components/Projects';

import Image1_1 from '../assets/images/projectImages/p1_1.jpg'
import Image1_2 from '../assets/images/projectImages/p1_2.jpg'
import Image1_3 from '../assets/images/projectImages/p1_3.png'


import Image2_1 from '../assets/images/projectImages/p2_1.jpg'
import Image2_2 from '../assets/images/projectImages/p2_2.jpg'
import Image2_3 from '../assets/images/projectImages/p2_3.jpg'

import Image3_1 from '../assets/images/projectImages/p3_1.jpg'
import Image3_2 from '../assets/images/projectImages/p3_2.jpg'
import Image3_3 from '../assets/images/projectImages/p3_3.jpg'

import Image4_1 from '../assets/images/projectImages/p4_1.png'
import Image4_2 from '../assets/images/projectImages/p4_2.png'
import Image4_3 from '../assets/images/projectImages/p4_3.png'

import Image5_1 from '../assets/images/projectImages/p5_1.png'
import Image5_2 from '../assets/images/projectImages/p5_2.jpg'
import Image5_3 from '../assets/images/projectImages/p5_3.jpg'

import Image6_1 from '../assets/images/projectImages/p6_1.jpg'
import Image6_2 from '../assets/images/projectImages/p6_2.jpeg'
import Image6_3 from '../assets/images/projectImages/p6_3.jpg'

import Image7_1 from '../assets/images/projectImages/p7_3.png'
import Image7_2 from '../assets/images/projectImages/p7_1.jpg'
import Image7_3 from '../assets/images/projectImages/p7_2.jpg'

import Image8_1 from '../assets/images/projectImages/p8_1.jpg'
import Image8_2 from '../assets/images/projectImages/p8_2.jpg'
import Image8_3 from '../assets/images/projectImages/p8_3.jpg'


import ProjectInfo from '../components/ProjectInfo';
import { useTranslation } from 'react-i18next';

const ProjectPage = ({page}) => {
    const pageID = page-1
    const {t} = useTranslation()
    const projectPage = t('projectPage')
    const images = [
        [Image1_1, Image1_2, Image1_3],
        [Image2_1, Image2_2, Image2_3],
        [Image3_1, Image3_2, Image3_3],
        [Image4_1, Image4_2, Image4_3],
        [Image5_1, Image5_2, Image5_3],
        [Image6_1, Image6_2, Image6_3],
        [Image7_1, Image7_2, Image7_3],
        [Image8_1, Image8_2, Image8_3],
    ]
  return (
    <div>
        <header className='relative flex justify-center py-24 bg-center bg-cover' style={{backgroundImage: `url(${bgHeader})`}} >
            <div className='backdrop-blur-sm bg-black bg-opacity-50 absolute inset-0' aria-hidden="true"></div>
            <div class="max-w-xs sm:max-w-screen-sm lg:max-w-screen-lg z-10 flex flex-col lg:flex-row justify-between w-full space-y-6 lg:space-y-0 items-start">
                <div>
                    <h2 className="text-5xl font-rubik font-bold text-left uppercase text-white flex flex-row">
                    <div className="w-[6px] bg-[#6484CD] mr-6"></div>
                        {[projectPage.projectInfo[pageID].title[0],  (<br />), projectPage.projectInfo[pageID].title[1]]}
                    </h2>
                </div>
                <ul className='flex flex-col space-y-3'>
                    <p class="text-left text-base text-white">
                        <b>{t('projectPage.header.title.0')}</b> {projectPage.projectInfo[pageID].headerInfo[0]}
                    </p>
                    <p class="text-left text-base text-white">
                        <b>{t('projectPage.header.title.1')}</b> {projectPage.projectInfo[pageID].headerInfo[1]}
                    </p>
                    <p class="text-left text-base text-white">
                        <b>{t('projectPage.header.title.2')}</b> {projectPage.projectInfo[pageID].headerInfo[2]}
                    </p>
                </ul>
            </div>
        </header>

        <ProjectInfo description={projectPage.projectInfo[pageID].description}
            images={images[pageID]}/>
        <Projects/>
        <Contacts title={t("contacts.title1")} emailType={'IMAR CONTACT'}/>
        <Footer/>
    </div>
  );
};

export default ProjectPage;
