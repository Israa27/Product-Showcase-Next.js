"use client"; // This is a client component 

import { useState } from "react";
import Header from './components/Header';
import Categories from './components/Categories';
import Products from './components/Products';
import data from '../../public/data/dataset.json';

export default function Home() {
  const tabsCategories = ['All',...Array.from(new Set(data.map((item) => item.category)))];
  const [activeTab, setActiveTab] = useState('') 

  const handleTabChange = (tab) => {
    setActiveTab(tab === 'All' ? '' : tab) 
  };

  return (
    <div>
      <Header />
      <Categories tabsCategories={tabsCategories} activeTab={activeTab} onTabChange={handleTabChange} />
      <Products products={data} activeTab={activeTab} /> 
    </div>
  );
}
