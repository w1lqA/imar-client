import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Contacts from '../components/Contacts';
import Career from '../components/Career';
import Activities from '../components/Activities';
import About from '../components/About';
import Services from '../components/Services';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Geography from '../components/Geography';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const {t} = useTranslation()
  return (
    <div>
      <Header displayMode={'flex'}/>
      <Activities/>
      <About/>
      <Services/>
      <Hero/>
      <Projects/>
      <Geography/>
      <Career displayMode={'flex'}/>
      <Contacts title={t("contacts.title1")} emailType={'IMAR CONTACT'}/>
      <Footer/>
    </div>
  );
};

export default MainPage;
