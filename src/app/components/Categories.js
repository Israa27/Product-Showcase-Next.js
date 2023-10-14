import React from 'react';

export default function Categories({ tabsCategories,activeTab, onTabChange }) {
  return (
    <div className="flex justify-center mt-4">
      {tabsCategories.map((tab, index) => (
        <button
          key={index}
          className={`text-[16px] w-[207px] mx-[1rem] 
          h-[56px] rounded-md font-body
           text-main_color  ${activeTab === tab || (tab === 'All' && activeTab === '') ?'bg-black text-white shadow-tabShadow':'bg-tabs_bg'}`}
          onClick={() => onTabChange(tab)} 
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
