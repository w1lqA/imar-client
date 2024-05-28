import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import usFlag from '../assets/icons/usFlag.png'
import ruFlag from '../assets/icons/ruFlag.png'

const languages = [
    {code: 'en', lang: ruFlag},
    {code: 'ru', lang: usFlag},
]

const LanguageSelector = () =>{
    const {i18n} = useTranslation();
    const languageID = +(i18n.language === 'ru')
    console.log(languageID)
    const [currentLanguage, setCurrentLanguage] = useState(languages[languageID].lang)

    const changeLanguage = (ID) => {
        setCurrentLanguage(languages[ID].lang)
        i18n.changeLanguage(languages[ID].code)
    }
    return (
        <div>
            <button onClick={() => 
                changeLanguage(Math.abs(languageID-1))
            } className="w-8 scale-100 hover:scale-95 transition-all ease-in-out duration-300">
                <img src={currentLanguage}/>
            </button>
        </div>
    )
}

export default LanguageSelector;