import React from 'react';

import Footer from '../components/Footer';
import Contacts from '../components/Contacts';
import { useTranslation } from 'react-i18next';
import Projects from '../components/Projects';
import Header from '../components/Header';

const ProjectsPage = () => {
  const {t} = useTranslation()
  return (
    <div>
        <Header displayMode={'hidden'}/>
        <Projects/>
        <Contacts title={t("contacts.title1")} emailType={'IMAR CONTACT'}/>
        <Footer/>
    </div>
  );
};

export default ProjectsPage;
