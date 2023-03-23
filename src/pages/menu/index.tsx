import { BreadCrumbs } from "@/components/breadCrumbs";
import { LoadingProduct, Product } from "@/components/product";
import { Title } from "@/components/title";
import { Menus } from "@/network/menu.network";
import { IProduct } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const Menu: React.FC = (): JSX.Element => {
  const [col, setCol] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<boolean>(false);
  const [product, setProduct] = useState<IProduct[] | []>([]);

  /* fetchData */
  const fetchData = useCallback(async () => {
    setLoading(false);
    const response = await Menus();
    if (response && response.status === 200) {
      setProduct(response.data.data);
      setLoading(true);
      console.log(response);
    }
  }, []);

  /* useEffect */
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <BreadCrumbs title1="Menu"></BreadCrumbs>
      {/* our menu */}
      <section className="container grid grid-cols-1 md:grid-cols-5 md:gap-4">
        {/* sidebar grid */}
        <div className="col-span-1 shadow-lg p-4">
          <span className="text-gray-600 text-md">All Category</span>
          <ul>
            <li className="py-2 w-full border  px-3 rounded-md text-gray-500 hover:bg-primary hover:text-white my-2 flex justify-between gap-2">
              <div className="flex gap-2">
                <Image
                  src="/images/menu-item-1.png"
                  alt="Picture of the author"
                  width={25}
                  height={20}
                />
                <Link href="" className="">
                  Pizza
                </Link>
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </li>

            <li className="py-2 w-full border  px-3 rounded-md text-gray-500 hover:bg-primary hover:text-white my-2 flex justify-between gap-2">
              <div className="flex gap-2">
                <Image
                  src="/images/menu-item-1.png"
                  alt="Picture of the author"
                  width={25}
                  height={20}
                />
                <Link href="" className="">
                  Pizza
                </Link>
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </li>

            <li className="py-2 w-full border  px-3 rounded-md text-gray-500 hover:bg-primary hover:text-white my-2 flex justify-between gap-2">
              <div className="flex gap-2">
                <Image
                  src="/images/menu-item-1.png"
                  alt="Picture of the author"
                  width={25}
                  height={20}
                />
                <Link href="" className="">
                  Pizza
                </Link>
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </li>

            <li className="py-2 w-full border  px-3 rounded-md text-gray-500 hover:bg-primary hover:text-white my-2 flex justify-between gap-2">
              <div className="flex gap-2">
                <Image
                  src="/images/menu-item-1.png"
                  alt="Picture of the author"
                  width={25}
                  height={20}
                />
                <Link href="" className="">
                  Pizza
                </Link>
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </li>

            <li className="py-2 w-full border  px-3 rounded-md text-gray-500 hover:bg-primary hover:text-white my-2 flex justify-between gap-2">
              <div className="flex gap-2">
                <Image
                  src="/images/menu-item-1.png"
                  alt="Picture of the author"
                  width={25}
                  height={20}
                />
                <Link href="" className="">
                  Pizza
                </Link>
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </li>

            <li className="py-2 w-full border  px-3 rounded-md text-gray-500 hover:bg-primary hover:text-white my-2 flex justify-between gap-2">
              <div className="flex gap-2">
                <Image
                  src="/images/menu-item-1.png"
                  alt="Picture of the author"
                  width={25}
                  height={20}
                />
                <Link href="" className="">
                  Pizza
                </Link>
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </li>

            <li className="py-2 w-full border  px-3 rounded-md text-gray-500 hover:bg-primary hover:text-white my-2 flex justify-between gap-2">
              <div className="flex gap-2">
                <Image
                  src="/images/menu-item-1.png"
                  alt="Picture of the author"
                  width={25}
                  height={20}
                />
                <Link href="" className="">
                  Pizza
                </Link>
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </li>

            <li className="py-2 w-full border  px-3 rounded-md text-gray-500 hover:bg-primary hover:text-white my-2 flex justify-between gap-2">
              <div className="flex gap-2">
                <Image
                  src="/images/menu-item-1.png"
                  alt="Picture of the author"
                  width={25}
                  height={20}
                />
                <Link href="" className="">
                  Pizza
                </Link>
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </li>
          </ul>
        </div>

        {/* product grid */}
        {isLoading ? (
          <>
            <div className=" col-span-4 p-4">
              <div className="">
                {/* menus */}
                <div className="flex items-center justify-between mb-4">
                  <p
                    className="p-1 text-gray-500 border border-primary rounded-t-sm px-6 cursor-pointer hover:bg-primary hover:text-white"
                    onClick={() => setCol(0)}
                  >
                    Defult items
                  </p>

                  {/* right side icon */}
                  <div className="flex gap-2 items-center">
                    <span
                      className="border border-primary text-gray-500 rounded-sm material-symbols-outlined cursor-pointer hover:bg-primary hover:text-white"
                      onClick={() => setCol(3)}
                    >
                      list
                    </span>
                    <span
                      className=" border border-primary text-gray-500 rounded-sm material-symbols-outlined cursor-pointer hover:bg-primary hover:text-white"
                      onClick={() => setCol(5)}
                    >
                      view_cozy
                    </span>
                  </div>
                </div>

                {/* product */}
                <div
                  className={`grid grid-cols-2 ${
                    col ? `md:grid-cols-${col}` : "md:grid-cols-4"
                  } ${
                    col ? `xxl:grid-cols-${col}` : " xxl:grid-cols-5"
                  }  gap-4`}
                >
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
          </>
        ) : (
          <>
            <section className="col-span-4 p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              <LoadingProduct></LoadingProduct>
              <LoadingProduct></LoadingProduct>
              <LoadingProduct></LoadingProduct>
              <LoadingProduct></LoadingProduct>
              <LoadingProduct></LoadingProduct>
              <LoadingProduct></LoadingProduct>
              <LoadingProduct></LoadingProduct>
              <LoadingProduct></LoadingProduct>
              <LoadingProduct></LoadingProduct>
            </section>
          </>
        )}
      </section>
    </>
  );
};
export default Menu;
