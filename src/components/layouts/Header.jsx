'use client';
import { Menu } from '@/constants/generate';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <div className="relative w-full z-30">
      <div className="h-[61px]  relative z-10">
        <div className="container h-full max-w-[1270px] flex justify-between items-center">
          <Link href={'/'}>
            <Image
              src={'https://www.luongson40.tv/wp-content/uploads/2023/12/LOGO-LUONGSON-TV-1024x244.webp'}
              width={200}
              height={100}
              objectFit="contain"
            />
          </Link>
          <div className="flex gap-6 items-center justify-between">
            {Menu.map((item, index) => (
              <li key={item.key} className="list-none">
                <Link href={item.link}>{item.text}</Link>
              </li>
            ))}
          </div>
          <Link href={'/'}>
            <Image
              src={'https://www.luongson40.tv/wp-content/uploads/2023/12/LOGO-LUONGSON-TV-1024x244.webp'}
              width={200}
              height={100}
              objectFit="contain"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
