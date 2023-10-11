import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

export default function LayoutDashboard({name, children}) {
    const [topClass, setTopClass] = useState('');
    const [sidebarClass, setSidebarClass]  = useState('');
    const [togglerClass, setTogglerClass] = useState('');
    useEffect(()=>{
      setTopClass(`total-container content-${name}`);
      setSidebarClass(`sidebar-container ${togglerClass}`);
    });
  return (
    <div className={topClass}>
        <div className={sidebarClass}><Sidebar toggle={setTogglerClass}/></div>
        <div className='content-container'>{children}</div>
    </div>
  )
}
