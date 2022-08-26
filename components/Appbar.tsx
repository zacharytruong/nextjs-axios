import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { signUpIcon } from '../components/SvgIcons';
import { useThemeContext } from '../libraries/ThemeContext';
import {
  AdminOptions,
  AppbarContainer,
  DateInfo,
  LogOutOption,
  ThemeSwitcher,
  UserInfo
} from '../styles/Appbar';
import { formatDay, formatMonth } from '../libraries/formatter';
import { useAccount } from '../libraries/AccountContext';
import SignOut from './SignOut';

const Appbar = () => {
  const { toggleTheme } = useThemeContext();
  const { isAuthenticated } = useAccount();
  const [time, setTime] = useState('0:00:00 AM');
  const [openSignOutModal, setOpenSignOutModal] = useState(false);
  const today = new Date();
  const getCurrentTime = () => today.toLocaleTimeString();
  const currentTime = getCurrentTime();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();
  const currentDay = today.getDay();

  // Update clock per second.
  useEffect(() => {
    const interval = setInterval(() => setTime(currentTime), 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <AppbarContainer>
      {openSignOutModal ? <SignOut setOpenSignOutModal={setOpenSignOutModal}/> : null}
      <DateInfo>
        <p>{time}</p>
        <p>
          {formatDay(currentDay)}, {formatMonth(currentMonth)} {currentDate},{' '}
          {currentYear}.
        </p>
      </DateInfo>
      <AdminOptions>
        {isAuthenticated ? (
          <UserInfo>
            <p>Hello,</p>
            <p>John Cena</p>
          </UserInfo>
        ) : null}

        <ThemeSwitcher onClick={toggleTheme}>
          <FontAwesomeIcon icon={faSun} size="2x" className="theme" />
        </ThemeSwitcher>
        {isAuthenticated ? <LogOutOption onClick={() => setOpenSignOutModal(true)}>{signUpIcon()}</LogOutOption> : null}
      </AdminOptions>
    </AppbarContainer>
  );
};

export default Appbar;
