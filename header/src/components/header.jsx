import { useMediaQuery } from 'react-responsive';
import DesktopHeader from './desktopHeader';
import MobileHeader from './mobileHeader';

const Header = () => {
  const desktopView = useMediaQuery({
    query: '(min-width: 850px)',
  });
  return (
    <>
      {desktopView && <DesktopHeader />}
      {!desktopView && <MobileHeader />}
    </>
  );
};

export default Header;
