import { useRouter } from "next/router";
import { Product } from "@/components/product";
import { IProduct } from "@/types/product.type";
import { menuShow } from "@/network/menu.network";
import { BreadCrumbs } from "@/components/breadCrumbs";
import { useCallback, useEffect, useState } from "react";
import { CartButton} from "@/components/button";
import { ICategory } from "@/types/category.type";

const ProductShow: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;
  
  const [show, setShow] = useState<IProduct | null>()
  
  /* Menu Show fetch Data */
  const menuShowFetchData = useCallback(async()=> {
    try {
      const response = await menuShow(id);
      if(response && response.status){
        console.log("ss",response.data.data);
        setShow(response.data?.data[0])
      }
    } catch (error:any) {
      console.log(error);
    }
  },[])

  /* useEffect */
  useEffect(()=> {
    menuShowFetchData()
  },[menuShowFetchData])

  return (
    <>
      {/* breadCrumbs */}
      <BreadCrumbs title1="Product show" title2="Chiken"></BreadCrumbs>

      {/* main content */}
      <section  className="container grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {/* image */}
        <div>
          <img className="mx-auto w-[400px] h-[300px]" src={show?.image} alt="" />
        </div>

        {/* container */}
        <div className="">
          {/* product name */}
          <div className="flex justify-between items-center w-96">
            <h2 className="text-gray-600 text-2xl">{show?.name}</h2>
            <h2 className="text-xl text-gray-500">{show?.price} Tk</h2>
          </div>

          {/* review */}
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-300 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>

          {/* category */}
          <div className=" my-5 flex gap-3">
            <h2 className="text-gray-600">Category:</h2>
            <span className="text-gray-500">{show?.category?.name}</span>
          </div>

          {/* short description */}
          <p className="text-justify w-96 text-gray-600">
            {show?.description}
          </p>
          {/* ingredient */}
          <div className=" my-5">
            <h2 className="text-gray-600">Ingredient</h2>
            <div className="flex gap-2">
             {show?.ingredient?.map((d, i)=> {
               return <img key={i} className="h-12 w-12 rounded-full" src={d.icon} alt="" />
             })}
            </div>
          </div>

          {/* cooking time */}
          <div className=" my-5 flex gap-3">
            <h2 className="text-gray-600">Cooking time:</h2>
            <span className="text-gray-500">{show?.cooking_time}</span>
          </div>

          {/* quantity */}
          <div className="flex my-5 text-gray-500">
            <span className="text-gray-600">Quantity:</span>
            <div className="flex gap-[1px] px-4">
              <span className="border border-gray-400  w-6 material-symbols-outlined">
                remove
              </span>
              <span className="border border-gray-400 w-6 text-center">2</span>
              <span className="border border-gray-400  w-6 material-symbols-outlined">
                add
              </span> 
            </div>
          </div>

          {/* button */}
          <div className="flex gap-4">
            <CartButton name="Add to cart"></CartButton>
            <CartButton name="Add to wishlisht"></CartButton>
          </div>
        </div>
      </section>
      {/* product description */}
      <section className="container">
        <p className="text-justify text-gray-600 my-10 md:w-[750px]">
          {show?.description}
        </p>
      </section>

      {/* releted product */}
      <div className="container mt-10 my-5">
        <h2 className="text-center text-xl text-primary py-4">
          As Like your product
        </h2>
        {/* menus */}
        {/* product */}
        <div
          className={`grid grid-cols-2 md:grid-cols-6 xxl:grid-cols-5 gap-4`}
        >
          <Product
            name="Chiken carry"
            price={20}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            image="/images/menu-item-1.png"
          ></Product>
          <Product
            name="Chicken rule"
            price={20}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            image="/images/menu-item-2.png"
          ></Product>
          <Product
            name="Noodules"
            price={20}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            image="/images/menu-item-3.png"
          ></Product>
          <Product
            name="Vagitable salat"
            price={20}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            image="/images/menu-item-4.png"
          ></Product>
          <Product
            name="Beef vhona"
            price={20}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            image="/images/menu-item-5.png"
          ></Product>
          <Product
            name="Special salat"
            price={20}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            image="/images/menu-item-6.png"
          ></Product>
          <Product
            name="Garlic salat"
            price={20}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            image="/images/banner1.png"
          ></Product>
        </div>
      </div>
    </>
  );
};
export default ProductShow;
