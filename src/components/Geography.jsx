import React from "react";
import MapImage from '../assets/images/map.png'
import { useTranslation } from "react-i18next";

const Geography = () => {
    const {t} = useTranslation()
    return (
        <div className="max-w-screen-3xl container bg-white mx-auto flex flex-col items-center pb-16 z-0">
                <h2 className="text-4xl font-rubik font-bold text-center mb-8 uppercase text-[#333333]">{t("geographyTitle")}</h2>
                <div className="w-[50px] h-[6px] bg-[#6484CD]"></div>
                <div className="max-w-screen-sm hover:scale-110  transition-all ease-in-out duration-300 lg:max-w-screen-md justify-center mx-auto mix-blend-darken">
                    <img src={MapImage}/>
                </div>
        </div>
    )
}

export default Geography;