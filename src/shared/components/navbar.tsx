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
      className="font-title navlink flex flex-row items-center gap-2 text-sm hover:text-emerald-500"
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
    <nav className="dark:bg-dark-700 !bg-opacity-75 fixed top-0 right-0 bottom-0 bottom-auto left-0 z-20 flex w-full flex-row items-center justify-evenly gap-2 gap-8 border-b border-slate-400 bg-white px-4 py-4 text-black backdrop-blur-md backdrop-filter md:justify-start md:px-12 dark:border-slate-700 dark:text-white">
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
      <div className="md:(ml-auto block) hidden">
        <SearchField />
      </div>
    </nav>
  );
};

export default Navbar;
