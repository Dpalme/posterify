import Logo from '#assets/Posterify.svg';
import CollectionIcon from '../icons/collectionIcon';
import SearchIcon from '../icons/searchIcon';
import { SearchField } from './searchField';
import { Link } from '@tanstack/react-router';
import { ReactNode } from 'react';

const NavLink = (props: { to: string; children: ReactNode; search?: any }) => {
  return (
    <Link
      to={props.to}
      className="navlink flex flex-row items-center gap-2 font-title text-sm hover:text-emerald-500 dark:text-slate-200"
      activeProps={() => ({
        className: 'text-emerald-600',
      })}
      search={props.search}
    >
      {props.children}
    </Link>
  );
};

export const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 z-20 flex w-full flex-row items-center justify-evenly gap-2 border-b border-slate-400 bg-white !bg-opacity-75 px-4 py-4 text-black backdrop-blur-md backdrop-filter md:bottom-auto md:top-0 md:justify-start md:gap-8 md:px-12 dark:border-slate-700 dark:bg-slate-800">
      <NavLink to="/">
        <img
          src={Logo}
          alt="Posterify Logo"
          className="w-8"
          height={24}
        />
        <span className="hidden md:inline-block">POSTERIFY</span>
      </NavLink>
      <NavLink to="/collection">
        <CollectionIcon />
        <span className="hidden md:block">Collection</span>
      </NavLink>
      <SearchField />
    </nav>
  );
};

export default Navbar;
