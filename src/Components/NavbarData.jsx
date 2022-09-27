import React from 'react'
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
export const NavbarData=[
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Login',
        path:'/login',
        icon:<IoIcons.IoMdLogIn/>,
        cName:'nav-text'
    },
    {
        title:'Add Stock',
        path:'/addstock',
        icon:<MdIcons.MdInventory/>,
        cName:'nav-text'
    }
]