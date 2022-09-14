import './desktopHeader.scss';
import { Logo } from '../assets';
import searchIcon from '../assets/search.png';

const DesktopHeader = () => {
  return (
    <div className="desktopHeader">
      <div className="top">
        <div className="left">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <div className="right">
          <div className="search">
            <img src={searchIcon} alt="search icon" />
            <span>Search</span>
          </div>
          <a href="/awd">Nicorette Support</a>
        </div>
      </div>
      <div className="bottom">
        <div className="menuItems">
          <li>Products</li>
          <li>Getting Ready to Quit</li>
          <li>During the Quit Journey</li>
          <li>Success stories</li>
          <li>About Nicorette</li>
          <li>Useful Information</li>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
