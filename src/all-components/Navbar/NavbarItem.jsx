
import PropTypes from 'prop-types';
import {  NavLink } from 'react-router-dom';
import './Navbaritem.css'


const NavbarItem = ({data}) => {
    return (
    

      <NavLink to={data.url} className={`hover:bg-white hover:text-green-500 py-2 my-2 px-2 rounded-md transition-all duration-500`}  >{data.title}</NavLink>
    ); 
};

NavbarItem.propTypes = {
    data:PropTypes.object
};

export default NavbarItem;