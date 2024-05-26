import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ image, title, description, classes, t, projectID}) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <Link onClick={scrollToTop} to={`/project${projectID}`} className="flex flex-col space-y-6 w-[260px] m-6 scale-100 hover:scale-95 transition-all ease-in-out duration-300">
        <img src={image} className={`shadow-2xl w-[260px] h-[160px] ${classes}`}/>
        <div className="bg-white border-2 border-[#E0E0E0] px-8 py-6 flex flex-col space-y-3 items-left justify-center">
            <h3 className="font-arimo font-bold text-base text-[#333333]">{title}</h3>
            <p className="font-normal text-sm text-[#666666]">{description}</p>
            <div class="border-[3px] border-[#DFDFDF] text-sm text-[#666666] px-3 py-2 font-bold text-left tracking-[4px] uppercase">{t("projects.projectCardButton")}</div>
        </div>
    </Link>
  );
};

export default ProjectCard;
