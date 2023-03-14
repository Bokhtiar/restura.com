import Image from "next/image";
import React, { useState } from "react";


export const Header: React.FC = (): JSX.Element => {
    const [open, setOpen] = useState <boolean>(false)

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
          {/* menu */}
          <div>
            <button>=</button>
            <ul className="flex items-center gap-8 invisible md:visible">
                <li><a className=" font-bold text-lg font-nunito" href="/">Home</a></li>
                <li> <a href="/">Menus</a> </li>
                <li> <a href="/">About</a> </li>
                <li> <a href="/">Contact</a> </li>
                <li> <a href="/"><span className="material-symbols-outlined">shopping_cart</span></a> </li>
                <li> <a href="/"><span className="material-symbols-outlined">account_circle</span></a> </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
