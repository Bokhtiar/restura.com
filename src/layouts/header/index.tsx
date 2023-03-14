import Link from 'next/link'
import Image from "next/image";
import React, { useState } from "react";


export const Header: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const navd = () => {
    console.log('ok');
    alert('hi')

    setOpen(!open)
  }

  return (
    <>
      <section className="bg-white">
        <div className="container flex items-center justify-between py-6">
          {/* logo */}
          <Image
            src="/./images/logo.png"
            alt="Picture of the author"
            width={150}
            height={50}
          />
          {/* toggle button */}
          <div className='top-[35px] cursor-pointer absolute right-4 md:hidden ' onClick={() => setOpen(!open)}>
            {open ? <span className="material-symbols-outlined">close</span> : <span className="material-symbols-outlined">menu</span>}
          </div>
          {/* menu */}
          <div>
            <ul className={` md:flex items-center gap-8  absolute md:static left-0 bg-white md:z-auto w-full top-10  ${open ? 'top-20' : 'top-[-200px]'}`}>
              <li><Link className=" font-bold text-lg font-nunito" href="/">Home</Link></li>
              <li> <Link href="/">Menus</Link> </li>
              <li> <Link href="/">About</Link> </li>
              <li> <Link href="/">Contact</Link> </li>
              <li> <Link href="/"><span className="material-symbols-outlined">shopping_cart</span></Link> </li>
              <li> <Link href="/"><span className="material-symbols-outlined">account_circle</span></Link> </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
