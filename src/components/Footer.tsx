import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='p-3 bg-white flex flex-col items-center gap-3'>
      <div className='flex gap-3'>
        <Link href="#">Privacy</Link>
        <Link href="#">Terms</Link>
        <Link href="#">Condition</Link>
      </div>
      <p className='text-center'>Copyright © 2024, mfaizanakram LLc</p>
    </div>
  );
}

export default Footer;
