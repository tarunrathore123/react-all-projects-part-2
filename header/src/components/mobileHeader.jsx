import './mobileHeader.scss';
import {
  Logo,
  MenuIcon,
  Search,
  Close,
  RightArrow,
  LeftArrow,
} from '../assets';
import { useState } from 'react';

const MobileHeader = () => {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState(false);
  const [getting, setGetting] = useState(false);
  return (
    <div className="mobileHeader">
      <div className="normalHeader">
        <img
          className="menuIcon"
          src={MenuIcon}
          alt=""
          onClick={() => setShow(!show)}
        />
        <img src={Logo} alt="" className="logo" />
        <img className="search" src={Search} alt="" />
      </div>
      {show && (
        <div className="popupOverlay">
          <div className="top">
            <img className="logo" src={Logo} alt="" />
            <img
              className="close"
              src={Close}
              alt=""
              onClick={() => {
                setShow(!show);
                setProducts(false);
                setGetting(false);
              }}
            />
          </div>
          <div className="items">
            <div className="liItems">
              <li onClick={() => setProducts(true)}>
                <span>Products</span>
                <img src={RightArrow} alt="" />
              </li>
              <li onClick={() => setGetting(true)}>
                <span>Getting Ready to Quit</span>
                <img src={RightArrow} alt="" />
              </li>
              <li>
                <span>During the Quit Journey</span>
                <img src={RightArrow} alt="" />
              </li>
              <li>
                <span>Success stories</span>
                <img src={RightArrow} alt="" />
              </li>
              <li>
                <span>About Nicorette</span>
                <img src={RightArrow} alt="" />
              </li>
              <li>
                <span>Useful Information</span>
                <img src={RightArrow} alt="" />
              </li>
            </div>
            {products && (
              <div className="subMenus">
                <img
                  src={LeftArrow}
                  alt=""
                  onClick={() => setProducts(false)}
                />{' '}
                Products Sub Menu
              </div>
            )}
            {getting && (
              <div className="subMenus">
                <img src={LeftArrow} alt="" onClick={() => setGetting(false)} />{' '}
                Getting ready to quit sub menus
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
