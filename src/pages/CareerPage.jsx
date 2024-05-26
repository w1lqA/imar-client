import React from 'react';

import Footer from '../components/Footer';
import Contacts from '../components/Contacts';
import Career from '../components/Career';
import { useTranslation } from 'react-i18next';

const CareerPage = () => {
  const {t} = useTranslation()
  return (
    <div>
        <Career displayMode={'hidden'}/>
        <Contacts title={t("contacts.title2")} emailType={'IMAR CAREER'}/>
        <Footer/>
    </div>
  );
};

export default CareerPage;
