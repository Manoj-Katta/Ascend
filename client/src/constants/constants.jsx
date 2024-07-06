import { HiOutlineHome, HiOutlineUserCircle } from 'react-icons/hi';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

const sidebarNavItems = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <HiOutlineHome className="sidebar-btn-icon" />,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <HiOutlineUserCircle className="sidebar-btn-icon" />,
  },
];

const socialLinks = [
  {
    title: 'Github',
    url: '#',
    icon: <FaGithub className="social-link" />,
  },
];

const charBannerText = {
};

export { sidebarNavItems, socialLinks, charBannerText };
