import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Visit',
    path: '/visit',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'SD',
    path: '/sd',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Mapel',
        path: '/sd/mapel',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      // {
      //   title: 'BI',
      //   path: '/sd/bi',
      //   icon: <IoIcons.IoIosPaper />,
      //   cName: 'sub-nav'
      // },
      // {
      //   title: 'IPA',
      //   path: '/sd/ipa',
      //   icon: <IoIcons.IoIosPaper />
      // }
    ]
  },
  {
    title: 'SMP',
    path: '/smp',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Mapel',
        path: '/smp/mapel',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      // {
      //   title: 'BI',
      //   path: '/smp/bi',
      //   icon: <IoIcons.IoIosPaper />,
      //   cName: 'sub-nav'
      // },
      // {
      //   title: 'IPA',
      //   path: '/smp/ipa',
      //   icon: <IoIcons.IoIosPaper />
      // }
    ]
  },
  {
    title: 'SMA',
    path: '/sma',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Mapel',
        path: '/sma/mapel',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      // {
      //   title: 'BI',
      //   path: '/sma/bi',
      //   icon: <IoIcons.IoIosPaper />,
      //   cName: 'sub-nav'
      // },
      // {
      //   title: 'IPA',
      //   path: '/sma/ipa',
      //   icon: <IoIcons.IoIosPaper />
      // }
    ]
  },
  {
    title: 'Fitur',
    path: '/fitur',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Data',
        path: '/fitur/data',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      // {
      //   title: 'Random topic',
      //   path: '/fitur/random-topic',
      //   icon: <IoIcons.IoIosPaper />,
      //   cName: 'sub-nav'
      // },
      // {
      //   title: 'Search',
      //   path: '/fitur/search',
      //   icon: <IoIcons.IoIosPaper />
      // },
      // {
      //   title: 'FAQ',
      //   path: '/fitur/faq',
      //   icon: <IoIcons.IoIosPaper />
      // }
    ]
  },
  
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />
  // }
];
