import React from 'react';

import Footer from '../components/Footer';
import Contacts from '../components/Contacts';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Services from '../components/Services';

const ServicesPage = () => {
  const {t} = useTranslation()
  return (
    <div>
        <Header displayMode={'hidden'}/>
        <Services/>
        <Contacts title={t("contacts.title1")} emailType={'IMAR CONTACT'}/>
        <Footer/>
    </div>
  );
};

export default ServicesPage;
