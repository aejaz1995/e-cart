import React from 'react'
    import  * as FaIcons  from 'react-icons/fa'
    import * as AiIcons from "react-icons/ai"
import  * as IoIcons from 'react-icons/io'
import * as RiIcons from "react-icons/ri"
import * as GiIcons from "react-icons/gi"
import * as FcIcons from "react-icons/fc"

export const SideBarData = [
    {
    title: 'FASHION',
    path: '/fashion',
    icon : <GiIcons.GiClothes />,
    iconClosed : <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,

    subNav : [
     {
        title: 'MEN',
        path: '/fashion/men',
        icon:  <IoIcons.IoMdMan />
     },
     {
        title: 'WOMEN',
        path: '/fashion/women',
        icon:  <IoIcons.IoMdWoman />
     }
   ]
 },
 {
    title: 'ELECTRONICS',
   //  path: '/electronics',
    icon : <FcIcons.FcElectronics />,
    iconClosed : <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,

    subNav : [
     {
        title: 'MOBILE',
        path: '/electronics/mobile',
        icon:  <FaIcons.FaMobile />
     },
     {
        title: 'LAPTOP',
        path: '/electronics/laptop',
        icon:  <IoIcons.IoIosLaptop />
     },
     {
        title: 'ACCESSORIES',
        path: '/electronics/accessories',
        icon:  <FaIcons.FaHeadphonesAlt    />
     },
   ]
 },

 {
     title:'CART',
     path : '/cart',
     icon : <IoIcons.IoMdCart />
 },
//  {
//     title:'Team',
//     path : '/team',
//     icon : <IoIcons.IoMdPeople />
// },
{
    title:'NOTIFICATIONS',
    path:'/notifications',
    icon: <IoIcons.IoMdNotifications />,
   //  subNav: [{
   //      title: 'Message 1',
   //      path: '/message/message1',
   //      icon:  <IoIcons.IoIosPaper />
   //   },
   //   {
   //      title: 'Message 2',
   //      path: '/message/message2',
   //      icon:  <IoIcons.IoMdNotifications />
   //   },]
},
{
    title:'SUPPORT',
    path:'/support',
    icon: <IoIcons.IoMdHelpCircle />
}

]
