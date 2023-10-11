import { faArrowLeft, faArrowRight, faBagShopping, faBook, faDoorOpen, faGear, faHome, faMoneyBill, faMortarPestle, faTrophy, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';


export default function Sidebar({toggle}) {
  useEffect(()=>{

  });
  const setToggle = (v)=>{
    if(v){
      toggle('hide');
    }else{
      toggle('');
    }
  }
  return (
    <>
        <h4>Administrator</h4>
        <div class="toggle-icon-logo">
          <FontAwesomeIcon icon={faTrophy} />
        </div>
        <span className='toggle-icon-open'><FontAwesomeIcon icon={faArrowRight} onClick={()=>setToggle(false)} /></span>
        <span className='toggle-icon-close'><FontAwesomeIcon icon={faArrowLeft} onClick={()=>setToggle(true)} /></span>
        <div className='item-container'>
            <ul>
                <li><a href="/admin/"><FontAwesomeIcon icon={faHome} /><span>Dashboard</span></a></li>
                <li><a href="/admin/products"><FontAwesomeIcon icon={faMortarPestle} /><span>Products</span></a></li>
                <li><a href="/admin/orders"><FontAwesomeIcon icon={faBagShopping} /><span>Orders</span></a></li>
                <li><a href="/admin/orders"><FontAwesomeIcon icon={faMoneyBill} /><span>Payments</span></a></li>
                <li><a href="/admin/users"><FontAwesomeIcon icon={faUser} /><span>Users</span></a></li>
                <li><a href="/admin/pages"><FontAwesomeIcon icon={faBook} /> <span>Pages</span></a></li>
                <li><a href="/admin/settings"><FontAwesomeIcon icon={faGear} /><span>Settings</span></a></li>
                
            </ul>
        </div>
        <div className='sidebar-footer'>
            <ul>
              <li>
                <a href="/admin/logout"><FontAwesomeIcon icon={faDoorOpen} /><span>Logout</span></a>
              </li>
            </ul>
            
        </div>
    </>
  )
}
