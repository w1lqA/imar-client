import React from 'react';

const ActivityItem = ({ icon, title, description, classes }) => {
  return (
    <div className={`flex items-start space-x-4 p-4 ${classes}`}>
      {/* <Icon className="text-4xl text-[#A2B0C1]" /> */}
      <img src={icon} className='w-16'/>
      <div>
        <h3 className="text-base font-bold font-rubik text-[#333333]">{title}</h3>
        <p className="text-[#666666] font-normal text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ActivityItem;
