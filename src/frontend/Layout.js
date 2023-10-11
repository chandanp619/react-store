import React, { Children } from 'react'
import Sidebar from './Sidebar';
import Footer from './Footer';
import Header from './Header';

export default function Layout({Name,DisplaySidebar, Sidebar, children}) {

  return (
    <>
        <div className='header'><Header /></div>
        <div className={'contain '+Name+'-contain'}>
            {  (DisplaySidebar !==  false) ? 
            <div className="sidebar">{Sidebar}</div>
            : null
            }
            <div className="content">{children}</div>
        </div>
        <div className='footer'><Footer /></div>
    </>
  )
}
