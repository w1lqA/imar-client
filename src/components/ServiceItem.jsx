import React from 'react';
import { Link } from 'react-router-dom';


const ServiceItem = ({ logo, title, description, page, styles}) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
    <Link onClick={scrollToTop} to={`/service${page}`} className={`${styles} flex-col items-center space-y-6 p-6 scale-100 hover:scale-95 hover:opacity-70 transition-all ease-in-out duration-300`}>
      <div className='w-48  flex my-auto '>
          <img src={logo}/>
      </div>
      <h2 className="font-rubik text-center font-bold text-lg text-[#333333] uppercase">{title}</h2>
      <p className="font-normal text-sm text-[#696666] leading-8 max-w-96 px-6">
          {description}
      </p>
    </Link>
  );
};

export default ServiceItem;
