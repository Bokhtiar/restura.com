import { BreadCrumbs } from "@/components/breadCrumbs";
import { Product } from "@/components/product";
import { Title } from "@/components/title";
import Link from "next/link";
import { useState } from "react";

const Menu: React.FC = (): JSX.Element => {
  const [category, setCategory] = useState<boolean>(false);

  return (
    <>
      <BreadCrumbs title1="Menu"></BreadCrumbs>
      {/* our menu */}
      <section className="container grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* sidebar grid */}
        <div className=" col-span-1 shadow-lg p-4">
            <span className="text-gray-600 text-md">All Category</span>
            <ul>
                <li className="py-2 w-full border  px-3 rounded-md text-gray-500 hover:bg-primary hover:text-white my-2"> <Link href="" className="">Pizza</Link> </li>
                <li className="py-2 w-full border  px-3 rounded-md text-gray-500 hover:bg-primary hover:text-white my-2"> <Link href="" className="">Pizza</Link> </li>
                <li className="py-2 w-full border  px-3 rounded-md text-gray-500 hover:bg-primary hover:text-white my-2"> <Link href="" className="">Pizza</Link> </li>
                <li className="py-2 w-full border  px-3 rounded-md text-gray-500 hover:bg-primary hover:text-white my-2"> <Link href="" className="">Pizza</Link> </li>
                <li className="py-2 w-full border  px-3 rounded-md text-gray-500 hover:bg-primary hover:text-white my-2"> <Link href="" className="">Pizza</Link> </li>
                <li className="py-2 w-full border  px-3 rounded-md text-gray-500 hover:bg-primary hover:text-white my-2"> <Link href="" className="">Pizza</Link> </li>
                <li className="py-2 w-full border  px-3 rounded-md text-gray-500 hover:bg-primary hover:text-white my-2"> <Link href="" className="">Pizza</Link> </li>
                <li className="py-2 w-full border  px-3 rounded-md text-gray-500 hover:bg-primary hover:text-white my-2"> <Link href="" className="">Pizza</Link> </li>
                
            </ul>
        </div>

        {/* product grid */}
        <div className=" col-span-4 p-4">
          <div className="">
            {/* menus */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <span
                  className=" md:px-14 px-4 py-1  border border-primary cursor-pointer text-gray-600 rounded-sm relative"
                  onClick={() => setCategory(!category)}
                >
                  All Categories
                </span>
                <div
                  className={`bg-white md:w-[215px] w-[140px] shadow-2xl absolute pt-2 mt-1 px-1 ${
                    category ? " duration-700" : "scale-0 duration-700"
                  }`}
                >
                  <ul className="">
                    <li className="border border-dotted py-1 text-gray-600 my-1 px-2">
                      <Link href="">Pizza</Link>
                    </li>
                    <li className="border border-dotted py-1 text-gray-600 my-1 px-2">
                      <Link href="">Pizza</Link>
                    </li>
                    <li className="border border-dotted py-1 text-gray-600 my-1 px-2">
                      <Link href="">Pizza</Link>
                    </li>
                    <li className="border border-dotted py-1 text-gray-600 my-1 px-2">
                      <Link href="">Pizza</Link>
                    </li>
                    <li className="border border-dotted py-1 text-gray-600 my-1 px-2">
                      <Link href="">Pizza</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <span className="border border-primary text-gray-500 rounded-sm material-symbols-outlined">
                  list
                </span>
                <span className=" border border-primary text-gray-500 rounded-sm material-symbols-outlined">
                  view_cozy
                </span>
              </div>
            </div>

            {/* product */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Product
                name="Chiken carry"
                price={20}
                short_description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                image="/images/menu-item-1.png"
              ></Product>
              <Product
                name="Chicken rule"
                price={20}
                short_description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                image="/images/menu-item-2.png"
              ></Product>
              <Product
                name="Noodules"
                price={20}
                short_description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                image="/images/menu-item-3.png"
              ></Product>
              <Product
                name="Vagitable salat"
                price={20}
                short_description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                image="/images/menu-item-4.png"
              ></Product>
              <Product
                name="Beef vhona"
                price={20}
                short_description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                image="/images/menu-item-5.png"
              ></Product>
              <Product
                name="Special salat"
                price={20}
                short_description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                image="/images/menu-item-6.png"
              ></Product>
              <Product
                name="Garlic salat"
                price={20}
                short_description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                image="/images/banner1.png"
              ></Product>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Menu;
