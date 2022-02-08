import React from 'react';
import { Link } from 'react-router-dom'
import logo from './../assets/images/Logo-2.png'

const Header = () => {
  const NavMenu = [
    {
      display: 'Trang Chủ',
      path: '/'
    },
    {
      display: 'Sản phẩm',
      path: '/san-pham'
    },
    {
      display: 'Phụ kiện',
      path: '/phu-kien'
    },
    {
      display: 'Liên hệ',
      path: '/lien-he'
    },
  ]
  return (
    <div className="header">
      <div className="header-menu">
        {
          NavMenu.map((item, i) => (
            <Link key={i} to={item.path}>{item.display}</Link>
          ))
        }
      </div>
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-right">
        <i class='bx bx-search icon'></i>
        <i class='bx bx-cart icon'></i>
        <i class='bx bx-user icon' ></i>
      </div>
    </div>
  );
};

export default Header;
