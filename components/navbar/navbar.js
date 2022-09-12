import React from "react"
import { useEffect, useState, useContext } from 'react';
import SunMoon from "./sunMoon";
import Search from "./search";
import Login from "./login";
import MenuList from "./menuList";
import Logo from "./logo";
import ToggleMobileMenu from "./toggleMobileMenu";
import AppContext from '../../context/appContext';
import Container from "../container";
import Homeproducts from "../homeproduct";
import Industries from "../industries";
const industries = ['Retail', 'Education', 'Healthcare', 'Distribution', 'Manufacturing', 'Agriculture']


const Navbar = ({ categories }) => {
  const menuItems = BuildMenu({ categories })
  const [mounted, setMounted] = useState(false);
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  const appContext = useContext(AppContext);
  if (!mounted) return null;
  return (<div className="bg-th-background-primary  ">
    <Container>
    <nav className="md:mx-16 xl:mx-0 flex items-center justify-between flex-wrap py-6 ">
      <Logo />
      {/**Handle Hamburger toggle and set the display MobileMenu AppContext */}
      <ToggleMobileMenu />
      <div className={"w-full block flex-grow lg:flex  lg:items-center lg:w-auto " + (appContext.displayMobileMenu ? " hidden" : null)}>
        <MenuList menuItems={menuItems} />
        {/**To be replaced with Typesense Search 
        <Search />*/}
        <div className="flex items-center justify-between flex-row-reverse lg:flex-row">
          <div className="mt-4 lg:mt-0">
            <SunMoon />
          </div>
         {/**  <Login />*/}
        </div>
      </div>
    </nav>
    </Container>
  </div>
  )
}

export default Navbar

function BuildMenu({ categories }) {
  //const cat = categories.map((category) => { return {name: category.name, slug: category.slug}  })
  return [
    {
      menu: 'About Us',
      target: '/aboutus'
    },
    {
      menu: 'Products',
      target: '',
      subMenus:
      [
        {name:"ERP" ,href:"/products/erp"},
        {name:"Ecommerce",href:"/products/erp"},
        {name:"Digital Marketing",href:"/products/erp"}
      ]
    },
    {
      menu: 'Industries',
      target: '',
      subMenus:
      [
        {name:"Manufacturing",href:"/industries/manufacturing"},
        {name:"Retail",href:"/industries/retail"},
        {name:"Distribution",href:"/industries/distribution"},
        {name:"Education",href:"/industries/education"},
        {name:"Healthcare",href:"industries/healthcare"}
      ],
    },
    {
      menu: 'Services',
      target: '',
      subMenus:
      [
        {name:"Finance",href:"/services/finance"},
        {name:"Hr",href:"/services/hr"},
        {name:"Payroll",href:"/services/payroll"} 
      ]
    },
    {
      menu: 'Contact Us',
      target: '/contactus'
    }
  ]
}