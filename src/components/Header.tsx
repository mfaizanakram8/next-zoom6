'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Header = () => {
  const pathname = usePathname(); 

  return (
    <div className='p-3 bg-white flex justify-end gap-3'>
      {pathname !== '/' && (
        <Link href="/" className="pl-3 pr-3">
          Home
        </Link>
      )}
      {pathname !== '/about' && (
        <Link href="/about" className="pl-3 pr-3">
          About
        </Link>
      )}
      {pathname !== '/address' && (
        <Link href="/address" className="pl-3 pr-3">
          Address
        </Link>
      )}
      {pathname !== '/contact' && (
        <Link href="/contact" className="pl-3 pr-3">
          Contact
        </Link>
      )}
    </div>
  );
};

export default Header;