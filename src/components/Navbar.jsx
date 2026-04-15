'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BiHomeAlt2 } from 'react-icons/bi';
import { ImStatsDots } from 'react-icons/im';
import { RiTimeLine } from 'react-icons/ri';

const Navbar = () => {
  const panthname = usePathname();

  const links = (
    <>
      <li>
        <Link
          className={`flex gap-1.5 items-center ${panthname === '/' ? 'active' : ''}`}
          href="/"
          aria-current={panthname === '/' ? 'page' : undefined}
        >
          <BiHomeAlt2 aria-hidden="true" />
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`flex gap-1.5 items-center ${panthname === '/timeline' ? 'active' : ''}`}
          href="/timeline"
          aria-current={panthname === '/timeline' ? 'page' : undefined}
        >
          <RiTimeLine aria-hidden="true" />
          Timeline
        </Link>
      </li>
      <li>
        <Link
          className={`flex gap-1.5 items-center ${panthname === '/stats' ? 'active' : ''}`}
          href="/stats"
          aria-current={panthname === '/stats' ? 'page' : undefined}
        >
          <ImStatsDots aria-hidden="true" />
          Stats
        </Link>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="nav-warp navbar my-container justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost md:hidden"
              aria-label="Open navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href="/" aria-label="KeenKeeper home">
            <Image
              src="/assets/logo.png"
              alt="KeenKeeper logo"
              width={140}
              height={40}
              style={{ height: 'auto' }}
              priority
            />
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="flex gap-4">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
