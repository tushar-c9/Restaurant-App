import React, { useState } from 'react';
import './styles.css';
import Menu from "./MenuApi.js";
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const uniqueList = ['All',
    ...new Set(
    Menu.map( (currElem) => currElem.category )
  )
]

const Restaurant = () => {
  
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if(category ==="All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter( (currEle) => currEle.category === category );
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem = {filterItem} menuList = {menuList}/>
      <MenuCard menuData={menuData} />
    </>
  )
};

export default Restaurant;