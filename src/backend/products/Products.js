import React, {useState} from 'react';
import LayoutDashboard from '../LayoutDashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Products() { 

    const [filterFormToggle, setFilterFormToggle] = useState(false);
    const toggleFilter = ()=>{
        setFilterFormToggle(!filterFormToggle);
    }
  return (
    <LayoutDashboard name="dashboard">
        <div className='title-area'>
            <h2>Products</h2>
            <p><a href="#" className='btn btn-add'>Add New</a></p>
        </div>
        
        <div className='filters-area'>
            <div className='filter-title'>
                <h5>Search & Filters</h5>
                <FontAwesomeIcon icon={faAngleDown} onClick={toggleFilter} />
            </div>
            {filterFormToggle? 
            <div className='filter-form'>
                <p><label>Search By Text: <input type="text" name="searchText" placeholder='Search Text' /></label></p>
                <p><label>By Category: <select name="category"><option>Select</option></select></label></p>
                <p><label>By Make: <select name="make"><option>Select</option></select></label></p>
                <p><label>By Model: <select name="model"><option>Select</option></select></label></p>
                <p><label>By Author: <select name="author"><option>Select</option></select></label></p>
                <p><label>By MetaData: <select name="metadata"><option>Select</option></select></label></p>
            </div>
            :null}
        </div>
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th width="100">Date</th>
                <th width="100">Actions</th>
            </tr>
            </thead>   
            <tfoot>
                <tr>
                    <td colSpan={3}>
                        <ul className='pagination'>
                            <li><a href="#">1</a></li>
                            <li className='active'><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">6</a></li>
                            <li><a href="#">7</a></li>
                        </ul>
                    </td>
                </tr>
            </tfoot>
            <tbody>
                <tr>
                    <td>ABC Sample Product</td>
                    <td>12/01/2023</td>
                    <td>
                        <div className='acion-btn-cont'>
                            <a href="#" className='action-link'>
                                <FontAwesomeIcon icon={faEdit} />
                            </a>
                            <a href="#" className='action-link'>
                                <FontAwesomeIcon icon={faTrash} />
                            </a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>ABC Sample Product</td>
                    <td>12/01/2023</td>
                    <td>
                        <div className='acion-btn-cont'>
                            <a href="#" className='action-link'>
                                <FontAwesomeIcon icon={faEdit} />
                            </a>
                            <a href="#" className='action-link'>
                                <FontAwesomeIcon icon={faTrash} />
                            </a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>ABC Sample Product</td>
                    <td>12/01/2023</td>
                    <td>
                        <div className='acion-btn-cont'>
                            <a href="#" className='action-link'>
                                <FontAwesomeIcon icon={faEdit} />
                            </a>
                            <a href="#" className='action-link'>
                                <FontAwesomeIcon icon={faTrash} />
                            </a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>ABC Sample Product</td>
                    <td>12/01/2023</td>
                    <td>
                        <div className='acion-btn-cont'>
                            <a href="#" className='action-link'>
                                <FontAwesomeIcon icon={faEdit} />
                            </a>
                            <a href="#" className='action-link'>
                                <FontAwesomeIcon icon={faTrash} />
                            </a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>ABC Sample Product</td>
                    <td>12/01/2023</td>
                    <td>
                        <div className='acion-btn-cont'>
                            <a href="#" className='action-link'>
                                <FontAwesomeIcon icon={faEdit} />
                            </a>
                            <a href="#" className='action-link'>
                                <FontAwesomeIcon icon={faTrash} />
                            </a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>ABC Sample Product</td>
                    <td>12/01/2023</td>
                    <td>
                        <div className='acion-btn-cont'>
                            <a href="#" className='action-link'>
                                <FontAwesomeIcon icon={faEdit} />
                            </a>
                            <a href="#" className='action-link'>
                                <FontAwesomeIcon icon={faTrash} />
                            </a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>ABC Sample Product</td>
                    <td>12/01/2023</td>
                    <td>
                        <div className='acion-btn-cont'>
                            <a href="#" className='action-link'>
                                <FontAwesomeIcon icon={faEdit} />
                            </a>
                            <a href="#" className='action-link'>
                                <FontAwesomeIcon icon={faTrash} />
                            </a>
                        </div>
                    </td>
                </tr>
            </tbody>     
        </table>
    </LayoutDashboard>
    
  )
}
