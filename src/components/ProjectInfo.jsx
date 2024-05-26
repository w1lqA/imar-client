import React, { Component } from 'react'
import { useTranslation } from 'react-i18next';

const ProjectInfo = ({description, images}) => {
    const {t} = useTranslation()
    return (
        <div className='flex flex-col justify-center max-w-screen-lg mx-auto pt-24 space-y-6 lg:space-y-12'>
        <div className='grid grid-cols-6 sm:grid-cols-4 sm:grid-rows-2 space-y-6 sm:space-y-0  lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-12'>
            <div className='flex flex-col items-start col-span-4 col-start-2 sm:col-span-2 sm:col-start-2 lg:col-span-1 lg:col-start-1 lg:place-self-start place-self-center'>
                <h2 className="text-4xl font-rubik font-bold text-left uppercase text-[#333333]">
                    {t("projectInfoSection.title")}
                </h2>
                <p class="text-left max-w-lg text-base text-[#666666]">
                <div className="w-full h-[6px] bg-[#6484CD] my-12"></div>
                    {description[0]}
                </p>
            </div>
            <img src={images[0]} className='max-w-full place-self-end col-span-4 col-start-2 sm:col-span-2 sm:col-start-2 lg:col-span-1'/>
        </div>
        <div className='grid grid-cols-6 sm:grid-cols-4 lg:grid-cols-1 lg:gap-x-12'>
            <img src={images[1]} className='w-full place-self-center col-span-4 col-start-2 sm:col-span-2 sm:col-start-2 lg:col-span-1 lg:place-self-end'/>
        </div>
        <div className='grid grid-cols-6 sm:grid-cols-4 grid-row-1 space-y-6 sm:space-y-0 sm:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-12'>
            <img src={images[2]} className='flex flex-col items-start col-span-4 col-start-2 sm:col-span-2 sm:col-start-2 lg:col-span-1 lg:col-start-1'/>
            <div className='max-w-full place-self-center space-y-6 col-span-4 col-start-2 sm:col-span-2 sm:col-start-2 lg:col-span-1 lg:place-self-start'>
                <p class="text-left max-w-lg text-base text-[#666666]">
                {description[1]}
                </p>
                <p class="text-left max-w-lg text-base text-[#666666]">
                {description[2]}
                </p>
            </div>
        </div>
    </div>
    )
}

export default ProjectInfo;
