import React from 'react';

import Logo1 from '../assets/logos/4.png'
import Logo2 from '../assets/logos/2.png'
import Logo3 from '../assets/logos/3.png'

import bgHeader from '../assets/images/bgProject.png'

import Footer from '../components/Footer';
import Contacts from '../components/Contacts';
import Services from '../components/Services';

import { useTranslation } from 'react-i18next';

const ServicePage = ({page}) => {
    const pageID = page-1
    const {t} = useTranslation()
    const servicePage = t('servicePage')
    const logos = [
        Logo1, Logo2, Logo3
    ]
    const services = [
        {
            title: 'CONSTRUCTION ENGINEERING',
            description: (<div><li>Turnkey construction and installation works </li>
                <li>Attracting a full staff of employees to the facility </li>
                <li>Quick mobilization and high-quality coordinated work of the team</li></div>)
        },
        {
            title: 'DESIGNING',
            description: (<div><li>Design of engineering system drawings</li>
                <li>Delivery of the complete list of documentation to the customer</li>
                <li>Support during the construction process</li></div>)
        },
        {
            title: 'EXPLOITATION',
            description: (<div><li>Professional service </li>
                <li>Efficient maintenance technology</li>
                <li>Saving of effort and money as a result of proper operation</li></div>)
        },
    ]

  return (
    <div>

        <header className='relative flex justify-center py-8 bg-center bg-cover' style={{backgroundImage: `url(${bgHeader})`}} >
            <div className='backdrop-blur-sm bg-black bg-opacity-50 absolute inset-0' aria-hidden="true"></div>
            <div class="max-w-4xl mx-auto px-4 py-12 z-10">
                <div class="flex flex-col items-center">
                <div className="w-[50px] h-[6px] bg-[#6484CD] mb-12"></div>
                <img src={logos[pageID]} className='w-[300px] drop-shadow-lg'/>
                {/* <p class="mt-20 text-center max-w-4xl text-xl text-white">
                We are an international construction and engineering company, we accompany our clients in the implementation of infrastructure, industrial and development projects at every stage of their life cycle.
                </p> */}
                </div>
            </div>
        </header>
        
        <div className="mx-auto pt-12 flex flex-col items-center">
            <h2 className="text-4xl font-rubik font-bold text-center mb-6 uppercase text-[#333333]">{servicePage.serviceInfo[pageID].title}</h2>
            <div className="w-[50px] h-[6px] bg-[#6484CD] mb-6"></div>
            <ul className='px-12 font-bold text-base uppercase text-[#666666] flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 mb-6 lg:mb-12'>
                <h3>{servicePage.serviceInfo[pageID].info[0]}</h3>
                <h3>{servicePage.serviceInfo[pageID].info[1]}</h3>
                <h3>{servicePage.serviceInfo[pageID].info[2]}</h3>
            </ul>
            <div className='flex flex-col items-center space-y-6 lg:space-y-12 max-w-screen-2xl'>
                <h3 className='font-bold font-rubik uppercase text-xl text-[#666666]'>{servicePage.serviceInfo[pageID].descriptionTitle}</h3>
                <div className='flex flex-col space-y-6 lg:space-y-0 lg:flex-row justify-between items-start'>
                {servicePage.serviceInfo[pageID].description.map((descriptionSection) =>(
                    <li className='flex flex-col items-start text-[#666666] text-lg font-normal px-12'>
                    {descriptionSection.map((listItem) => (
                        <ul>{listItem}</ul>
                    ))}
                    </li>
                ))}
                </div>
            </div>
        </div>
        
        <Services pageID={pageID}/>

        <Contacts title='contact us' emailType={'IMAR CONTACT'}/>
        <Footer/>
    </div>
  );
};

export default ServicePage;
